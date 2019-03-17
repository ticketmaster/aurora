import { css } from "styled-components";

import { getThemeValue, isValidThemeColorVariant } from "../utils";

const themeColor = (color, variant) => css`
  color: ${({ theme }) =>
    isValidThemeColorVariant(theme, color, variant)
      ? getThemeValue(color, variant)(theme)
      : getThemeValue(color)(theme)};
`;

export default themeColor;
