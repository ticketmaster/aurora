/* Temporary styles for backward compatibility */
import styled from "styled-components";

import { typography, colors, constants } from "../../theme";

const HEIGHT = "36px";
const VARIANTS = {
  standard: {
    color: colors.white.base,
    backgroundColor: colors.azure.base,
    borderColor: colors.azure.base
  },
  standardDisabled: {
    color: colors.white.base,
    backgroundColor: colors.azure.light,
    borderColor: colors.azure.light
  },
  outline: {
    color: colors.azure.base,
    backgroundColor: colors.white.base,
    borderColor: colors.azure.base
  },
  outlineDisabled: {
    color: colors.azure.light,
    backgroundColor: colors.white.base,
    borderColor: colors.azure.light
  },
  transparent: {
    color: colors.white.base,
    backgroundColor: "transparent",
    borderColor: colors.white.base
  },
  transparentDisabled: {
    color: colors.white.muted,
    backgroundColor: "transparent",
    borderColor: colors.white.muted
  }
};

export const StyledButtonOld = styled.button`
  font-size: ${typography.size.hecto};
  font-weight: ${typography.weight.semiBold};
  height: ${HEIGHT};
  width: 100%;
  min-width: 100px;
  text-align: center;
  text-transform: capitalize;
  border-radius: ${constants.borderRadius.small};
  cursor: pointer;

  color: ${({ variant }) => VARIANTS[variant].color};
  background-color: ${({ variant }) => VARIANTS[variant].backgroundColor};
  border: 1px solid ${({ variant }) => VARIANTS[variant].borderColor};

  &:disabled {
    color: ${({ variant }) => VARIANTS[`${variant}Disabled`].color};
    background-color: ${({ variant }) =>
      VARIANTS[`${variant}Disabled`].backgroundColor};
    border: 1px solid
      ${({ variant }) => VARIANTS[`${variant}Disabled`].borderColor};
    cursor: not-allowed;
  }
`;

export const StyledButtonLinkOld = StyledButtonOld.withComponent(`a`).extend`
  text-decoration: none;
`;
