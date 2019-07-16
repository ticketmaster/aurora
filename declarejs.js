/**
 * This script will generate exports from the js components. The goal is to rollout gradually typescript versions
 * on those components.
 */
const path = require("path");
const fs = require("fs");

const srcPath = path.resolve(__dirname, "src");
const libPath = path.resolve(__dirname, "lib");
const exportPattern = /^\s*export[\s\n\r]+(default|class|const|var|let)[\s\n\r]+([a-zA-Z0-9_$]+)?/gm;
const exportSymbolsPattern = /^\s*export\s*\{[^}]*}[^;]*;/gm;
const fromPattern = /\bfrom\b/;
const symbolPattern = /[{,][\s\n\r]*([A-Za-z0-9_$]+)(?:[\s\n\r]+as[\s\n\r]+([A-Za-z0-9_$]+))?/g;

const matches = (str, re) => Array.from(matchesGenerator(str, re));

const stubDefaultExport = () => `
    declare const component: any;
    export default component;
`;

const stubNamedExport = name => `
    export const ${name}: any;
`;

const stubExportAs = line =>
  matches(line, symbolPattern).map(match =>
    stubNamedExport(match[2] || match[1])
  );

const readdirRecursive = dirname =>
  fs
    .readdirSync(dirname, { withFileTypes: true })
    .map(dirent =>
      Object.assign(dirent, { joinedPath: path.join(dirname, dirent.name) })
    )
    .flatMap(dirent => {
      if (dirent.isFile()) {
        return [dirent.joinedPath];
      }
      if (dirent.isDirectory()) {
        return readdirRecursive(dirent.joinedPath);
      }
      return [];
    });

const removeExtension = str =>
  str.substr(0, str.length - path.extname(str).length);

const noext = (strings, ...values) =>
  strings.reduce(
    (previous, str, index) =>
      `${previous}${str}${removeExtension(values[index] || "")}`,
    ""
  );

const stubExports = content =>
  [
    matches(content, exportPattern).map(
      match =>
        match[1] === "default" ? stubDefaultExport() : stubNamedExport(match[2])
    ),
    matches(content, exportSymbolsPattern)
      .map(match => match[0])
      .filter(str => fromPattern.test(str)),
    matches(content, exportSymbolsPattern)
      .map(match => match[0])
      .filter(str => !fromPattern.test(str))
      .map(stubExportAs)
  ]
    .flat(Number.MAX_VALUE)
    .join("\n");

const createDeclaration = name => {
  const outFile = path.join(libPath, noext`${name}.d.ts`);
  const inFile = path.join(srcPath, name);

  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, stubExports(fs.readFileSync(inFile), "utf8"));
};

function* matchesGenerator(str, re) {
  let m = re.exec(str);

  while (m) {
    yield m;
    m = re.exec(str);
  }
}

readdirRecursive(srcPath)
  .filter(name => path.extname(name) === ".js" && !name.includes("__tests__"))
  .map(name => path.relative(srcPath, name))
  .forEach(createDeclaration);
