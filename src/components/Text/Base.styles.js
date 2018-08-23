import styled from "styled-components";

import { typography } from "../../theme";
import { getFontColor } from "../../utils/typography";
import { mediumAndUp, largeAndUp } from "../../theme/mediaQueries";

const Base = styled.div`
  font-size: ${({ size }) => typography.size[size.small]};
  font-weight: ${({ weight }) => typography.weight[weight]};
  line-height: ${typography.lineHeight.body};
  text-transform: ${({ allCaps }) => (allCaps ? "uppercase" : "none")};
  ${({ monospace }) => (monospace ? `font-family: monospace, monospace` : "")};
  color: ${({ variant, accent, primary, secondary, disabled }) =>
    getFontColor({ variant, accent, primary, secondary, disabled })};

  ${mediumAndUp`
    font-size: ${({ size }) => typography.size[size.medium]};
  `};

  ${largeAndUp`
    font-size: ${({ size }) => typography.size[size.large]};
  `};
`;

export default Base;
