import React from "react";

import { StyledButton, StyledButtonLink } from "./index.styles";

const Button = ({ variant, children, ...rest }) => {
  const Btn = rest.href ? StyledButtonLink : StyledButton;
  return (
    <Btn variant={variant} {...rest}>
      {children}
    </Btn>
  );
};

export default Button;
