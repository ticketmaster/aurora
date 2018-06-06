import styled from "styled-components";

import { typography } from "../../theme";

const StyledText = styled.div`
  font-size: ${props => props.fontSize || typography.size.hecto};
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  hyphens: auto;
`;

export default StyledText;
