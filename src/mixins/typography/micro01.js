import { css } from "styled-components";

import themeColor from "./themeColor";
import fontSize from "./fontSize";
import fontWeight from "./fontWeight";
import lineHeight from "./lineHeight";

/**
 * MICRO_01 is intended for use as the styles for a page's minor, legal, or attribution body copy
 */
const MICRO_01 = css`
  ${themeColor`gray01`};
  ${fontSize`uno`};
  ${fontWeight`semiBold`};
  ${lineHeight`header`};
`;

export default MICRO_01;
