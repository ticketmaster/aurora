import { css } from "styled-components";

import BASE_STYLE_LABEL from "./baseStyleLabel";
import fontSize from "./fontSize";
import textTransform from "./textTransform";

/**
 * LABEL_CAPS_01 is intended for use as the styles for a page's labels
 */
const LABEL_CAPS_01 = css`
  ${BASE_STYLE_LABEL};
  ${fontSize`uno`};
  ${textTransform`uppercase`};
`;

export default LABEL_CAPS_01;
