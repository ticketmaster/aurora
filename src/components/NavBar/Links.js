import styled from "styled-components";

import {
  LinkRow as LinkRowBase,
  LinkList as LinkListBase,
  LinkItem
} from "../Link";
import colors from "../../theme/colors";
import typography from "../../theme/typography";
import spacing from "../../theme/spacing";

const LinkRow = LinkRowBase.extend`
  height: 60px;
`;

const LinkList = LinkListBase.extend`
  top: 41px;
`;

const Link = styled(LinkItem)`
  background-color: transparent;
  padding: 19px ${spacing.gutters.small}px 19px ${spacing.gutters.small}px;
  color: ${colors.white.base};
  font-size: ${typography.size.kilo};
  font-weight: ${typography.weight.semiBold};

  .nav--inverted &,
  .links__list & {
    color: ${colors.onyx.base};
    font-weight: ${typography.weight.regular};
  }

  &:visited,
  &:active {
    color: ${colors.white.base};
    .nav--inverted &,
    .links__list & {
      color: ${colors.onyx.base} !important;
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
  LinkRow
};
