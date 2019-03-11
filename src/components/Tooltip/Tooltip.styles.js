import styled from "styled-components";
import { themes, constants, spacing, typography } from "../../theme";
import { popContainersBoxShadow } from "../../theme/constants";
import {
  TOP,
  LEFT,
  RIGHT,
  BOTTOM,
  LIGHT,
  DARK,
  LARGE,
  ARROW_WIDTH
} from "../constants";

export const StyledTooltip = styled.div`
  background-color: ${({ variant }) =>
    variant === DARK ? themes.global.darkFill : themes.global.white.base};
  border: ${({ variant }) =>
    variant === DARK
      ? `1px solid ${themes.global.darkFill}`
      : `1px solid ${themes.global.gray02}`};
  border-radius: ${constants.borderRadius.large};
  box-shadow: ${popContainersBoxShadow};
  position: absolute;
  max-width: 260px;
  color: ${({ variant }) =>
    variant === DARK ? themes.global.white.base : themes.global.gray01};
  padding: ${spacing.cozy};
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  font-size: ${typography.size.uno};
  transition: opacity 0.1s ${constants.easing.easeInQuad},
    transform 0.1s ${constants.easing.easeInQuad};

  /* pseudoelement should fade in faster and fade out slower than tooltip */
  :before {
    content: "";
    position: absolute;
    transition: opacity 0.15s ${constants.easing.easeInQuad};
    display: ${({ isVisible }) => (isVisible ? "inline-block" : "none")};
    border-right: ${({ variant }) =>
      variant === LIGHT ? `1px solid ${themes.global.gray02}` : ""};
    border-bottom: ${({ variant }) =>
      variant === LIGHT ? `1px solid ${themes.global.gray02}` : ""};
    border-top-left-radius: 100%;
    width: 12px;
    height: 12px;
    transform: translateY(-50%) rotate(-135deg);
    background-color: ${({ variant }) =>
      variant === DARK ? themes.global.darkFill : themes.global.white.base};
    ${({ direction, arrowAdjustment }) => {
      switch (direction) {
        case TOP:
          return `left: calc(50% - ${ARROW_WIDTH /
            2}px + ${arrowAdjustment}); bottom: -13px; transform: translateY(-50%) rotate(45deg);`;
        case BOTTOM:
          return `left: calc(50% - ${ARROW_WIDTH /
            2}px + ${arrowAdjustment}); top: -1px; transform: translateY(-50%) rotate(-135deg);`;
        case LEFT:
          return `top: 10px; right: -${ARROW_WIDTH / 2 +
            1}px; transform: translateY(0%) rotate(-45deg);`;
        case RIGHT:
          return `top: 10px; left: -${ARROW_WIDTH / 2 +
            1}px; transform: translateY(0%) rotate(135deg);`;
        default:
          return `left: calc(50% - ${ARROW_WIDTH /
            2}px); top: -1px; transform: translateY(-50%) rotate(-135deg);`;
      }
    }};
  }

  &.open-enter &.open-enter:before,
  &.open-appear,
  &.open-appear:before {
    transition: opacity 0.25s ${constants.easing.easeOutQuad};
    display: block;
    opacity: 0;
  }

  &.open-enter,
  &.open-appear {
    transition: opacity 0.3s ${constants.easing.easeOutQuad},
      transform 0.3s ${constants.easing.easeOutQuad};
    transform: translate(0, 10px);
    ${({ direction }) => {
      switch (direction) {
        case TOP:
          return "transform: translate(0, 10px);";
        case BOTTOM:
          return "transform: translate(0, -10px);";
        case LEFT:
          return "transform: translate(10px, 0);";
        case RIGHT:
        default:
          return "transform: translate(-10px, 0);";
      }
    }};
  }

  &.open-enter-active,
  &.open-enter-active:before,
  &.open-appear-active,
  &.open-appear-active:before {
    transition: opacity 0.25s ${constants.easing.easeOutQuad};
    display: block;
    opacity: 1;
  }

  &.open-enter-active,
  &.open-appear-active {
    transition: opacity 0.3s ${constants.easing.easeOutQuad},
      transform 0.3s ${constants.easing.easeOutQuad};
    transform: translate(0);
  }

  &.open-enter-done,
  &.open-enter-done:before {
    transition: opacity 0.25s ${constants.easing.easeOutQuad};
    display: block;
    opacity: 1;
  }

  &.open-enter-done {
    transition: opacity 0.3s ${constants.easing.easeOutQuad},
      transform 0.3s ${constants.easing.easeOutQuad};
  }

  &.open-exit,
  &.open-exit:before {
    display: block;
    opacity: 1;
  }

  &.open-exit-active,
  &.open-exit-active:before {
    display: block;
    opacity: 0;
  }

  &.open-exit-done {
    transform: translate(0);
  }
`;

export const SeatDataStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${({ size }) => (size === LARGE ? spacing.moderate : spacing.cozy)};
  border-bottom: ${({ isLast }) =>
    isLast ? `1px solid ${themes.global.gray02}` : "none"};
  line-height: 1;
`;

export const SeatDataColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  text-align: center;

  &:first-child {
    text-align: left;
  }

  &:last-child {
    text-align: right;
  }
`;

export const ColumnHeading = styled.div`
  font-size: ${({ size }) =>
    size === LARGE ? typography.size.hecto : typography.size.uno};
  text-transform: uppercase;
  margin-bottom: ${({ size }) =>
    size === LARGE ? spacing.cozy : spacing.cozy};
  color: ${themes.global.gray02};
`;

export const ColumnText = styled.div`
  font-size: ${({ size }) =>
    size === LARGE ? typography.size.kilo : typography.size.hecto};
  font-weight: ${typography.weight.semiBold};
  color: ${({ variant }) =>
    variant === DARK ? themes.global.white.base : themes.global.gray01};
`;

export const AdditionalData = styled.div`
  padding: ${({ size }) => (size === LARGE ? spacing.moderate : spacing.cozy)};
  font-size: ${({ size }) =>
    size === LARGE ? typography.size.hecto : typography.size.uno};
  color: ${({ variant }) =>
    variant === DARK ? themes.global.white.base : themes.global.gray01};
`;
