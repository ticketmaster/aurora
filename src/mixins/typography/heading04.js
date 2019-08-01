import { css } from "styled-components";

import themeColor from "./themeColor";
import fontSize from "./fontSize";
import fontWeight from "./fontWeight";
import lineHeight from "./lineHeight";

/**
 * HEADING_04 is intended for use as the styles for a page's small titles
 */
const HEADING_04 = css`
  ${themeColor`gray01`};
  ${fontSize`kilo`};
  ${fontWeight`semiBold`};
  ${lineHeight`header`};
`;

export default HEADING_04;
