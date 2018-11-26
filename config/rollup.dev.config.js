import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";

export default {
  input: "src/index.js",
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
    resolve(),
    babel({
      presets: [
        ["@babel/preset-env", { modules: false }],
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
