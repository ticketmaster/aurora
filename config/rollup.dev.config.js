import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default {
  input: "src/index.tsx",
  output: [
    {
      file: "dist/index.umd.js",
      format: "umd",
      sourcemap: true,
      name: "TicketmasterAurora",
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
        "react-transition-group": "ReactTransitionGroup",
        "prop-types": "PropTypes",
        "styled-components": "styled",
        classnames: "classNames"
      }
    },
    {
      file: "dist/index.cjs.js",
      format: "cjs",
      sourcemap: true
    },
    {
      file: "dist/index.es.js",
      format: "es",
      sourcemap: true
    }
  ],
  plugins: [
    resolve({ extensions }),
    babel({
      presets: [
        ["@babel/preset-env", { modules: false, useBuiltIns: "entry" }],
        "@babel/preset-react",
        "@babel/preset-typescript"
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
      babelrc: false,
      extensions
    })
  ],
  external: [
    "react",
    "react-dom",
    "react-transition-group",
    "prop-types",
    "styled-components",
    "classnames"
  ]
};
