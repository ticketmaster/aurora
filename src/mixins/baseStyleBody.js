import { css } from "styled-components";

import { lineHeight, fontWeight, fontWeights } from "./";
import BASE_STYLE_TYPOGRAPHY from "./baseStyleTypography";

const BASE_STYLE_BODY = css`
  ${BASE_STYLE_TYPOGRAPHY};
  ${lineHeight`body`}
  ${fontWeight`regular`} ${fontWeights}
`;

export default BASE_STYLE_BODY;
