import PropTypes from "prop-types";
import { colors, typography } from "../../theme";
import constants from "../../theme/constants";
import StyledText from "./StyledText";

const BoldText = StyledText.extend`
  color: ${props => props.color || colors.onyx.base};
  font-weight: ${typography.weight.semiBold};

  @media only screen and ${constants.breakpoints.smallAndUp} {
    font-size: ${typography.size.kilo};
  }
`;

BoldText.defaultProps = {
  color: ""
};

BoldText.propTypes = {
  color: PropTypes.string
};

export default BoldText;
