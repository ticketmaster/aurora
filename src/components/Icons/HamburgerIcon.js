import React from "react";
import styled from "styled-components";

import constants from "../../theme/constants";
import getThemeValue from "../../utils/getThemeValue";

const HamburgerContent = styled.span`
  border-radius: ${constants.borderRadius.small};
  overflow: hidden;
  height: 3px;
  background-color: ${getThemeValue("white", "base")};
  width: 100%;
  display: block;
  transition: all 300ms ${constants.easing.easeInOutQuad};

  &:before,
  &:after {
    content: "";
    border-radius: ${constants.borderRadius.small};
    height: 3px;
    background-color: ${getThemeValue("white", "base")};
    width: 100%;
    display: block;
    position: absolute;
    transform: rotate(0deg);
    transform-origin: right center;
    transition: transform 300ms ${constants.easing.easeInOutQuad},
      background-color 300ms ${constants.easing.easeInOutQuad};
  }

  &:before {
    top: 0;
    left: 0;
  }

  &:after {
    bottom: 0;
    left: 0;
  }

  .nav--inverted & {
    background-color: ${getThemeValue("onyx", "base")};

    &:before,
    &:after {
      background-color: ${getThemeValue("onyx", "base")};
    }
  }

  .hamburger--opened & {
    background-color: transparent;
    &:before {
      transform: rotate(-45deg);
    }

    &:after {
      transform: rotate(45deg);
    }
  }
`;

const HamburgerIconWrapper = styled.span`
  height: 17px;
  width: 20px;
  position: relative;
  display: flex;
  align-items: center;
`;

const HamburgerIcon = props => (
  <HamburgerIconWrapper {...props}>
    <HamburgerContent />
  </HamburgerIconWrapper>
);

export default HamburgerIcon;
