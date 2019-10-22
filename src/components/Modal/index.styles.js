import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import classNames from "classnames";
import { spacing, themes, constants, zIndex, typography } from "../../theme";
import { smallAndUp, mediumAndUp, largeAndUp } from "../../theme/mediaQueries";

const widthL = {
  small: "400px",
  medium: "520px",
  large: "640px",
  xLarge: "860px"
};

const widthM = {
  small: "400px",
  medium: "520px",
  large: "640px",
  xLarge: "640px"
};

const ContainerAnimation = css`
  transition: opacity 0.1s ${constants.easing.easeInQuad},
    transform 0.1s ${constants.easing.easeInQuad};

  &.open-enter {
    transition: opacity 0.3s ${constants.easing.easeInOutQuad};
    display: block;
    opacity: 0;
    transform: scale(0.7);
  }

  &.open-enter-active {
    transition: opacity 0.3s ${constants.easing.easeInOutQuad},
      transform 0.3s ${constants.easing.easeInOutQuad};
    display: block;
    opacity: 1;
    transform: scale(1);
  }

  &.open-enter-done {
    transition: opacity 0.3s ${constants.easing.easeInOutQuad},
      transform 0.3s ${constants.easing.easeInOutQuad};
    display: block;
    opacity: 1;
    transform: scale(1);
  }

  &.open-exit {
    display: block;
    opacity: 1;
    transform: scale(1);
  }

  &.open-exit-active {
    display: block;
    opacity: 0;
    transform: scale(0.7);
  }
`;

export const ModalContainer = styled.div.attrs(({ isFullscreen }) => ({
  className: classNames({ fullscreen: isFullscreen })
}))`
  display: ${({ isOpened }) => (isOpened ? "block" : "none")};
  top: ${({ displayTop }) => (displayTop ? 0 : "50%")};
  padding: 0;
  margin-top: ${({ displayTop }) => (displayTop ? spacing.colossal : "0")};
  margin-left: ${spacing.moderate};
  margin-right: ${spacing.moderate};
  position: relative;
  transform: ${({ displayTop }) => (displayTop ? "none" : "translateY(-50%)")};
  z-index: ${zIndex.layout.overlay || "#fff"};
  background-color: ${themes.global.white.base};
  box-shadow: 0 16px 16px 0 rgba(0, 0, 0, 0.06), 0 0 16px 0 rgba(0, 0, 0, 0.12);
  border-radius: ${constants.borderRadius.xLarge};

  height: auto;
  max-height: calc(100vh - ${spacing.colossal} * 2);
  overflow: hidden;

  &.fullscreen {
    top: 0;
    margin: 0;
    border-radius: 0;
    transform: none;
    height: 100%;
    max-height: initial;
    max-width: initial;
  }

  ${smallAndUp`
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
  `};

  ${mediumAndUp`
    max-width: ${({ size }) => widthM[size]};
  `};

  ${largeAndUp`
    max-width: ${({ size }) => widthL[size]};
  `};

  ${ContainerAnimation};
`;

const actionBarGutters = css`
  padding: ${spacing.gutters.small}px;

  ${smallAndUp`
    padding: ${spacing.gutters.small}px;
    padding-bottom: ${spacing.gutters.small}px;
  `};

  ${mediumAndUp`
    padding: ${spacing.gutters.mediumAndUp}px;
    padding-bottom: ${spacing.gutters.small}px;
  `};

  ${largeAndUp`
    padding: ${spacing.gutters.largeAndUp}px;
    padding-bottom: ${spacing.gutters.small}px;
  `};
`;

export const ActionBar = styled.div`
  position: relative;
  font-size: ${typography.size.tera};
  line-height: ${typography.lineHeight.header};
  font-weight: ${typography.weight.semiBold};
  text-align: left;
  box-shadow: ${({ shadow }) =>
    shadow ? `0px 26px 18px -23px rgba(0,0,0,0.12)` : "none"};

  ${({ gutters }) => (gutters ? actionBarGutters : "")};
`;

ActionBar.propTypes = {
  shadow: PropTypes.bool.isRequired,
  gutters: PropTypes.bool.isRequired
};

const contentGutters = css`
  padding: 0 ${spacing.gutters.small}px;

  ${smallAndUp`
    padding-left: 0 ${spacing.gutters.small}px;
  `};

  ${mediumAndUp`
    padding: 0 ${spacing.gutters.mediumAndUp}px;
  `};

  ${largeAndUp`
    padding: 0 ${spacing.gutters.largeAndUp}px;
  `};
`;

export const ModalContent = styled.div`
  background-color: ${themes.global.white.base};
  overflow-y: auto;
  line-height: ${typography.lineHeight.body};

  .fullscreen & {
    height: 100%;
  }

  ${({ gutters }) => (gutters ? contentGutters : "")};
`;

ModalContent.propTypes = {
  gutters: PropTypes.bool.isRequired
};

const bottomActionBarGutters = css`
  padding: ${spacing.gutters.small}px;

  ${smallAndUp`
    padding: ${spacing.gutters.small}px;
  `};

  ${mediumAndUp`
    padding: ${spacing.gutters.mediumAndUp}px;
  `};

  ${largeAndUp`
    padding: ${spacing.gutters.largeAndUp}px;
    padding-top: ${spacing.gutters.mediumAndUp}px;
  `};
`;

export const BottomActionBar = styled.div`
  position: relative;
  overflow: hidden;
  box-shadow: ${({ shadow }) =>
    shadow ? `0px -26px 18px -23px rgba(0,0,0,0.12)` : "none"};

  ${({ gutters }) => (gutters ? bottomActionBarGutters : "")};

  button {
    float: right;
    margin-left: 24px;

    &:last-of-type {
      margin-left: 0;
    }
  }
`;

BottomActionBar.propTypes = {
  shadow: PropTypes.bool.isRequired,
  gutters: PropTypes.bool.isRequired
};
