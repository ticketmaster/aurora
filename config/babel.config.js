const pkg = require("../package.json");
const semver = require("semver");

const isCjsBuild = process.env.BABEL_BUILD === "cjs";
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: isCjsBuild ? "commonjs" : false,
        bugfixes: true,
        loose: true
      }
    ],
    [
      "@babel/preset-react",
      {
        useBuiltIns: true
      }
    ],
    "@babel/preset-typescript"
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        useESModules: !isCjsBuild,
        version: semver.minVersion(pkg.peerDependencies["@babel/runtime"])
          .version
      }
    ],
    [
      "@babel/plugin-proposal-object-rest-spread",
      {
        loose: true,
        useBuiltIns: true
      }
    ],
    [
      "@babel/plugin-proposal-class-properties",
      {
        loose: true
      }
    ],
    [
      "babel-plugin-transform-react-remove-prop-types",
      {
        mode: "unsafe-wrap"
      }
    ],
    [
      "babel-plugin-styled-components",
      {
        displayName: false,
        pure: true
      }
    ]
  ],
  babelrc: false
};
