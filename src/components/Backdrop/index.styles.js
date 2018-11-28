/* eslint-disable import/prefer-default-export */

import styled, { css } from "styled-components";
import zIndex from "../../theme/zIndex";
import { constants, themes } from "../../theme";

const OverlayAnimation = css`
  transition: opacity 0.1s ${constants.easing.easeInQuad};

  &.open-enter {
    transition: opacity 0.3s ${constants.easing.easeInOutQuad};
    display: block;
    opacity: 0;
  }

  &.open-enter-active {
    transition: opacity 0.3s ${constants.easing.easeInOutQuad};
    display: block;
    opacity: 1;
  }

  &.open-enter-done {
    transition: opacity 0.3s ${constants.easing.easeInOutQuad};
    display: block;
    opacity: 1;
  }

  &.open-exit {
    display: block;
    opacity: 1;
  }

  &.open-exit-active {
    display: block;
    opacity: 0;
  }
`;

export const Overlay = styled.div.attrs({
  className: "container--overlay"
})`
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: ${themes.global.onyx.light};
  z-index: ${zIndex.layout.overlay};
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};

  ${({ animated }) => (animated ? OverlayAnimation : "")};
`;
