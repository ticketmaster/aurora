import styled from "styled-components";
import typography from "../../theme/typography";
import { mediumAndUp } from "../../theme/mediaQueries";

export default styled.span`
  font-size: ${typography.size.kilo};
  font-weight: ${typography.weight.semiBold};
  ${mediumAndUp`
    font-size: ${typography.size.giga};
  `};
`;
