import styled from "styled-components";
import { themes, constants, spacing } from "../../theme";

const StyledTooltip = styled.div`
  background-color: ${themes.global.white.base};
  border: 1px solid ${themes.global.gray02};
  border-radius: ${constants.borderRadius.large};
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.12);
  position: absolute;
  max-width: 260px;
  padding: ${spacing.cozy};
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  transition: opacity 0.1s ${constants.easing.easeInQuad},
    transform 0.1s ${constants.easing.easeInQuad};

  :before {
    content: "";
    position: absolute;
    transition: opacity 0.1s ${constants.easing.easeInQuad},
      scale 0.1s ${constants.easing.easeInQuad};
    bottom: -1px;
    display: ${({ isVisible }) => (isVisible ? "inline-block" : "none")};
    border-right: 1px solid ${themes.global.gray02};
    border-bottom: 1px solid ${themes.global.gray02};
    width: 19px;
    height: 19px;
    transform: translateY(-50%) rotate(-135deg);
    background: ${themes.global.white.base};
    ${({ direction }) => {
      switch (direction) {
        case "top":
          return "left: calc(50% - 9.5px); bottom: -20px; transform: translateY(-50%) rotate(45deg);";
        case "bottom":
          return "left: calc(50% - 9.5px); top: -1px; transform: translateY(-50%) rotate(-135deg);";
        case "left":
          return "top: 10px; right: -10px; transform: translateY(0%) rotate(-45deg);";
        case "right":
          return "top: 10px; left: -10px; transform: translateY(0%) rotate(135deg);";
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
