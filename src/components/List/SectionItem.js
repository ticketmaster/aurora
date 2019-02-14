import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { colors, spacing } from "../../theme";
import { SecondaryText, Link } from "../Text";
import { ItemContainerConsumer } from "./Context";

const ItemContainer = styled.div.attrs({
  className: "section-item"
})`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  cursor: ${props => (props.onItemClick || props.href ? "pointer" : "text")};

  &:not(:last-of-type) {
    margin-bottom: ${spacing.moderate};
  }
`;

const IconContainer = styled.div`
  padding-right: ${spacing.cozy};
`;

/* stylelint-disable */
const MultiLineLink = styled.div.attrs({
  className: "section-item-link"
})`
  color: ${({ color }) => color || colors.azure.base};
  text-decoration: none;
  display: -webkit-box;
  overflow: hidden;

  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
/* stylelint-enable */

const handleItemClick = (children, value, event, onItemClick, url) => {
  if (children && value) {
    value.renderIntoPortal({ children, contentType: "desktop" });
  }

  if (onItemClick) {
    onItemClick(event);
  }

  if (url && value) {
    value.resetOpenIndex();
  }
};

const SectionItem = ({
  item: { icon, title, subTitle, onItemClick, url },
  children,
  ...props
}) => {
  const isMultiline = onItemClick || url;
  const Title = isMultiline ? MultiLineLink : SecondaryText;
  const itemContainerProps = url ? { ...props, as: Link } : props;

  return (
    <ItemContainerConsumer>
      {value => (
        <ItemContainer
          key={title}
          role="link"
          aria-label="Section Item"
          onClick={event =>
            handleItemClick(children, value, event, onItemClick, url)
          }
          onItemClick={onItemClick}
          href={url}
          {...itemContainerProps}
        >
          {icon && <IconContainer>{icon}</IconContainer>}
          <div>
            <Title>{title}</Title>
            {subTitle && <SecondaryText>{subTitle}</SecondaryText>}
          </div>
        </ItemContainer>
      )}
    </ItemContainerConsumer>
  );
};

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
