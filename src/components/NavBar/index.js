import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import classNames from "classnames";

import colors from "../../theme/colors";
import spacing from "../../theme/spacing";
import typography from "../../theme/typography";
import { mediumAndUp, largeAndUp } from "../../theme/mediaQueries";

import Links from "./Links";
import Buttons from "./Buttons";
import Row from "../Grid/Row";
import Column from "../Grid/Column";
import GridContainer from "../Grid/Container";

const Nav = styled.nav.attrs({
  role: "navigation"
})`
  top: 0;
  left: 0;
  right: 0;
  min-height: 60px;
  width: 100%;
  font-size: ${typography.size.kilo};
  background-color: transparent;
  color: ${colors.white.base};
  font-weight: ${typography.weight.semiBold};
  transition-property: transform;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;

  &.nav--relative {
    position: relative;
  }

  &.nav--absolute {
    position: absolute;
  }

  &.nav--fixed {
    position: fixed;
    transform: translateY(0px);
  }

  & .linkItem:visited {
    color: ${colors.white.base};
  }

  &.nav--inverted {
    background-color: ${colors.white.base};
    border-bottom: 1px solid ${colors.moonstone};
    color: ${colors.onyx.base};
    font-weight: ${typography.weight.regular};
    .linkItem:visited {
      color: ${colors.onyx.base};
    }
  }

  &.nav--overlay:after {
    content: "";
    opacity: 0.4;
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    height: 60px;
    z-index: 4;
    background-image: linear-gradient(77deg, rgba(0, 0, 0, 0), #000000);
    ${mediumAndUp`
        background-image: linear-gradient(82deg, rgba(0, 0, 0, 0), #000000);
      `};

    ${largeAndUp`
      background-image: linear-gradient(86deg, rgba(0, 0, 0, 0), #000000);
      `};
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 60px;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  align-content: center;
  z-index: 5;
  ${largeAndUp`
    margin: 0 auto;
  `};
`;

const Right = styled.div`
  display: flex;
  flex: 1 0 auto;
  justify-content: flex-end;
  height: 60px;
  ${mediumAndUp`width: 23%;`};
  ${largeAndUp`width: 18%;`};
`;

const Left = styled.div`
  flex: 0 1 auto;
  width: 310px;
  min-width: 310px;
  max-width: 310px;
  align-items: center;
  height: 60px;
  display: flex;
  padding-left: ${parseInt(spacing.normal, 10) / 2}px;
  ${largeAndUp`width: 50%;`};
`;

const MessageContainer = GridContainer.extend`
  background-color: rgba(0, 0, 0, 0.2);
  text-align: center;
  font-size: ${typography.size.uno};
  font-weight: ${typography.weight.regular};
  padding-top: 2px;
  padding-bottom: 2px;
`;

const NavBar = ({
  children,
  position,
  invert,
  className,
  backgroundColor,
  style,
  message,
  ...props
}) => (
  <Nav
    {...props}
    className={classNames(
      position && `nav--${position}`,
      invert && "nav--inverted",
      !!backgroundColor && "nav--overlay",
      className
    )}
    invert={invert}
    style={{ ...style, backgroundColor }}
  >
    {message ? (
      <MessageContainer>
        <Row>
          <Column role="note">{message}</Column>
        </Row>
      </MessageContainer>
    ) : null}
    <Container>{children}</Container>
  </Nav>
);

NavBar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  position: PropTypes.oneOf(["relative", "absolute", "fixed"]),
  invert: PropTypes.bool,
  message: PropTypes.node,
  backgroundColor: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string)
};

NavBar.defaultProps = {
  className: null,
  children: null,
  position: "relative",
  invert: false,
  message: null,
  backgroundColor: null,
  style: {}
};

NavBar.MenuButton = Buttons.MenuButton;
NavBar.SearchButton = Buttons.SearchButton;
NavBar.UserButton = Buttons.UserButton;
NavBar.TextButton = Buttons.TextButton;
NavBar.LinkRow = Links.LinkRow;
NavBar.LinkList = Links.LinkList;
NavBar.Link = Links.Link;
NavBar.Right = Right;
NavBar.Left = Left;
NavBar.LogoContainer = Buttons.LogoContainer;

export default NavBar;
