import styled from "styled-components";
import { colors, constants } from "../../..//theme";

export const ActiveArea = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: not-allowed;

  &.toggle--enabled {
    cursor: pointer;
  }

  &.toggle--small {
    width: 44px;
  }

  &.toggle--large {
    width: 73px;
  }

  &:focus {
    outline: none;
  }
`;

export const ReactToggleTrack = styled.div`
  padding: 0;
  border-radius: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ${constants.easing.easeInOutQuad};

  .toggle--small & {
    width: 30px;
    height: 16px;
    border: 1px solid;
  }

  .toggle--large & {
    width: 48px;
    height: 24px;
    border: 1px solid;
  }

  .toggle--active & {
    background-color: ${colors.emerald.base};
    border-color: ${colors.emerald.base};
  }

  .toggle--inactive & {
    background-color: ${colors.white.base};
    border-color: ${colors.emerald.base};
  }

  ${ActiveArea}:focus & {
    border-color: ${colors.azure.base};
    box-shadow: 0 0 5px 0 ${colors.azure.base};
  }

  .toggle--enabled:hover & {
    border: 2px solid ${colors.azure.base};
  }

  .toggle--active.toggle--disabled & {
    background-color: ${colors.emerald.restrained};
    border-color: ${colors.diatomite};
  }

  .toggle--inactive.toggle--disabled & {
    background-color: ${colors.white.muted};
    border-color: ${colors.diatomite};
  }
`;

export const ReactToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  background-color: transparent;
  border: 0;
  padding: 0;
  user-select: none;
`;

export const ReactThumbCenteringContainer = styled.div`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex: 1;
  align-self: stretch;
  align-items: center;
  justify-content: flex-start;
`;

export const ReactToggleThumb = styled.div`
  display: flex;
  align-self: center;
  border-radius: 50%;
  box-sizing: border-box;
  position: relative;
  transition: background-color 0.3s ${constants.easing.easeInOutQuad},
    left 0.3s ${constants.easing.elastic};

  .toggle--small & {
    width: 10px;
    height: 10px;
  }
  .toggle--large & {
    width: 18px;
    height: 18px;
  }

  .toggle--active & {
    background-color: ${colors.white.base};
  }

  .toggle--inactive & {
    background-color: ${colors.slate};
    left: 3px;
  }

  .toggle--active.toggle--disabled &,
  .toggle--inactive.toggle--disabled & {
    background-color: ${colors.moonstone};
  }

  .toggle--small.toggle--active & {
    left: 17px;
  }
  .toggle--large.toggle--active & {
    left: 27px;
  }
`;
