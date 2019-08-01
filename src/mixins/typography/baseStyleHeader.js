import { css } from "styled-components";

import DISPLAY_INLINE from "./displayInline";
import lineHeight from "./lineHeight";
import fontWeights from "./fontWeights";
import BASE_STYLE_TYPOGRAPHY from "./baseStyleTypography";

const BASE_STYLE_HEADER = css`
  ${BASE_STYLE_TYPOGRAPHY};
  ${DISPLAY_INLINE};
  ${lineHeight`header`};
  ${fontWeights};
`;

export default BASE_STYLE_HEADER;
