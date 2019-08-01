import { css } from "styled-components";

import themeColor from "./themeColor";
import fontSize from "./fontSize";
import lineHeight from "./lineHeight";

/**
 * BODY_01 is intended for use as the styles for a page's body copy
 */
const BODY_01 = css`
  ${themeColor`gray01`};
  ${fontSize`kilo`};
  ${lineHeight`body`};
`;

export default BODY_01;
