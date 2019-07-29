import { THEME_TM } from "../theme/constants";
import { getThemeObject } from "./";

const isValidThemeColorVariant = (
  { themeName = THEME_TM.themeName, customValues = null } = THEME_TM,
  color,
  variant
) => {
  const themeObject = getThemeObject(themeName, customValues);

  return Boolean(
    themeObject[color] &&
      themeObject[color].constructor === Object &&
      themeObject[color][variant]
  );
};

export default isValidThemeColorVariant;
