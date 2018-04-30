import React from "react";
import PropTypes from "prop-types";

import { colors, typography } from "../../theme";
import constants from "../../theme/constants";
import StyledText from "./StyledText";

const BoldStyledText = StyledText.extend`
  color: ${props => props.color || colors.onyx.base};
  font-weight: ${typography.weight.semiBold};

  @media only screen and ${constants.breakpoints.smallAndUp} {
    font-size: ${typography.size.kilo};
  }
`;

const BoldText = ({ color, children, ...rest }) => (
  <BoldStyledText color={color} {...rest}>
    {children}
  </BoldStyledText>
);

BoldText.defaultProps = {
  color: null
};

BoldText.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string
};

export default BoldText;
