import { css } from "styled-components";

import { typography } from "../theme";

const FONT_SIZE_FALLBACK = "kilo";

const fontSize = size => css`
  font-size: ${typography.size[size] || typography.size[FONT_SIZE_FALLBACK]};
`;

export default fontSize;
