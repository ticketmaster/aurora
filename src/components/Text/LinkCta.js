import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import * as PT from "./PropTypes";
import { typography } from "../../theme";
import { getThemeValue } from "../../utils";
import { getRelByTarget, getAsProp } from "../../utils/link";
import { mediumAndUp, largeAndUp } from "../../theme/mediaQueries";

const LinkCtaBase = styled.a`
  text-decoration: none;
  transition: color 0.3s ease;
  transition: text-decoration 0.3s ease;
  transition: transform 0.1s linear;
  font-weight: ${typography.weight.semiBold};
  font-size: ${({ size }) =>
    (size.small && typography.size[size.small]) || size.small || "inherit"};
  line-height: ${typography.lineHeight.header};
  color: ${getThemeValue("primary", "base")};
  display: inline-block;

  &:focus {
    outline: none;
    text-decoration: underline;
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

  ${mediumAndUp`
    font-size: ${({ size }) =>
      (size.medium && typography.size[size.medium]) ||
      size.medium ||
      "inherit"};
  `};

  ${largeAndUp`
    font-size: ${({ size }) =>
      (size.large && typography.size[size.large]) || size.large || "inherit"};
  `};
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

const getElement = ({ href, onClick }) => {
  if (href && href.length) return LinkCtaBase;

  if (!href && onClick && typeof onClick === "function")
    return LinkCtaButtonBase;

  return LinkCtaSpanBase;
};

const LinkCta = ({
  href,
  onClick,
  children,
  size,
  responsiveSize,
  ...props
}) => {
  const { target, rel } = props;
  const Elm = getElement({ href, onClick });
  const asProp = getAsProp({ href, onClick });
  const validatedRel = getRelByTarget(target, rel);

  return (
    <Elm
      {...props}
      {...asProp}
      size={{
        small: responsiveSize.small || size,
        medium: responsiveSize.medium || responsiveSize.small || size,
        large:
          responsiveSize.large ||
          responsiveSize.medium ||
          responsiveSize.small ||
          size
      }}
      href={href}
      onClick={onClick}
      rel={validatedRel}
    >
      {children}
    </Elm>
  );
};

LinkCta.propTypes = {
  size: PropTypes.string,
  responsiveSize: PT.responsiveSize,
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.string,
  rel: PropTypes.string
};

LinkCta.defaultProps = {
  size: null,
  onClick: null,
  responsiveSize: {
    small: null,
    medium: null,
    large: null
  },
  href: null,
  target: "_self",
  rel: ""
};

LinkCta.displayName = "LinkCta";

export default LinkCta;
