import styled from "styled-components";
import { themes, constants, spacing, typography } from "../../theme";
import { popContainersBoxShadow } from "../../theme/constants";
import { directions, variants } from "./constants";

const StyledTooltip = styled.div`
  background-color: ${({ variant }) =>
    variant === variants.dark
      ? themes.global.darkFill
      : themes.global.white.base};
  border: ${({ variant }) =>
    variant === variants.dark
      ? `1px solid ${themes.global.darkFill}`
      : `1px solid ${themes.global.gray02}`};
  border-radius: ${constants.borderRadius.large};
  box-shadow: ${popContainersBoxShadow};
  position: absolute;
  max-width: 260px;
  color: ${({ variant }) =>
    variant === variants.dark
      ? themes.global.white.base
      : themes.global.gray01};
  padding: ${spacing.cozy};
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  font-size: ${typography.size.uno};
  transition: opacity 0.1s ${constants.easing.easeInQuad},
    transform 0.1s ${constants.easing.easeInQuad};

  :before {
    content: "";
    position: absolute;
    transition: opacity 0.1s ${constants.easing.easeInQuad},
      scale 0.1s ${constants.easing.easeInQuad};
    display: ${({ isVisible }) => (isVisible ? "inline-block" : "none")};
    border-right: ${({ variant }) =>
      variant === variants.light ? `1px solid ${themes.global.gray02}` : ""};
    border-bottom: ${({ variant }) =>
      variant === variants.light ? `1px solid ${themes.global.gray02}` : ""};
    border-top-left-radius: 100%;
    width: 12px;
    height: 12px;
    transform: translateY(-50%) rotate(-135deg);
    background-color: ${({ variant }) =>
      variant === variants.dark
        ? themes.global.darkFill
        : themes.global.white.base};
    ${({ direction }) => {
      switch (direction) {
        case directions.top:
          return "left: calc(50% - 9.5px); bottom: -13px; transform: translateY(-50%) rotate(45deg);";
        case directions.bottom:
          return "left: calc(50% - 9.5px); top: -1px; transform: translateY(-50%) rotate(-135deg);";
        case directions.left:
          return "top: 10px; right: -7px; transform: translateY(0%) rotate(-45deg);";
        case directions.right:
          return "top: 10px; left: -7px; transform: translateY(0%) rotate(135deg);";
        default:
          return "left: calc(50% - 9.5px); top: -1px; transform: translateY(-50%) rotate(-135deg);";
      }
    }};
  }

  &.open-enter,
  &.open-enter:before {
    transition: opacity 0.3s ${constants.easing.easeInOutQuad};
    display: block;
    opacity: 0;
  }

  &.open-enter {
    transition: opacity 0.3s ${constants.easing.easeInOutQuad},
      transform 0.3s ${constants.easing.easeInOutQuad};
    transform: scale(0.7);
  }

  &.open-enter-active,
  &.open-enter-active:before {
    transition: opacity 0.3s ${constants.easing.easeInOutQuad};
    display: block;
    opacity: 1;
  }

  &.open-enter-active {
    transition: opacity 0.3s ${constants.easing.easeInOutQuad},
      transform 0.3s ${constants.easing.easeInOutQuad};
    transform: scale(1);
  }

  &.open-enter-done,
  &.open-enter-active:before {
    transition: opacity 0.3s ${constants.easing.easeInOutQuad};
    display: block;
    opacity: 1;
  }

  &.open-enter-done {
    transition: opacity 0.3s ${constants.easing.easeInOutQuad},
      transform 0.3s ${constants.easing.easeInOutQuad};
    transform: scale(1);
  }

  &.open-exit,
  &.open-exit:before {
    display: block;
    opacity: 1;
  }

  &.open-exit {
    transform: scale(1);
  }

  &.open-exit-active,
  &.open-exit-active:before {
    display: block;
    opacity: 0;
  }

  &.open-exit-active {
    transform: scale(0.7);
  }
`;

export default StyledTooltip;
