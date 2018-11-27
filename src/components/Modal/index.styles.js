import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { spacing, colors, constants, zIndex, typography } from "../../theme";
import { smallAndUp, mediumAndUp, largeAndUp } from "../../theme/mediaQueries";

const SHADOW_OFFSET_X = "0 16px 16px 0 rgba(0, 0, 0, 0.06)";
const SHADOW_OFFSET_Y = "0 0 16px 0 rgba(0, 0, 0, 0.12)";

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

export const ModalContainer = styled.div`
  top: ${({ displayTop }) => (displayTop ? 0 : "50%")};
  padding: 0;
  margin-top: ${({ displayTop }) => (displayTop ? "88px" : "0")};
  margin-left: 16px;
  margin-right: 16px;
  position: relative;
  transform: ${({ displayTop }) => (displayTop ? "none" : "translateY(-50%)")};
  z-index: ${zIndex.layout.overlay || "#fff"};
  background-color: ${colors.white.base};
  box-shadow: ${SHADOW_OFFSET_X}, ${SHADOW_OFFSET_Y};
  border-radius: ${constants.borderRadius.large};

  height: auto;
  max-height: calc(100vh - 88px * 2);
  overflow: hidden;

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
    shadow ? `${SHADOW_OFFSET_X}, ${SHADOW_OFFSET_Y}` : "none"};

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
  background-color: ${colors.white.base};
  overflow-y: auto;

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
    shadow ? `${SHADOW_OFFSET_X}, ${SHADOW_OFFSET_Y}` : "none"};

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
