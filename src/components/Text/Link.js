import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Base from "./Base.styles";
import * as PT from "./PropTypes";
import colors from "../../theme/colors";
import { getRelByTarget, getAsProp } from "../../utils/link";
import { getFontColor } from "../../utils/typography";

const LinkBase = styled(Base)`
  text-decoration: none;
  transition: color 0.3s ease;
  &:focus,
  &:active,
  &:visited,
  &:hover {
    color: ${props => getFontColor(props)};
  }

  &:hover {
    color: ${colors.azure.hover};
  }
`;

const LinkButtonBase = styled(LinkBase)`
  appearance: none;
  border: 0;
  outline: 0;
  background: transparent;
  padding: 0;
  cursor: pointer;
`;

const LinkSpanBase = styled(LinkBase)`
  cursor: pointer;
`;

const getElement = ({ href, onClick }) => {
  if (href && href.length) return LinkBase;

  if (!href && onClick && typeof onClick === "function") return LinkButtonBase;

  return LinkSpanBase;
};

const Link = ({
  href,
  onClick,
  children,
  weight,
  size,
  responsiveSize,
  variant,
  accent,
  primary,
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
      primary={primary}
      variant={variant}
      accent={accent}
      href={href}
      rel={validatedRel}
      weight={weight}
      onClick={onClick}
    >
      {children}
    </Elm>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  onClick: PropTypes.func,
  target: PropTypes.string,
  rel: PropTypes.string,
  primary: PropTypes.bool,
  size: PT.size,
  responsiveSize: PT.responsiveSize,
  weight: PT.weight,
  variant: PT.variant,
  accent: PT.accent
};

Link.defaultProps = {
  target: "",
  onClick: null,
  href: null,
  rel: "_self",
  size: "hecto",
  responsiveSize: {},
  weight: "regular",
  variant: "accent",
  accent: "azure",
  primary: true
};

export default Link;
