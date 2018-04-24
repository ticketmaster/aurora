import React from "react";
import PropTypes from "prop-types";

import { StyledButton, StyledButtonLink } from "./index.styles";

const Button = ({ variant, children, ...rest }) => {
  const Btn = rest.href ? StyledButtonLink : StyledButton;
  return (
    <Btn variant={variant} {...rest}>
      {children}
    </Btn>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["standard", "outline"]).isRequired,
  children: PropTypes.element.isRequired
};

export default Button;
