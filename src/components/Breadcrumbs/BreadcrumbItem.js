import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import { Link } from "../Text";
import * as PT from "../Text/PropTypes";
import { getAsProp } from "../../utils/link";

const spanStyles = css`
  cursor: text;

  &:hover {
    color: currentColor;
  }
`;

const StyledLink = styled(Link)`
  ${props => (getAsProp(props).as === "span" ? spanStyles : "")};
`;

const BreadcrumbItem = ({
  position,
  children,
  href,
  size,
  weight,
  variant,
  primary,
  ...props
}) => (
  <li style={{ whiteSpace: "nowrap" }}>
    <StyledLink
      {...props}
      size={size}
      weight={weight}
      variant={variant}
      primary={primary}
      accent={null}
      href={href || null}
    >
      {children}
    </StyledLink>
  </li>
);

BreadcrumbItem.propTypes = {
  position: PropTypes.string.isRequired,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  size: PT.size,
  responsiveSize: PT.responsiveSize,
  weight: PT.weight,
  variant: PT.variant,
  primary: PropTypes.bool
};

BreadcrumbItem.defaultProps = {
  href: "",
  variant: "light",
  size: "uno",
  weight: "semiBold",
  primary: true,
  responsiveSize: {}
};

export default BreadcrumbItem;
