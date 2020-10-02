const semver = require("semver");
const pkg = require("../package.json");

const isESMBuild = process.env.BUILD_MODULE_TYPE === "esm";
module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: isESMBuild ? false : "commonjs",
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
      "babel-plugin-styled-components",
      {
        displayName: false,
        pure: true
      }
    ],
    [
      "babel-plugin-transform-react-remove-prop-types",
      {
        mode: "unsafe-wrap"
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
      "@babel/plugin-transform-runtime",
      {
        useESModules: isESMBuild,
        version: semver.minVersion(pkg.peerDependencies["@babel/runtime"])
          .version
      }
    ]
  ],
  babelrc: false
};
