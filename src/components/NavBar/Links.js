import styled from "styled-components";

import {
  LinkRow as LinkRowBase,
  LinkList as LinkListBase,
  LinkItem,
  LinkListItem
} from "../Link";

import { themes, colors, typography, spacing, constants } from "../../theme";

const LinkRow = styled(LinkRowBase)`
  height: 60px;
`;

const LinkList = styled(LinkListBase).attrs({
  role: "menu"
})`
  top: 60px;
  left: -74%;
`;

const Link = styled(LinkItem)`
  background-color: transparent;
  padding: 19px ${spacing.gutters.small}px 19px ${spacing.gutters.small}px;
  color: ${themes.global.white.base};
  font-size: ${typography.size.kilo};
  font-weight: ${typography.weight.semiBold};
  text-shadow: 1px 0px 0px transparent;
  transition: all 300ms ${constants.easing.easeInOutQuad};

  .nav--inverted &,
  .links__list & {
    color: ${themes.global.onyx.base};
    font-weight: ${typography.weight.regular};
  }

  &:visited,
  &:active {
    color: ${themes.global.white.base};
    .nav--inverted &,
    .links__list & {
      color: ${themes.global.onyx.base} !important;
    }
  }

  /* stylelint-disable */
  &:focus,
  &:hover {
    outline: 0;
    background-color: rgba(38, 38, 38, 0.1);
    .nav--inverted &,
    .links__list & {
      background-color: ${colors.shale};
    }
  }
  /* stylelint-enable */
`;

export default {
  Link,
  LinkList,
  LinkListItem,
  LinkRow
};
