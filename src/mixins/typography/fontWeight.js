import { css } from "styled-components";

import { typography } from "../../theme";

const fontWeight = weight => css`
  ${typography.weight[weight] && `font-weight: ${typography.weight[weight]}`};
`;

export default fontWeight;
