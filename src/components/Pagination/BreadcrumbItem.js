import React from "react";
import PropTypes from "prop-types";

import StyledBreadcrumbItem from "./BreadcrumbItem.styles";
import { Link } from "../Text";

const BreadcrumbItem = ({ position, href, children, ...props }) => (
  <StyledBreadcrumbItem
    itemProp="itemListElement"
    itemScope
    itemType="http://schema.org/ListItem"
  >
    <Link itemProp="item" href={href} {...props}>
      {children}
    </Link>
    {children && <meta itemProp="name" content={children} />}
    {position && <meta itemProp="position" content={position} />}
  </StyledBreadcrumbItem>
);

BreadcrumbItem.propTypes = {
  position: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default BreadcrumbItem;
