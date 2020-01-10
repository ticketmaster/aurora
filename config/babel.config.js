const isCjsBuild = process.env.BABEL_ENV === "cjs";

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: isCjsBuild ? "commonjs" : false
      }
    ],
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  plugins: [
    [
      "@babel/plugin-proposal-object-rest-spread",
      {
        loose: true,
        useBuiltIns: true
      }
    ],
    "@babel/plugin-proposal-class-properties",
    [
      "babel-plugin-transform-react-remove-prop-types",
      {
        mode: "unsafe-wrap"
      }
    ],
    "@babel/plugin-transform-runtime",
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
