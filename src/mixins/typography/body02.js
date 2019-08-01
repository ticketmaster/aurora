import { css } from "styled-components";

import themeColor from "./themeColor";
import fontSize from "./fontSize";
import lineHeight from "./lineHeight";

/**
 * BODY_02 is intended for use as the styles for a page's small body copy
 */
const BODY_02 = css`
  ${themeColor`gray01`};
  ${fontSize`hecto`};
  ${lineHeight`body`};
`;

export default BODY_02;
