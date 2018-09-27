import styled from "styled-components";

import { BUTTON_VARIANTS } from "./constants";
import { typography, constants, themes } from "../../theme";

const colorVariants = {
  standard: theme => ({
    color: theme.white.base,
    backgroundColor: theme.primary.base,
    backgroundColorHover: theme.primary.medium,
    backgroundColorPressed: theme.primary.dark,
    borderColor: theme.transparent
  }),
  standardDisabled: theme => ({
    color: theme.white.base,
    backgroundColor: theme.primary.base,
    borderColor: theme.transparent
  }),
  special: theme => ({
    color: theme.white.base,
    backgroundColor: theme.special.base,
    backgroundColorHover: theme.special.medium,
    backgroundColorPressed: theme.special.dark,
    borderColor: theme.transparent
  }),
  specialDisabled: theme => ({
    color: theme.white.base,
    backgroundColor: theme.special.base,
    borderColor: theme.transparent
  }),
  outline: theme => ({
    color: theme.primary.base,
    backgroundColor: theme.white.base,
    backgroundColorHover: theme.primary.light,
    backgroundColorPressed: theme.primary.muted,
    borderColor: theme.primary.base
  }),
  outlineDisabled: theme => ({
    color: theme.primary.base,
    backgroundColor: theme.transparent,
    borderColor: theme.primary.base
  }),
  transparent: theme => ({
    color: theme.primary.base,
    backgroundColor: theme.transparent,
    backgroundColorHover: theme.primary.light,
    backgroundColorPressed: theme.primary.muted,
    borderColor: theme.transparent
  }),
  transparentDisabled: theme => ({
    color: theme.primary.base,
    backgroundColor: theme.transparent,
    borderColor: theme.transparent
  })
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

const getPadding = ({ size }) => SIZES[size].padding;

export const StyledButton = styled.button`
  font-weight: ${typography.weight.semiBold};
  font-size: ${({ size }) => SIZES[size].fontSize};
  line-height: ${({ size }) => SIZES[size].lineHeight};
  width: 100%;
  padding: 0 ${getPadding} 0 ${getPadding};
  min-width: 60px;
  text-align: center;
  ${({ noTransform }) => (noTransform ? "" : "text-transform: capitalize;")}
  border-radius: ${constants.borderRadius.small};
  cursor: pointer;

  color: ${({ variant, theme: { themeName } }) => {
    const buttonTheme = themes[themeName];
    return colorVariants[variant](buttonTheme).color;
  }};
  background-color: ${({ variant, theme: { themeName } }) => {
    const buttonTheme = themes[themeName];
    return colorVariants[variant](buttonTheme).backgroundColor;
  }};
  border: 1px solid
    ${({ variant, theme: { themeName } }) => {
      const buttonTheme = themes[themeName];
      return colorVariants[variant](buttonTheme).borderColor;
    }};

  transition: transform 0.1s linear;
  transition: background-color 0.3s ${constants.easing.easeInOutQuad};

  &:focus {
    outline: none;
    box-shadow: ${({ theme: { themeName } }) => {
      const buttonTheme = themes[themeName];
      return `0 0 5px 0 ${buttonTheme.primary.base}`;
    }};
  }

  &:hover {
    background-color: ${({ variant, theme: { themeName } }) => {
      const buttonTheme = themes[themeName];
      return colorVariants[variant](buttonTheme).backgroundColorHover;
    }};
  }

  &:active {
    transform: scale(0.98, 0.98) translate(0, 1px);
    background-color: ${({ variant, theme: { themeName } }) => {
      const buttonTheme = themes[themeName];
      return colorVariants[variant](buttonTheme).backgroundColorPressed;
    }};
  }

  &:disabled {
    transform: none;
    color: ${({ variant, theme: { themeName } }) => {
      const buttonTheme = themes[themeName];
      return colorVariants[variant](buttonTheme).color;
    }};

    background-color: ${({ variant, theme: { themeName } }) => {
      const buttonTheme = themes[themeName];
      return colorVariants[`${variant}Disabled`](buttonTheme).backgroundColor;
    }};
    border: 1px solid
      ${({ variant, theme: { themeName } }) => {
        const buttonTheme = themes[themeName];
        return colorVariants[`${variant}Disabled`](buttonTheme).borderColor;
      }};
    ${({ variant }) =>
      variant === BUTTON_VARIANTS.special ? "opacity: 0.4;" : "opacity: 0.2;"};
  }
`;

StyledButton.defaultProps = {
  theme: {
    themeName: "tm"
  }
};

export const StyledButtonLink = StyledButton.withComponent(`a`).extend`
  display: block;
  text-decoration: none;
`;
