import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";

export const PLUGINS_DEV = [
  resolve(),
  babel({
    presets: [
      ["@babel/preset-env", { modules: false, useBuiltIns: "entry" }],
      "@babel/preset-react"
    ],
    plugins: [
      "@babel/plugin-proposal-object-rest-spread",
      "@babel/plugin-proposal-class-properties",
      [
        "babel-plugin-styled-components",
        {
          displayName: true
        }
      ]
    ],
    babelrc: false
  })
];

export const PLUGINS_PROD = [
  resolve(),
  babel({
    presets: [
      ["@babel/preset-env", { modules: false, useBuiltIns: "entry" }],
      "@babel/preset-react"
    ],
    plugins: [
      "@babel/plugin-proposal-object-rest-spread",
      "@babel/plugin-proposal-class-properties",
      "babel-plugin-transform-react-remove-prop-types"
    ],
    babelrc: false
  }),
  terser()
];

export const EXTERNAL = [
  "react",
  "react-dom",
  "react-transition-group",
  "prop-types",
  "styled-components",
  "classnames"
];
