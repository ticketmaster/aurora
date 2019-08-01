import { css } from "styled-components";

import themeColor from "./themeColor";
import fontSize from "./fontSize";
import fontWeight from "./fontWeight";
import lineHeight from "./lineHeight";

/**
 * HEADING_02 is intended for use as the styles for a page's sub-section headers
 */
const HEADING_02 = css`
  ${themeColor`gray01`};
  ${fontSize`giga`};
  ${fontWeight`semiBold`};
  ${lineHeight`header`};
`;

export default HEADING_02;
