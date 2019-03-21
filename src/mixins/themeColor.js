import { css } from "styled-components";

import { THEME_TM } from "../theme/constants";
import { getThemeValue, isValidThemeColorVariant } from "../utils";

const themeColor = (color, variant) => css`
  color: ${({ theme = THEME_TM }) =>
    isValidThemeColorVariant(theme, color, variant)
      ? getThemeValue(color, variant)(theme)
      : getThemeValue(color)(theme)};
`;

export default themeColor;
