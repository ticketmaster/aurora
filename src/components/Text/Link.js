import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import * as PT from "./PropTypes";
import { typography } from "../../theme";
import { getThemeValue } from "../../utils";

const SIZES = {
  small: {
    fontSize: typography.size.hecto
  },
  large: {
    fontSize: typography.size.kilo
  }
};

const LinkBase = styled.a`
  text-decoration: none;
  transition: color 0.3s ease;
  transition: text-decoration 0.3s ease;
  transition: transform 0.1s linear;
  font-weight: ${typography.weight.semiBold};
  font-size: ${({ size }) => SIZES[size].fontSize};
  line-height: ${typography.lineHeight.header};
  color: ${getThemeValue("primary", "base")};
  display: inline-block;

  &:focus {
    outline: none;
    text-decoration-line: underline;
    text-decoration-style: double;
  }

  &:visited {
    color: ${getThemeValue("primary", "dark")};
  }

  &:active {
    transform: scale(0.98, 0.98) translate(0, 1px);
    color: ${getThemeValue("primary", "dark")};
  }

  &:hover {
    color: ${getThemeValue("primary", "medium")};
  }
`;

const LinkButtonBase = LinkBase.withComponent(`button`).extend`
  appearance: none;
  border: 0;
  outline: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;
`;

const LinkSpanBase = LinkBase.withComponent(`span`).extend`
  cursor: pointer;
`;

const getElement = ({ href, onClick }) => {
  if (href && href.length) return LinkBase;

  if (!href && onClick && typeof onClick === "function") return LinkButtonBase;

  return LinkSpanBase;
};

const Link = ({ href, onClick, children, size, ...props }) => {
  const Elm = getElement({ href, onClick });
  return (
    <Elm {...props} size={size} href={href} onClick={onClick}>
      {children}
    </Elm>
  );
};

Link.propTypes = {
  size: PropTypes.oneOf(Object.values(PT.LINK_SIZES)),
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func
};

Link.defaultProps = {
  size: PT.LINK_SIZES.small,
  onClick: null,
  href: null
};

Link.displayName = "Link";

export default Link;
