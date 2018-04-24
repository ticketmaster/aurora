import { pageLoader } from "catalog";

import colors from "../../../src/theme/colors";

const imports = Object.keys(colors)
  .filter(colorName => typeof colors[colorName] === "object")
  .map(colorName => ({
    [colorName]: Object.keys(colors[colorName]).map(colorVariantName => ({
      name: colorVariantName,
      value: colors[colorName][colorVariantName]
    }))
  }))
  .reduce((acc, cur) => ({ ...acc, ...cur }), {});

export default {
  path: "/colors",
  title: "Colors",
  imports,
  content: pageLoader(() => import("./index.md"))
};
