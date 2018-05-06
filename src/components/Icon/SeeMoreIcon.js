import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { spacing, constants } from "../../theme";
import Icon from "./";

const SeeMoreIconContainer = styled.div`
  padding: 0 ${spacing.large};
  display: none;
  align-items: center;
  justify-content: center;

  @media only screen and ${constants.device.mobile} {
    display: flex;
  }
`;

const SeeMoreIcon = ({ name, size, color, svgStyle }) => (
  <SeeMoreIconContainer>
    <Icon name={name} size={size} color={color} svgStyle={svgStyle} />
  </SeeMoreIconContainer>
);

SeeMoreIcon.defaultProps = {
  svgStyle: {}
};

SeeMoreIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  svgStyle: PropTypes.objectOf(PropTypes.any)
};

export default SeeMoreIcon;
