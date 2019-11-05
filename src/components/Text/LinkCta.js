import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import * as PT from "./PropTypes";
import { typography } from "../../theme";
import { getThemeValue } from "../../utils";
import { getRelByTarget, getAsProp } from "../../utils/link";
import {
  getResponsiveSize,
  responsiveSizeMixin
} from "../../utils/responsiveSize";

const LinkCtaBase = styled.a`
  text-decoration: none;
  transition: color 0.3s ease, text-decoration 0.3s ease;
  font-weight: ${typography.weight.semiBold};
  ${({ size }) => responsiveSizeMixin(size)};
  line-height: ${typography.lineHeight.header};
  color: ${getThemeValue("primary", "base")};
  display: inline-block;

  &:focus {
    outline: none;
    text-decoration: underline;
  }

  &:visited {
    color: ${getThemeValue("primary", "base")};
  }

  &:active {
    color: ${getThemeValue("primary", "dark")};
  }

  &:hover {
    color: ${getThemeValue("primary", "medium")};
  }

  &.noFocus:focus {
    text-decoration: none;
  }
`;

const ReverseLinkCtaBase = styled(LinkCtaBase)`
  color: ${getThemeValue("primary", "reverse")};

  &:focus,
  &:visited,
  &:active,
  &:hover {
    color: ${getThemeValue("primary", "reverseLight")};
  }
`;

const LinkCtaButtonBase = styled(LinkCtaBase)`
  appearance: none;
  border: 0;
  outline: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;
`;

const LinkCtaSpanBase = styled(LinkCtaBase)`
  cursor: pointer;
`;

const getElement = ({ href, onClick, reverseColors }) => {
  if (href && href.length) {
    return reverseColors ? ReverseLinkCtaBase : LinkCtaBase;
  }

  if (!href && onClick && typeof onClick === "function")
    return LinkCtaButtonBase;

  return LinkCtaSpanBase;
};

class LinkCta extends Component {
  componentDidMount() {
    if (this.link && this.link.current) {
      this.link.current.addEventListener("focus", this.focusHandler);
      this.link.current.addEventListener("blur", this.blurHandler);
    }
  }

  componentWillUnmount() {
    // in case user leaves a page before onBlur is triggered
    global.window.removeEventListener("keyup", this.activateFocusStyles);
  }

  focusHandler = () => {
    global.window.addEventListener("keyup", this.activateFocusStyles);
  };

  blurHandler = () => {
    if (this.link && this.link.current) {
      this.link.current.classList.add("noFocus");
    }

    global.window.removeEventListener("keyup", this.activateFocusStyles);
  };

  activateFocusStyles = () => {
    this.link.current.classList.remove("noFocus");
  };

  link = React.createRef();

  render() {
    const {
      href,
      onClick,
      children,
      size,
      responsiveSize,
      reverseColors,
      ...rest
    } = this.props;

    const { target, rel } = rest;
    const Elm = getElement({ href, onClick, reverseColors });
    const asProp = getAsProp({ href, onClick });
    const validatedRel = getRelByTarget(target, rel);

    return (
      <Elm
        {...rest}
        {...asProp}
        size={getResponsiveSize({ size, responsiveSize })}
        href={href}
        onClick={onClick}
        rel={validatedRel}
        ref={this.link}
        className={`${rest.className || ""} noFocus`}
      >
        {children}
      </Elm>
    );
  }
}

LinkCta.propTypes = {
  size: PropTypes.string,
  responsiveSize: PT.responsiveSize,
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.string,
  rel: PropTypes.string,
  reverseColors: PropTypes.bool
};

LinkCta.defaultProps = {
  size: null,
  onClick: undefined,
  responsiveSize: PT.defaultResponsiveSize,
  href: undefined,
  target: "_self",
  rel: "",
  reverseColors: false
};

LinkCta.displayName = "LinkCta";

export default LinkCta;
