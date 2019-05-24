import { PLUGINS_PROD, EXTERNAL } from "./constants";

export default {
  input: "src/index.js",
  output: [
    {
      dir: "dist/cjs",
      format: "cjs"
    },
    {
      dir: "dist/es",
      format: "es"
    }
  ],
  plugins: PLUGINS_PROD,
  external: EXTERNAL
};
