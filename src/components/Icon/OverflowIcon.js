import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { constants } from "../../theme";
import Icon from "./";

const OverflowIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and ${constants.device.mobile} {
    display: none;
  }
`;

const OverflowIcon = ({ name, size, color, svgStyle }) => (
  <OverflowIconContainer>
    <Icon name={name} size={size} color={color} svgStyle={svgStyle} />
  </OverflowIconContainer>
);

OverflowIcon.defaultProps = {
  svgStyle: {}
};

OverflowIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  svgStyle: PropTypes.objectOf(PropTypes.any)
};

export default OverflowIcon;
