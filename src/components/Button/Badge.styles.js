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

export const GenericButton = styled.button`
  height: ${HEIGHT};
  width: 100%;
  min-width: 100px;

  font-weight: ${typography.weight.semiBold};
  text-align: center;
  border-radius: ${constants.borderRadius.small};
  color: ${({ variant }) => VARIANTS[variant].color};
  background-color: ${({ variant }) => VARIANTS[variant].backgroundColor};
  border: 1px solid ${({ variant }) => VARIANTS[variant].borderColor};
  cursor: pointer;
  text-transform: capitalize;

  &:disabled {
    color: ${({ variant }) => VARIANTS[`${variant}Disabled`].color};
    background-color: ${({ variant }) =>
      VARIANTS[`${variant}Disabled`].backgroundColor};
    border: 1px solid
      ${({ variant }) => VARIANTS[`${variant}Disabled`].borderColor};
    cursor: not-allowed;
  }
`;

const StyledBadge = GenericButton.extend`
  font-size: ${typography.size.uno};
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: center;
  max-width: 45px;
  min-width: 45px;
  height: 20px;
`;

export default StyledBadge;
