import { css } from "styled-components";

import { getThemeValue, isValidThemeColorVariant } from "../utils";
import { THEME_TM } from "../theme/constants";
import { ONYX, BASE } from "../components/constants";

const themeColors = css`
  color: ${({ color = ONYX, variant = BASE, theme = THEME_TM }) =>
    isValidThemeColorVariant(theme, color, variant)
      ? getThemeValue(color, variant)(theme)
      : getThemeValue(color)(theme) || getThemeValue(ONYX, BASE)(theme)};
`;

export default themeColors;
