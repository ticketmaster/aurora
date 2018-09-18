import React from "react";
import PropTypes from "prop-types";

import typography from "../../theme/typography";
import { mediumAndUp } from "../../theme/mediaQueries";
import StyledText from "./StyledText";
import colors from "../../theme/colors";

const BoldStyledText = StyledText.extend`
  color: ${props => props.color};
  font-weight: ${typography.weight.semiBold};

  ${mediumAndUp`
    font-size: ${typography.size.uno};
  `};
`;

const BoldText = ({ color, children, ...rest }) => (
  <BoldStyledText color={color} {...rest}>
    {children}
  </BoldStyledText>
);

BoldText.defaultProps = {
  color: colors.blackPearl
};

BoldText.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string
};

export default BoldText;
