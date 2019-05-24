import { PLUGINS_DEV, EXTERNAL } from "./constants";

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
  plugins: PLUGINS_DEV,
  external: EXTERNAL
};
