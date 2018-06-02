import React from "react";
import PropTypes from "prop-types";

import StyledBreadcrumb from "./Breadcrumb.styles";

const Breadcrumb = ({ delimiter, children, ...props }) => {
  const childrenLen = children.length;
  return (
    <StyledBreadcrumb
      itemScope
      itemType="http://schema.org/Breadcrumb"
      {...props}
    >
      {children.reduce((memo, child, i) => {
        memo.push(child);

        if (i !== childrenLen - 1) {
          memo.push(delimiter);
        }

        return memo;
      }, [])}
    </StyledBreadcrumb>
  );
};

Breadcrumb.propTypes = {
  children: PropTypes.node.isRequired,
  delimiter: PropTypes.node.isRequired
};

export default Breadcrumb;
