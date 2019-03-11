/* global window: true */
import React, { Component } from "react";
import PropTypes from "prop-types";

import { StyledButton, StyledButtonLink } from "./Base.styles";
import { SIZES, REGULAR, BUTTON_VARIANTS, STANDARD } from "../constants";
import { getRelByTarget } from "../../utils/link";

class Button extends Component {
  componentDidMount() {
    if (!this.props.href && this.button && this.button.current) {
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

  button = React.createRef();

  render() {
    const { variant, size, children, ...rest } = this.props;
    const { href } = rest;

    if (href) {
      const { rel, target } = rest;
      const validatedRel = getRelByTarget(target, rel);

      return (
        <StyledButtonLink
          variant={variant}
          size={size}
          rel={validatedRel}
          as="a"
          {...rest}
        >
          {children}
        </StyledButtonLink>
      );
    }

    return (
      <StyledButton
        variant={variant}
        size={size}
        {...rest}
        className={`${rest.className || ""} noFocus`}
        ref={this.button}
      >
        {children}
      </StyledButton>
    );
  }
}

Button.propTypes = {
  variant: PropTypes.oneOf(BUTTON_VARIANTS),
  size: PropTypes.oneOf(SIZES),
  children: PropTypes.node.isRequired
};

Button.defaultProps = {
  size: REGULAR,
  variant: STANDARD
};

export default Button;
