import { PLUGINS_PROD, EXTERNAL } from "./constants";

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
  plugins: PLUGINS_PROD,
  external: EXTERNAL
};
