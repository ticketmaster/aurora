import { css } from "styled-components";

import { typography } from "../../theme";

const fontSizes = css`
  ${({ size }) =>
    typography.size[size] && `font-size: ${typography.size[size]}`};
`;

export default fontSizes;
