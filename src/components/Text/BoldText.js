import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { mediumAndUp } from "../../theme/mediaQueries";
import { typography, themes } from "../../theme";
import StyledText from "./StyledText";

const BoldStyledText = styled(StyledText)`
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
  color: themes.global.darkFill
};

BoldText.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string
};

export default BoldText;
