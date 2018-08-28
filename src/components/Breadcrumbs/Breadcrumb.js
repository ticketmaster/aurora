import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import StyledBreadcrumb from "./Breadcrumb.styles";

const Breadcrumb = ({ children, className, variant, ...props }) => (
  <nav style={{ overflow: "hidden", maxWidth: "100%" }}>
    <StyledBreadcrumb
      {...props}
      className={classNames(className, `breadcrumb--${variant}`)}
      itemScope
      itemType="http://schema.org/Breadcrumb"
      childrenLen={children && Array.from(children).length}
    >
      {children}
    </StyledBreadcrumb>
  </nav>
);

Breadcrumb.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["light", "dark", "accent", "none"])
};

Breadcrumb.defaultProps = {
  variant: "light",
  className: null
};

export default Breadcrumb;
