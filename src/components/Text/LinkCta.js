import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import * as PT from "./PropTypes";
import { typography } from "../../theme";
import { getThemeValue } from "../../utils";
import getRelByTarget from "../../utils/link";

const SIZES = {
  small: {
    fontSize: typography.size.hecto
  },
  large: {
    fontSize: typography.size.kilo
  }
};

const LinkCtaBase = styled.a`
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

const LinkCtaButtonBase = LinkCtaBase.withComponent(`button`).extend`
  appearance: none;
  border: 0;
  outline: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;
`;

const LinkCtaSpanBase = LinkCtaBase.withComponent(`span`).extend`
  cursor: pointer;
`;

const getElement = ({ href, onClick }) => {
  if (href && href.length) return LinkCtaBase;

  if (!href && onClick && typeof onClick === "function")
    return LinkCtaButtonBase;

  return LinkCtaSpanBase;
};

const LinkCta = ({ href, onClick, children, size, ...props }) => {
  const { target, rel } = props;
  const Elm = getElement({ href, onClick });
  const validatedRel = getRelByTarget(target, rel);

  return (
    <Elm
      {...props}
      size={size}
      href={href}
      onClick={onClick}
      rel={validatedRel}
    >
      {children}
    </Elm>
  );
};

LinkCta.propTypes = {
  size: PropTypes.oneOf(Object.values(PT.LINK_SIZES)),
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func
};

LinkCta.defaultProps = {
  size: PT.LINK_SIZES.small,
  onClick: null,
  href: null
};

LinkCta.displayName = "LinkCta";

export default LinkCta;
