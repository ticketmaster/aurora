import { css } from "styled-components";

import themeColor from "./themeColor";
import fontSize from "./fontSize";
import fontWeight from "./fontWeight";
import lineHeight from "./lineHeight";

/**
 * HEADING_03 is intended for use as the styles for a page's pull quotes, summaries, and lead-ins
 */
const HEADING_03 = css`
  ${themeColor`gray01`};
  ${fontSize`giga`};
  ${fontWeight`regular`};
  ${lineHeight`header`};
`;

export default HEADING_03;
