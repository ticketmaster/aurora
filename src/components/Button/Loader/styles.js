import styled, { keyframes } from "styled-components";

import { getThemeValue } from "../../../utils";
import spacing from "../../../theme/spacing";

const dotColors = {
  white: getThemeValue("white", "base"),
  primary: getThemeValue("primary", "base"),
  dark: getThemeValue("darkFill")
};

const colorVariants = {
  standard: dotColors.white,
  standardDisabled: dotColors.white,
  special: dotColors.white,
  specialDisabled: dotColors.white,
  outline: dotColors.primary,
  outlineDisabled: dotColors.primary,
  transparent: dotColors.primary,
  transparentDisabled: dotColors.primary,
  outlineGray: dotColors.dark,
  outlineGrayDisabled: dotColors.primary
};

const wave = keyframes`
  0%, 60%, 100% {
    transform: initial;
  }

  30% {
    transform: translateY(-10px);
  }
`;

export const Dot = styled.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ variant }) => colorVariants[variant]};
  animation: ${wave} 0.8s linear infinite;

  &:nth-child(2) {
    animation-delay: -0.1s;
    margin: 0 ${spacing.cozy};
  }

  &:nth-child(3) {
    animation-delay: -0.5s;
  }
`;
Dot.displayName = "Dot";

export const LoaderWrapper = styled.span`
  position: relative;
`;
LoaderWrapper.displayName = "LoaderWrapper";

export const ContentWrapper = styled.span`
  visibility: ${({ isLoading }) => (isLoading ? "hidden" : "visible")};
`;
ContentWrapper.displayName = "ContentWrapper";

export const DotsWrapper = styled.span`
  position: absolute;
  white-space: nowrap;
  left: 0;
  right: 0;
`;
DotsWrapper.displayName = "DotsWrapper";
