import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import stripPropTypes from "rollup-plugin-strip-prop-types";
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
      presets: [["env", { modules: false }], "react"],
      plugins: [
        "transform-object-rest-spread",
        "transform-class-properties",
        "external-helpers"
      ],
      babelrc: false
    }),
    stripPropTypes({ sourceMap: false }),
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
