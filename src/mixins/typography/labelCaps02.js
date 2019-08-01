import { css } from "styled-components";

import BASE_STYLE_LABEL from "./baseStyleLabel";
import fontSize from "./fontSize";
import textTransform from "./textTransform";

/**
 * LABEL_CAPS_02 is intended for use as the styles for a page's badge label headers
 */
const LABEL_CAPS_02 = css`
  ${BASE_STYLE_LABEL};
  ${fontSize`mini`};
  ${textTransform`uppercase`};
`;

export default LABEL_CAPS_02;
