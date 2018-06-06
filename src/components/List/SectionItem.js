import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import spacing from "../../theme/spacing";
import { SecondaryText, Link } from "../Text";

const ItemContainer = styled.div`
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

const SectionItem = ({ item: { icon, title, subTitle, onItemClick, url } }) => (
  <ItemContainer
    key={title}
    role="link"
    aria-label="Section Item"
    onClick={onItemClick}
  >
    {icon && <IconContainer>{icon}</IconContainer>}
    <div>
      {onItemClick ? (
        <Link href={url}>{title}</Link>
      ) : (
        <SecondaryText>{title}</SecondaryText>
      )}
      {subTitle ? <SecondaryText>{subTitle}</SecondaryText> : null}
    </div>
  </ItemContainer>
);

SectionItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    url: PropTypes.string,
    icon: PropTypes.node,
    onItemClick: PropTypes.func
  }).isRequired
};

export default SectionItem;
