/* global window: true */
import React, { Component, ValidationMap, PropsWithChildren } from "react";
import PropTypes from "prop-types";

import { StyledButton, StyledButtonLink } from "./Base.styles";
import {
  SIZES,
  REGULAR,
  BUTTON_VARIANTS,
  STANDARD,
  ButtonVariant,
  Size
} from "../constants";
import { getRelByTarget } from "../../utils/link";

export interface ButtonProps {
  readonly className?: string;
  readonly variant: ButtonVariant;
  readonly size: Size;
  readonly icon: any;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export interface ButtonLinkProps extends ButtonProps {
  readonly href: string;
  readonly rel: string;
  readonly target: string;
}

function isButtonLinkProps(props: ButtonProps): props is ButtonLinkProps {
  return !!(props as ButtonLinkProps).href;
}

class Button extends Component<ButtonProps> {
  static displayName = "Button";

  static propTypes: ValidationMap<PropsWithChildren<ButtonProps>> = {
    variant: PropTypes.oneOf(BUTTON_VARIANTS),
    size: PropTypes.oneOf(SIZES),
    icon: PropTypes.node,
    children: PropTypes.node.isRequired
  };

  static defaultProps: ButtonProps = {
    size: REGULAR,
    variant: STANDARD,
    icon: null
  };

  componentDidMount() {
    if (!isButtonLinkProps(this.props) && this.button && this.button.current) {
      // this functionality is required to avoid focus outline on click but keep it on tab focus
      this.button.current.addEventListener("focus", this.focusHandler);
      this.button.current.addEventListener("blur", this.blurHandler);
    }
  }

  componentWillUnmount() {
    // in case user leaves a page before onBlur is triggered
    window.removeEventListener("keyup", this.activateFocusStyles);
  }

  focusHandler = () => {
    window.addEventListener("keyup", this.activateFocusStyles);
  };

  blurHandler = () => {
    if (this.button && this.button.current && this.button.current.classList) {
      this.button.current.classList.add("noFocus");
    }
    window.removeEventListener("keyup", this.activateFocusStyles);
  };

  activateFocusStyles = () => {
    if (this.button && this.button.current && this.button.current.classList) {
      this.button.current.classList.remove("noFocus");
    }
  };

  button = React.createRef<HTMLButtonElement>();

  render() {
    const { variant, size, icon, children, ...rest } = this.props;

    if (isButtonLinkProps(this.props)) {
      const { rel, target } = this.props;
      const validatedRel = getRelByTarget(target, rel);

      return (
        <StyledButtonLink
          variant={variant}
          size={size}
          rel={validatedRel}
          as="a"
          className={`${icon ? "iconed" : ""}`}
          {...rest}
        >
          {icon}
          {children}
        </StyledButtonLink>
      );
    }

    return (
      <StyledButton
        variant={variant}
        size={size}
        {...rest}
        className={`${rest.className || ""} ${icon ? "iconed" : ""} noFocus`}
        ref={this.button}
      >
        {icon}
        {children}
      </StyledButton>
    );
  }
}

export default Button;
