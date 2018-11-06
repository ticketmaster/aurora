import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import classNames from "classnames";

import colors from "../../theme/colors";
import constants from "../../theme/constants";
import { LinkListConsumer } from "./Context";
import spacing from "../../theme/spacing";
import typography from "../../theme/typography";
import composeEventHandlers from "../../utils/composeEventHandlers";

const ItemContainer = styled.div.attrs({
  className: "links__list__item"
})`
  padding: 0 12px;
  height: 36px;
  display: flex;
  color: ${colors.blackPearl};
  align-items: center;
  font-size: ${typography.size.kilo};
  font-weight: ${typography.weight.regular};
  border-radius: ${constants.borderRadius.small};

  &.links__list__item--selected {
    background-color: ${colors.shale};
  }

  &:hover {
    background-color: ${colors.azure.base};
    color: ${colors.white.base};
  }

  &:not(:last-of-type) {
    margin-bottom: ${spacing.slim};
  }
`;

const LinkItemContainer = styled(ItemContainer.withComponent("a"))`
  text-decoration: none;
`;

const ListItem = ({ children, index, onClick, href, ...rest }) => (
  <LinkListConsumer>
    {({ onItemClick, selectedIndex }) =>
      href ? (
        <LinkItemContainer onClick={onClick} href={href} {...rest}>
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
