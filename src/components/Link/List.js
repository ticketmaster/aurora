import styled from "styled-components";

import constants from "../../theme/constants";
import colors from "../../theme/colors";
import typography from "../../theme/typography";

const LinkList = styled.div.attrs({
  className: "links links__list",
  role: "menu"
})`
  display: none;
  background-color: ${colors.white.base};
  color: ${colors.onyx.base};
  font-weight: ${typography.weight.regular};
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.12);
  border-radius: ${constants.borderRadius.large};
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;

  .list-container--open & {
    display: block;
  }
`;

export default LinkList;
