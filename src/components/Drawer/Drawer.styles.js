import styled from "styled-components";

import constants from "../../theme/constants";
import spacing from "../../theme/spacing";
import getThemeValue from "../../utils/getThemeValue";

export const DrawerContainer = styled.div`
  background-color: ${getThemeValue("onyx", "base")};
  color: ${getThemeValue("white", "base")};
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  visibility: hidden;
  transform: translateY(-100%);
  opacity: 0;
  transition: opacity 0.3ms ${constants.easing.easeInOutQuad};
  overflow: hidden;
  z-index: -1;

  &.drawer__content--open {
    transform: translateY(0);
    visibility: visible;
    opacity: 1;
  }
`;

export const DrawerContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  overflow-x: hidden;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding-left: ${spacing.moderate};
`;

export const CloseButton = styled.button`
  appearance: none;
  cursor: pointer;
  border: 0;
  outline: 0;
  background: transparent;
  display: flex;
  align-items: center;
  height: 60px;
  padding: 0 ${spacing.moderate};
`;

export const ContentWrapper = styled.div`
  &.drawer--open {
    overflow: hidden;
  }
`;
