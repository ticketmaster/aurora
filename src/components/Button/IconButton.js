import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { typography } from "../../theme";
import { GenericButton } from "./Badge.styles";

const StyledIconButton = styled(GenericButton)`
  font-size: ${typography.size.hecto};
  min-width: ${props => props.size}px;
  max-width: ${props => props.size}px;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  border: none;

  &:focus {
    outline: none;
  }
  > * {
    pointer-events: none;
  }
`;

const IconButton = ({ children, size, ...props }) => (
  <StyledIconButton size={size} variant="transparent" {...props}>
    {children}
  </StyledIconButton>
);

IconButton.defaultProps = {
  size: 45
};

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.number
};

export default IconButton;
