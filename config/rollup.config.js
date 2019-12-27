import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import babel from "rollup-plugin-babel";
import { terser } from "rollup-plugin-terser";

import pkg from "../package.json";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default {
  input: "src/index.tsx",
  preserveModules: true,
  output: [
    {
      dir: "dist/cjs",
      format: "cjs"
    },
    {
      dir: "dist/esm",
      format: "esm"
    }
  ],
  plugins: [
    resolve({ extensions }),
    babel({
      presets: [
        [
          "@babel/preset-env",
          {
            modules: false
          }
        ],
        "@babel/preset-react",
        "@babel/preset-typescript"
      ],
      plugins: [
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-proposal-class-properties",
        [
          "babel-plugin-transform-react-remove-prop-types",
          {
            removeImport: true
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
      extensions,
      babelrc: false
    }),
    commonjs(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    terser()
  ],
  external: Object.keys(pkg.peerDependencies)
};
