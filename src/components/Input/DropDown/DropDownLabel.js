import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { typography } from "../../../theme";
import { TWO_SIZE_VARIANT } from "../../../utils/sizes";

const fontForSizeMap = {
  [TWO_SIZE_VARIANT[0]]: typography.size.uno,
  [TWO_SIZE_VARIANT[1]]: typography.size.hecto
};

const StyledLabel = styled.label`
  display: block;
  font-size: ${({ size }) => fontForSizeMap[size]};
  opacity: ${({ disabled }) => (disabled ? "0.4" : "1")};
`;

const DropDownLabel = ({ children, size, disabled, ...otherProps }) => (
  <StyledLabel size={size} disabled={disabled} {...otherProps}>
    {children}
  </StyledLabel>
);

DropDownLabel.propTypes = {
  size: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

DropDownLabel.defaultProps = {
  size: TWO_SIZE_VARIANT[1],
  disabled: false
};

export default DropDownLabel;
