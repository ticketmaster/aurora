import styled from "styled-components";

import { typography } from "../../theme";

const StyledText = styled.div`
  font-size: ${props => props.fontSize || typography.size.hecto};
`;

export default StyledText;
