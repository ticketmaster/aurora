import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import classNames from "classnames";

import { colors, constants, spacing, typography, themes } from "../../theme";
import { LinkListConsumer } from "./Context";
import composeEventHandlers from "../../utils/composeEventHandlers";

const ItemContainer = styled.div.attrs({
  className: "links__list__item"
})`
  padding: 0 12px;
  height: 36px;
  display: flex;
  color: ${themes.global.darkFill};
  align-items: center;
  font-size: ${typography.size.kilo};
  font-weight: ${typography.weight.regular};
  border-radius: ${constants.borderRadius.small};

  &.links__list__item--selected {
    background-color: ${colors.shale};
  }

  &:hover {
    background-color: ${themes.global.primary.base};
    color: ${themes.global.white.base};
  }

  &:not(:last-of-type) {
    margin-bottom: ${spacing.slim};
  }
`;

const LinkItemContainer = styled(ItemContainer)`
  text-decoration: none;
`;

const ListItem = ({ children, index, onClick, href, ...rest }) => (
  <LinkListConsumer>
    {({ onItemClick, selectedIndex }) =>
      href ? (
        <LinkItemContainer onClick={onClick} href={href} as="a" {...rest}>
          {children}
        </LinkItemContainer>
      ) : (
        <ItemContainer
          className={classNames({
            "links__list__item--selected": index === selectedIndex
          })}
          onClick={composeEventHandlers(() => onItemClick({ index }), onClick)}
          {...rest}
        >
          {children}
        </ItemContainer>
      )
    }
  </LinkListConsumer>
);

ListItem.defaultProps = {
  index: 0,
  onClick: () => {},
  href: null,
  children: null
};

ListItem.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number,
  onClick: PropTypes.func,
  href: PropTypes.string
};

export default ListItem;
