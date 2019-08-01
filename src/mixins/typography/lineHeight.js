import { css } from "styled-components";

import { typography } from "../../theme";

const LINE_HEIGHT_FALLBACK = "body";

const lineHeight = lH => css`
  line-height: ${typography.lineHeight[lH] ||
    typography.lineHeight[LINE_HEIGHT_FALLBACK]};
`;

export default lineHeight;
