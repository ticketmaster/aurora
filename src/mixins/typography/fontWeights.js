import { css } from "styled-components";

import { typography } from "../../theme";

const fontWeights = css`
  ${({ weight }) =>
    typography.weight[weight] && `font-weight: ${typography.weight[weight]}`};
`;

export default fontWeights;
