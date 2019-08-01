import { css } from "styled-components";

import BASE_STYLE_LABEL from "./baseStyleLabel";
import fontSize from "./fontSize";

/**
 * LABEL_01 is primarily intended for use as the styles for a data table's column headers
 */
const LABEL_01 = css`
  ${BASE_STYLE_LABEL};
  ${fontSize`uno`};
`;

export default LABEL_01;
