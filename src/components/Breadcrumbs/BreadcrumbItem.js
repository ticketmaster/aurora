import React from "react";
import PropTypes from "prop-types";
import typography from "../../theme/typography";
import { Link, StyledText } from "../Text";

const Text = StyledText.withComponent("span");

const BreadcrumbItem = ({ position, children, href, ...props }) => {
  const Tag = href ? Link : Text;

  return (
    <li
      itemProp="itemListElement"
      itemScope
      itemType="http://schema.org/ListItem"
      style={{ whiteSpace: "nowrap" }}
    >
      <Tag
        itemProp="item"
        fontSize={typography.size.uno}
        href={href || null}
        {...props}
      >
        {children}
      </Tag>
      {children && <meta itemProp="name" content={children} />}
      {position && <meta itemProp="position" content={position} />}
    </li>
  );
};

BreadcrumbItem.propTypes = {
  position: PropTypes.string.isRequired,
  href: PropTypes.string,
  children: PropTypes.node.isRequired
};

BreadcrumbItem.defaultProps = {
  href: ""
};

export default BreadcrumbItem;
