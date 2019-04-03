import { themes } from "../theme";
import { THEME_TM } from "../theme/constants";

const isValidThemeColorVariant = (
  { themeName = THEME_TM.themeName } = THEME_TM,
  color,
  variant
) =>
  Boolean(
    themes[themeName][color] &&
      themes[themeName][color].constructor === Object &&
      themes[themeName][color][variant]
  );

export default isValidThemeColorVariant;
