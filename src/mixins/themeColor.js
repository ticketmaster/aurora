import { css } from "styled-components";

import getThemeValue from "../utils/getThemeValue";
import { ONYX, BASE } from "../components/constants";

const themeColor = css`
  color: ${({ color = ONYX, variant = BASE, theme }) =>
    (variant
      ? getThemeValue(color, variant)(theme)
      : getThemeValue(color)(theme)) || getThemeValue(ONYX, BASE)(theme)};
`;

export default themeColor;
