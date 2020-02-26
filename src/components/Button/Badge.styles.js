import styled from "styled-components";
import { typography, colors, themes, constants } from "../../theme";

const HEIGHT = "36px";
const VARIANTS = {
  standard: {
    color: themes.global.white.base,
    backgroundColor: themes.global.primary.base,
    borderColor: themes.global.primary.base
  },
  standardDisabled: {
    color: themes.global.white.base,
    backgroundColor: colors.azure.light,
    borderColor: colors.azure.light
  },
  outline: {
    color: themes.global.primary.base,
    backgroundColor: themes.global.white.base,
    borderColor: themes.global.primary.base
  },
  outlineDisabled: {
    color: colors.azure.light,
    backgroundColor: themes.global.white.base,
    borderColor: colors.azure.light
  },
  transparent: {
    color: themes.global.white.base,
    backgroundColor: "transparent",
    borderColor: themes.global.white.base
  },
  transparentDisabled: {
    color: themes.global.white.muted,
    backgroundColor: "transparent",
    borderColor: themes.global.white.muted
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

  &:disabled {
    color: ${({ variant }) => VARIANTS[`${variant}Disabled`].color};
    background-color: ${({ variant }) =>
      VARIANTS[`${variant}Disabled`].backgroundColor};
    border: 1px solid
      ${({ variant }) => VARIANTS[`${variant}Disabled`].borderColor};
    cursor: not-allowed;
  }
`;

const StyledBadge = styled(GenericButton)`
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
