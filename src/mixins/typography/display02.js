import { css } from "styled-components";

import BASE_STYLE_DISPLAY from "./baseStyleDisplay";
import fontWeight from "./fontWeight";

/**
 * DISPLAY_02 is intended for use as the styles for a page's title
 */
const DISPLAY_02 = css`
  ${BASE_STYLE_DISPLAY};
  ${fontWeight`light`};
`;

export default DISPLAY_02;
