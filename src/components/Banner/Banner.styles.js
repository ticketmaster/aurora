import styled from "styled-components";
import { typography, spacing, constants } from "../../theme";
import getThemeValue from "../../utils/getThemeValue";
import { CloseIcon as CrossIcon } from "../Icons";
import { LinkCta } from "../Text";

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
  max-height: 500px;
  transition: max-height 0.3s ${constants.easing.easeInOutQuad};
  background-color: ${getThemeValue("white", "muted")};
  box-sizing: border-box;

  &.collapsed {
    max-height: 56px;
  }

  &.banner-variant-error {
    background-color: ${getThemeValue("error", "light")};
    border-color: ${getThemeValue("error", "base")};
  }

  &.banner-variant-success {
    background-color: ${getThemeValue("success", "light")};
    border-color: ${getThemeValue("success", "base")};
  }

  &.banner-variant-alert {
    background-color: rgba(242, 189, 42, 0.2);
    border-color: ${getThemeValue("caution", "base")};
  }

  &.banner-variant-info {
    background-color: rgba(2, 108, 223, 0.1);
    border-color: ${getThemeValue("primary", "base")};
  }
`;

export const ContentSection = styled.div`
  font-family: Averta, Courier, monospace;
  color: ${getThemeValue("gray01")};
  line-height: 1.29;
`;

export const Content = styled.div`
  font-size: ${typography.size.hecto};
  font-weight: ${typography.weight.regular};
  padding-top: 12px;
  opacity: 1;
  transition: opacity 0.3s ${constants.easing.easeInOutQuad} 0.1s;

  .collapsed & {
    transition: opacity 0.1s ${constants.easing.easeInOutQuad};
    opacity: 0;
  }
`;

export const Heading = styled.span`
  font-size: ${typography.size.hecto};
  font-weight: ${typography.weight.semiBold};
  color: ${getThemeValue("gray01")};
`;

export const CloseButton = styled.span`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 16px;
  height: 16px;

  &:active {
    transform: scale(0.98, 0.98) translate(0, 1px);
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
