import { themes } from "../theme";

import { themeTm } from "./getThemeValue";

const isValidThemeColorVariant = ({ themeName } = themeTm, color, variant) =>
  Boolean(
    themes[themeName][color] &&
      themes[themeName][color].constructor === Object &&
      themes[themeName][color][variant]
  );

export default isValidThemeColorVariant;
