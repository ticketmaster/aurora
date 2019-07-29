import { themes } from "../theme";
import { memoize } from "./";

const getThemeObject = (themeName, customValues) => {
  const baseTheme = themes[themeName] || themes.global;

  if (customValues && customValues.constructor === Object) {
    return { ...baseTheme, ...customValues };
  }

  return baseTheme;
};

const memoized = memoize(getThemeObject);

export default memoized;
