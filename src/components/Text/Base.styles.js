import styled from "styled-components";

import { typography } from "../../theme";
import { getFontColor } from "../../utils/typography";

const Base = styled.div`
  font-size: ${({ size }) => typography.size[size] || typography.size.hecto};
  font-weight: ${({ weight }) =>
    typography.weight[weight] || typography.size.regular};
  line-height: ${typography.lineHeight.body};
  color: ${({ variant, accent, primary, secondary, disabled }) =>
    getFontColor({ variant, accent, primary, secondary, disabled })};
`;

export default Base;
