import styled from "styled-components";

import { typography, colors, constants, themes } from "../../theme";

const colorVariants = {
  standard: theme => ({
    color: theme.color,
    backgroundColor: theme.default,
    backgroundColorHover: theme.hover,
    backgroundColorPressed: theme.pressed,
    borderColor: colors.transparent
  }),
  standardDisabled: theme => ({
    color: theme.color,
    backgroundColor: theme.disabled,
    borderColor: colors.transparent
  }),
  special: theme => ({
    color: theme.color,
    backgroundColor: theme.default,
    backgroundColorHover: theme.hover,
    backgroundColorPressed: theme.pressed,
    borderColor: colors.transparent
  }),
  specialDisabled: theme => ({
    color: theme.color,
    backgroundColor: theme.disabled,
    borderColor: colors.transparent
  }),
  outline: theme => ({
    color: theme.color,
    backgroundColor: theme.default,
    backgroundColorHover: theme.hover,
    backgroundColorPressed: theme.pressed,
    borderColor: theme.color
  }),
  outlineDisabled: theme => ({
    color: theme.disabledColor,
    backgroundColor: theme.disabled,
    borderColor: theme.disabledColor
  }),
  transparent: theme => ({
    color: theme.color,
    backgroundColor: colors.transparent,
    backgroundColorHover: theme.hover,
    backgroundColorPressed: theme.pressed,
    borderColor: colors.transparent
  }),
  transparentDisabled: theme => ({
    color: theme.disabledColor,
    backgroundColor: colors.transparent,
    borderColor: colors.transparent
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

const getPadding = ({ size }) => (SIZES[size] ? SIZES[size].padding : 0);

export const StyledButton = styled.button`
  font-weight: ${typography.weight.semiBold};
  font-size: ${({ size }) => (SIZES[size] ? SIZES[size].fontSize : "inherit")};
  line-height: ${({ size }) =>
    SIZES[size] ? SIZES[size].lineHeight : "inherit"};
  width: 100%;
  padding: 0 ${getPadding} 0 ${getPadding};
  min-width: 60px;
  text-align: center;
  text-transform: capitalize;
  border-radius: ${constants.borderRadius.small};
  cursor: pointer;

  color: ${({ variant, theme: { themeName } }) => {
    const buttonTheme = themes[themeName].buttons[variant];
    return colorVariants[variant](buttonTheme).color;
  }};
  background-color: ${({ variant, theme: { themeName } }) => {
    const buttonTheme = themes[themeName].buttons[variant];
    return colorVariants[variant](buttonTheme).backgroundColor;
  }};
  border: 1px solid
    ${({ variant, theme: { themeName } }) => {
      const buttonTheme = themes[themeName].buttons[variant];
      return colorVariants[variant](buttonTheme).borderColor;
    }};

  transition: transform 0.1s linear;
  transition: background-color 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px 0 ${colors.azure.base};
  }

  &:hover {
    background-color: ${({ variant, theme: { themeName } }) => {
      const buttonTheme = themes[themeName].buttons[variant];
      return colorVariants[variant](buttonTheme).backgroundColorHover;
    }};
  }

  &:active {
    transform: scale(0.95, 0.95);
    background-color: ${({ variant, theme: { themeName } }) => {
      const buttonTheme = themes[themeName].buttons[variant];
      return colorVariants[variant](buttonTheme).backgroundColorPressed;
    }};
  }

  &:disabled {
    color: ${({ variant, theme: { themeName } }) => {
      const buttonTheme = themes[themeName].buttons[variant];
      return colorVariants[variant](buttonTheme).color;
    }};

    background-color: ${({ variant, theme: { themeName } }) => {
      const buttonTheme = themes[themeName].buttons[variant];
      return colorVariants[`${variant}Disabled`](buttonTheme).backgroundColor;
    }};
    border: 1px solid
      ${({ variant, theme: { themeName } }) => {
        const buttonTheme = themes[themeName].buttons[variant];
        return colorVariants[`${variant}Disabled`](buttonTheme).borderColor;
      }};
    cursor: not-allowed;
  }
`;

StyledButton.defaultProps = {
  theme: {
    themeName: "b2c"
  }
};

export const StyledButtonLink = StyledButton.withComponent(`a`).extend`
  text-decoration: none;
`;
