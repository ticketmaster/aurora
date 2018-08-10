import { colors, typography } from "../../theme";
import constants from "../../theme/constants";
import StyledText from "./StyledText";

const PrimaryText = StyledText.extend`
  color: ${colors.onyx.base};

  @media only screen and ${constants.breakpoints.smallAndUp} {
    font-size: ${typography.size.kilo};
  }
`;

export default PrimaryText;
