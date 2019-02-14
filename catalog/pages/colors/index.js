import { pageLoader } from "catalog";

import { themes } from "../../../src/theme";

const { global, tm, lne } = themes;

const getImports = (name, theme) =>
  Object.keys(theme)
    .map(colorName => ({
      [`${name}${colorName}`]:
        typeof theme[colorName] === "object"
          ? Object.keys(theme[colorName]).map(colorVariantName => ({
              name: colorVariantName,
              value: theme[colorName][colorVariantName]
            }))
          : [
              {
                name: colorName,
                value: theme[colorName]
              }
            ]
    }))
    .reduce((acc, cur) => ({ ...acc, ...cur }), {});

const imports = {
  ...getImports("global", global),
  ...getImports("tm", tm),
  ...getImports("lne", lne)
};

console.log({ imports });

export default {
  path: "/colors",
  title: "Colors",
  imports,
  content: pageLoader(() => import("./index.md"))
};
