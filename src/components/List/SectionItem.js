import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import spacing from "../../theme/spacing";
import { SecondaryText, Link } from "../Text";
import { ItemContainerConsumer } from "./Context";
import { LinkTitle } from "../Text/Link";

const ItemContainer = styled.div.attrs({
  className: "section-item"
})`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: ${props => (props.onItemClick ? "pointer" : "text")};

  &:not(:last-of-type) {
    margin-bottom: ${spacing.moderate};
  }
`;

const ItemContainerLink = ItemContainer.withComponent(Link);

const IconContainer = styled.div`
  padding-right: ${spacing.cozy};
`;

/* stylelint-disable */
const MultiLineLink = LinkTitle.withComponent("div").extend`
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
/* stylelint-enable */

const handleItemClick = (children, value, event, onItemClick) => {
  if (children && value) {
    value.renderIntoPortal({ children, contentType: "desktop" });
  }

  if (onItemClick) {
    onItemClick(event);
  }
};

const SectionItem = ({
  item: { icon, title, subTitle, onItemClick, url },
  children,
  ...props
}) => {
  const Container = url ? ItemContainerLink : ItemContainer;
  const Title = onItemClick || url ? MultiLineLink : SecondaryText;

  return (
    <ItemContainerConsumer>
      {value => (
        <Container
          key={title}
          role="link"
          aria-label="Section Item"
          onClick={event =>
            handleItemClick(children, value, event, onItemClick)
          }
          onItemClick={onItemClick}
          href={url}
          {...props}
        >
          {icon && <IconContainer>{icon}</IconContainer>}
          <div>
            <Title>{title}</Title>
            {subTitle && <SecondaryText>{subTitle}</SecondaryText>}
          </div>
        </Container>
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
