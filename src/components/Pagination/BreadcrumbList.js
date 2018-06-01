import React from "react";
import PropTypes from "prop-types";

import StyledBreadcrumbList from "./BreadcrumbList.styles";

const BreadcrumbList = ({ delimiter, children, ...props }) => {
  const childrenLen = children.length;
  return (
    <StyledBreadcrumbList
      itemScope
      itemType="http://schema.org/BreadcrumbList"
      {...props}
    >
      {children.reduce((memo, child, i) => {
        memo.push(child);

        if (i !== childrenLen - 1) {
          memo.push(delimiter);
        }

        return memo;
      }, [])}
    </StyledBreadcrumbList>
  );
};

BreadcrumbList.propTypes = {
  children: PropTypes.node.isRequired,
  delimiter: PropTypes.node.isRequired
};

export default BreadcrumbList;
