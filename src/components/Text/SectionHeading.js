import styled from "styled-components";
import typography from "../../theme/typography";
import { smallAndUp } from "../../theme/mediaQueries";

export default styled.span`
  font-size: ${typography.size.kilo};
  font-weight: ${typography.weight.semiBold};
  ${smallAndUp`
    font-size: ${typography.size.giga};
  `};
`;
