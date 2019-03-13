import { css } from "styled-components";

import { themeColor, DISPLAY_INLINE, lineHeight, fontWeights } from "./";

const BASE_STYLE_HEADER = css`
  margin: 2px 0;
  ${themeColor} ${DISPLAY_INLINE};
  ${lineHeight`header`};
  ${fontWeights};
`;

export default BASE_STYLE_HEADER;
