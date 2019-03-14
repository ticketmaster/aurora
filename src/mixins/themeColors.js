import { css } from "styled-components";

import { getThemeValue, isValidThemeColorVariant } from "../utils";
import { ONYX, BASE } from "../components/constants";

const themeColors = css`
  color: ${({ color = ONYX, variant = BASE, theme }) =>
    isValidThemeColorVariant(theme, color, variant)
      ? getThemeValue(color, variant)(theme)
      : getThemeValue(color)(theme) || getThemeValue(ONYX, BASE)(theme)};
`;

export default themeColors;
