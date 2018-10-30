import React from "react";
import PropTypes from "prop-types";
import { Link } from "../Text";
import * as PT from "../Text/PropTypes";

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
  <li
    itemProp="itemListElement"
    itemScope
    itemType="http://schema.org/ListItem"
    style={{ whiteSpace: "nowrap" }}
  >
    <Link
      {...props}
      itemProp="item"
      size={size}
      weight={weight}
      variant={variant}
      primary={primary}
      accent={null}
      href={href || null}
    >
      {children}
    </Link>
    {children && <meta itemProp="name" content={children} />}
    {position && <meta itemProp="position" content={position} />}
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
