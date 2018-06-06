import { StyledButton } from "./Base.styles";
import { typography } from "../../theme";

const StyledBadge = StyledButton.extend`
  font-size: ${typography.size.uno};
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  max-width: 45px;
  min-width: 45px;
  height: 20px;
`;

export default StyledBadge;
