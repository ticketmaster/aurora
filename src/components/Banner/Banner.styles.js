import styled from "styled-components";
import { spacing, constants } from "../../theme";
import getThemeValue from "../../utils/getThemeValue";
import { CloseIcon as CrossIcon } from "../Icons";
import { LinkCta, Text } from "../Text";

export const BASE_BANNER_HEIGHT = 56;
export const MAX_BANNER_HEIGHT = 1000;

export const Link = styled(LinkCta)`
  color: #0064e6;
  padding-left: 4px;

  &:visited {
    color: #0064e6;
  }
`;

export const Container = styled.div`
  padding: ${spacing.moderate};
  position: relative;
  border: 1px solid ${getThemeValue("onyx", "muted")};
  border-radius: ${constants.borderRadius.large};
  display: flex;
  overflow: hidden;
  transition: max-height 0.3s ${constants.easing.easeInOutQuad},
    opacity 0.3s ${constants.easing.easeInQuad};
  background-color: ${getThemeValue("white", "muted")};
  box-sizing: border-box;
  opacity: 0;

  &.visible-banner {
    transition: max-height 0.3s ${constants.easing.easeInOutQuad},
      opacity 0.3s ${constants.easing.easeInOutQuad};
    opacity: 1;
  }

  &.banner-variant-error {
    background-color: ${getThemeValue("error", "lightest")};
    border-color: ${getThemeValue("error", "base")};
  }

  &.banner-variant-success {
    background-color: ${getThemeValue("success", "lightest")};
    border-color: ${getThemeValue("success", "base")};
  }

  &.banner-variant-alert {
    background-color: ${getThemeValue("caution", "lightest")};
    border-color: ${getThemeValue("caution", "base")};
  }

  &.banner-variant-info {
    background-color: ${getThemeValue("primary", "light")};
    border-color: ${getThemeValue("primary", "base")};
  }
`;

export const ContentSection = styled.div`
  font-family: Averta, Courier, monospace;
`;

export const Content = styled(Text)`
  padding-top: 12px;
  opacity: 1;
  transition: opacity 0.3s ${constants.easing.easeInOutQuad} 0.1s;
  line-height: 1.29;

  .collapsed & {
    transition: opacity 0.1s ${constants.easing.easeInOutQuad};
    opacity: 0;
  }
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  position: absolute;
  top: 6px;
  right: 7px;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:active {
    transform: scale(0.98, 0.98) translate(0, 1px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px 0 ${getThemeValue("primary", "base")};
    border-radius: 1px;
  }
`;

export const CloseIcon = styled(CrossIcon).attrs({
  color: "currentColor"
})`
  color: ${getThemeValue("onyx", "muted")};
`;

export const IconSection = styled.div`
  padding-right: ${spacing.moderate};
`;
