import styled, { StyledComponent } from "styled-components";

import { SPECIAL, Size, ButtonVariant } from "../constants";
import { typography, constants, spacing } from "../../theme";
import { getThemeValue } from "../../utils";

const colorVariants = {
  standard: {
    color: getThemeValue("white", "base"),
    backgroundColor: getThemeValue("primary", "base"),
    backgroundColorHover: getThemeValue("primary", "medium"),
    backgroundColorPressed: getThemeValue("primary", "dark"),
    borderColor: getThemeValue("transparent")
  },
  standardDisabled: {
    color: getThemeValue("white", "base"),
    backgroundColor: getThemeValue("primary", "base"),
    borderColor: getThemeValue("transparent")
  },
  special: {
    color: getThemeValue("white", "base"),
    backgroundColor: getThemeValue("special", "base"),
    backgroundColorHover: getThemeValue("special", "medium"),
    backgroundColorPressed: getThemeValue("special", "dark"),
    borderColor: getThemeValue("transparent")
  },
  specialDisabled: {
    color: getThemeValue("white", "base"),
    backgroundColor: getThemeValue("special", "base"),
    borderColor: getThemeValue("transparent")
  },
  outline: {
    color: getThemeValue("primary", "base"),
    backgroundColor: getThemeValue("white", "base"),
    backgroundColorHover: getThemeValue("primary", "light"),
    backgroundColorPressed: getThemeValue("primary", "muted"),
    borderColor: getThemeValue("primary", "base")
  },
  outlineDisabled: {
    color: getThemeValue("primary", "base"),
    backgroundColor: getThemeValue("transparent"),
    borderColor: getThemeValue("primary", "base")
  },
  transparent: {
    color: getThemeValue("primary", "base"),
    backgroundColor: getThemeValue("transparent"),
    backgroundColorHover: getThemeValue("primary", "light"),
    backgroundColorPressed: getThemeValue("primary", "muted"),
    borderColor: getThemeValue("transparent")
  },
  transparentDisabled: {
    color: getThemeValue("primary", "base"),
    backgroundColor: getThemeValue("transparent"),
    borderColor: getThemeValue("transparent")
  },
  outlineGray: {
    color: getThemeValue("darkFill"),
    backgroundColor: getThemeValue("white", "base"),
    backgroundColorHover: getThemeValue("white", "base"),
    backgroundColorPressed: getThemeValue("white", "base"),
    borderColor: getThemeValue("gray04")
  },
  outlineGrayDisabled: {
    color: getThemeValue("primary", "base"),
    backgroundColor: getThemeValue("transparent"),
    borderColor: getThemeValue("gray02")
  }
};

const SIZES = {
  small: {
    padding: "10px",
    lineHeight: 1.84,
    fontSize: typography.size.uno
  },
  regular: {
    padding: "12px",
    lineHeight: 2.43,
    fontSize: typography.size.hecto
  },
  large: {
    padding: "14px",
    lineHeight: 2.63,
    fontSize: typography.size.kilo
  }
};

interface StyledButtonProps {
  readonly size: Size;
  readonly variant: ButtonVariant;
  readonly noTransform?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const getPadding = ({ size }) => SIZES[size].padding;

export const StyledButton = styled.button<StyledButtonProps>`
  font-weight: ${typography.weight.semiBold};
  font-size: ${({ size }) => SIZES[size].fontSize};
  line-height: ${({ size }) => SIZES[size].lineHeight};
  width: 100%;
  padding: 0 ${getPadding} 0 ${getPadding};
  min-width: 60px;
  text-align: center;
  border-radius: ${constants.borderRadius.small};
  cursor: pointer;

  color: ${({ variant }) => colorVariants[variant].color};
  background-color: ${({ variant }) => colorVariants[variant].backgroundColor};
  border: 1px solid ${({ variant }) => colorVariants[variant].borderColor};

  transition: transform 0.1s linear;
  transition: background-color 0.3s ${constants.easing.easeInOutQuad};

  &:focus {
    outline: none;
    box-shadow: 0 0 5px 0 ${getThemeValue("primary", "base")};
  }

  &:hover {
    background-color: ${({ variant }) =>
      colorVariants[variant].backgroundColorHover};
  }

  &:active {
    transform: scale(0.98, 0.98) translate(0, 1px);
    background-color: ${({ variant }) =>
      colorVariants[variant].backgroundColorPressed};
  }

  &:disabled {
    transform: none;
    color: ${({ variant }) => colorVariants[variant].color};
    background-color: ${({ variant }) =>
      colorVariants[variant].backgroundColor};
    border: 1px solid
      ${({ variant }) => colorVariants[`${variant}Disabled`].borderColor};
    ${({ variant }) =>
      variant === SPECIAL ? "opacity: 0.4;" : "opacity: 0.2;"};
  }

  &.noFocus:focus {
    box-shadow: none;
  }

  &.iconed svg {
    position: relative;
    display: inline-block;
    vertical-align: text-top;
    margin-right: ${spacing.cozy};
  }
`;

StyledButton.defaultProps = {
  theme: {
    themeName: "tm"
  }
};

export const StyledButtonLink = styled(StyledButton as StyledComponent<
  "a",
  any,
  StyledButtonProps,
  never
>)`
  display: block;
  text-decoration: none;
`;
