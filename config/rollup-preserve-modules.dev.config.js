import { PLUGINS_DEV, EXTERNAL } from "./constants";

export default {
  input: "src/index.js",
  output: [
    {
      dir: "dist/cjs",
      format: "cjs",
      sourceMap: true
    },
    {
      dir: "dist/es",
      format: "es",
      sourceMap: true
    }
  ],
  plugins: PLUGINS_DEV,
  external: EXTERNAL
};
