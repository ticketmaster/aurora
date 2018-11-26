import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import uglify from "rollup-plugin-uglify";

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/index.umd.min.js",
      format: "umd",
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
      file: "dist/index.cjs.min.js",
      format: "cjs"
    },
    {
      file: "dist/index.es.min.js",
      format: "es"
    }
  ],
  plugins: [
    resolve(),
    babel({
      presets: [
        ["@babel/preset-env", { modules: false }],
        "@babel/preset-react"
      ],
      plugins: [
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-proposal-class-properties"
      ],
      babelrc: false
    }),
    uglify()
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
