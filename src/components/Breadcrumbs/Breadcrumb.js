import React from "react";
import PropTypes from "prop-types";

import StyledBreadcrumb from "./Breadcrumb.styles";

const Breadcrumb = ({ children, ...props }) => (
  <StyledBreadcrumb
    itemScope
    itemType="http://schema.org/Breadcrumb"
    {...props}
  >
    {children}
  </StyledBreadcrumb>
);

Breadcrumb.propTypes = {
  children: PropTypes.node.isRequired
};

export default Breadcrumb;
