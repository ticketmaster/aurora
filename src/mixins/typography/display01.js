import { css } from "styled-components";

import BASE_STYLE_DISPLAY from "./baseStyleDisplay";
import fontWeight from "./fontWeight";

/**
 * DISPLAY_01 is intended for use as the styles for a page's title
 */
const DISPLAY_01 = css`
  ${BASE_STYLE_DISPLAY};
  ${fontWeight`semiBold`};
`;

export default DISPLAY_01;
