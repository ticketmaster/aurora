import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import typography from "../../theme/typography";
import { Link, StyledText } from "../Text";

const InlineLi = styled.li`
  white-space: nowrap;
`;

const Text = StyledText.withComponent("span");

const BreadcrumbItem = ({ position, children, href, ...props }) => {
  const Tag = href ? Link : Text;

  return (
    <InlineLi
      itemProp="itemListElement"
      itemScope
      itemType="http://schema.org/ListItem"
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
    </InlineLi>
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
