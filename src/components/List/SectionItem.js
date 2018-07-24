import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import spacing from "../../theme/spacing";
import { SecondaryText, Link } from "../Text";
import { ItemContainerConsumer } from "./Context";

const ItemContainer = styled.div.attrs({
  className: "section-item"
})`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: ${props => (props.onClick ? "pointer" : "default")};

  &:not(:last-of-type) {
    margin-bottom: ${spacing.moderate};
  }
`;

const IconContainer = styled.div`
  padding-right: ${spacing.cozy};
`;

const MultiLineLink = styled(Link)`
  display: inline-block;
  overflow: hidden;
  position: relative;
  line-height: 1.2em;
  max-height: 2.4em;
  text-align: justify;
  margin-right: -1em;
  padding-right: 1em;

  &:before {
    content: "...";
    position: absolute;
    right: 0;
    bottom: 0;
  }

  &:after {
    content: "";
    position: absolute;
    right: 0;
    width: 1em;
    height: 1em;
    margin-top: 0.2em;
    background: white;
  }
`;

const handleItemClick = (children, value, event, onItemClick) => {
  if (children && value) {
    value.renderIntoPortal({ children, contentType: "desktop" });
  }
  onItemClick(event);
};

const SectionItem = ({
  item: { icon, title, subTitle, onItemClick, url },
  children,
  ...props
}) => (
  <ItemContainerConsumer>
    {value => (
      <ItemContainer
        key={title}
        role="link"
        aria-label="Section Item"
        onClick={event => handleItemClick(children, value, event, onItemClick)}
        {...props}
      >
        {icon && <IconContainer>{icon}</IconContainer>}
        <div>
          {onItemClick ? (
            <MultiLineLink href={url}>{title}</MultiLineLink>
          ) : (
            <SecondaryText>{title}</SecondaryText>
          )}
          {subTitle ? <SecondaryText>{subTitle}</SecondaryText> : null}
        </div>
      </ItemContainer>
    )}
  </ItemContainerConsumer>
);

SectionItem.defaultProps = {
  children: null
};

SectionItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    url: PropTypes.string,
    icon: PropTypes.node,
    onItemClick: PropTypes.func
  }).isRequired,
  children: PropTypes.node
};

export default SectionItem;
