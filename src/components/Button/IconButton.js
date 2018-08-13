import React from "react";
import PropTypes from "prop-types";

import { StyledButtonOld } from "./Base.old.styles";

const StyledIconButton = StyledButtonOld.extend`
  min-width: ${props => props.size}px;
  max-width: ${props => props.size}px;
  height: ${props => props.size}px;
  width: ${props => props.size}px;

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
