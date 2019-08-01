import { css } from "styled-components";

import themeColor from "./themeColor";
import fontSize from "./fontSize";
import fontWeight from "./fontWeight";
import lineHeight from "./lineHeight";

/**
 * HEADING_05 is intended for use as the styles for a page's very small titles
 */
const HEADING_05 = css`
  ${themeColor`gray01`};
  ${fontSize`hecto`};
  ${fontWeight`semiBold`};
  ${lineHeight`header`};
`;

export default HEADING_05;
