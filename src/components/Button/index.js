import React from "react";

import { StyledButton, StyledButtonLink } from "./index.styles";

const Button = ({ variant = "standard", href, children, ...rest }) => {
  const Btn = href ? StyledButtonLink : StyledButton;
  return (
    <Btn variant={variant} {...rest}>
      {children}
    </Btn>
  );
};

export default Button;
