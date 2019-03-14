import { css } from "styled-components";

import { themeColor, lineHeight, fontWeight, fontWeights } from "./";

const BASE_STYLE_BODY = css`
  margin: 2px 0;
  ${themeColor}
  ${lineHeight`body`}
  ${fontWeight`regular`} ${fontWeights}
`;

export default BASE_STYLE_BODY;
