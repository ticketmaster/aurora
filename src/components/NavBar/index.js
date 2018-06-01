import React, { Children } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Menu from "../Icons/Menu";
import colors from "../../theme/colors";
import spacing from "../../theme/spacing";
import typography from "../../theme/typography";
import constants from "../../theme/constants";
import { mediumAndUp, largeAndUp } from "../../theme/mediaQueries";

const Nav = styled.header.attrs({
  className: props => (props.invert ? "inverted" : "")
})`
  position: ${props => (props.fixed ? "fixed" : "relative")};
  top: 0;
  left: 0;
  right: 0;
  min-height: 60px;
  max-height: 60px;
  width: 100%;
  font-size: ${typography.size.kilo};
  background-color: transparent;
  color: ${colors.white.base};
  font-weight: ${typography.weight.semiBold};
  transition-property: background-color, color, font-weight;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;

  & .linkItem:visited {
    color: ${colors.white.base};
  }

  &.inverted {
    background-color: ${colors.white.base};
    color: ${colors.onyx.base};
    font-weight: ${typography.weight.regular};
    .linkItem:visited {
      color: ${colors.onyx.base};
    }
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 60px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  ${largeAndUp`
    margin: 0 auto;
  `};
`;

const Right = styled.div`
  display: flex;
  flex: 0 1 auto;
  width: 100%;
  max-width: 100%;
  justify-content: flex-end;
  ${largeAndUp`width: 50%;`};
`;

const Btn = styled.button`
  flex: 0 1 auto;
  background-color: transparent;
  text-decoration: none;
  border: 0;
  padding-top: 22px;
  padding-right: ${({ isLast }) =>
    isLast ? spacing.gutters.small : parseInt(spacing.normal, 10) / 2}px;
  padding-bottom: 21px;
  padding-left: ${({ isFirst }) =>
    isFirst ? spacing.gutters.small : parseInt(spacing.normal, 10) / 2}px;

  ${mediumAndUp`
    display: ${({ isSmallOnly }) => (isSmallOnly ? "none" : "block")}
    padding-top: 22px;
    padding-right: ${({ isLast }) =>
      isLast
        ? spacing.gutters.mediumAndUp
        : parseInt(spacing.normal, 10) / 2}px;
    padding-bottom: 21px;
    padding-left: ${({ isFirst }) =>
      isFirst
        ? spacing.gutters.mediumAndUp
        : parseInt(spacing.normal, 10) / 2}px;
  `};
`;

const Anchor = Btn.withComponent("a");

const Button = ({ children, invert, href, ...props }) => {
  const color = invert ? colors.azure.base : colors.white.base;
  if (href) {
    const { target } = props;
    const rel = (target === "_blank" && "noopener") || undefined;

    return (
      <Anchor href={href} rel={rel} {...props}>
        {children && children({ color })}
      </Anchor>
    );
  }

  return (
    <Btn type="button" {...props}>
      {children && children({ color })}
    </Btn>
  );
};

Button.propTypes = {
  children: PropTypes.func,
  href: PropTypes.string,
  invert: PropTypes.bool,
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool,
  target: PropTypes.string
};

Button.defaultProps = {
  children: null,
  href: null,
  invert: false,
  isFirst: false,
  isLast: false,
  target: ""
};

const H = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 1em;
`;

const LogoBtn = styled(Button)`
  padding-top: 18px !important;
  padding-bottom: 18px !important;
  ${largeAndUp`
    padding-left: ${spacing.gutters.mediumAndUp}px !important;
  `};
`;

const LogoContainer = ({ children, href, isHeading, ...props }) => (
  <LogoBtn href={href} {...props}>
    {isHeading ? (...args) => <H>{children && children(...args)}</H> : children}
  </LogoBtn>
);

LogoContainer.propTypes = {
  children: PropTypes.func,
  href: PropTypes.string,
  isHeading: PropTypes.bool
};

LogoContainer.defaultProps = {
  children: () => null,
  href: null,
  isHeading: false
};

const MobileButton = Btn.extend`
  ${largeAndUp`display: none`};
`;

const MenuButton = ({ children, invert, ...props }) => (
  <MobileButton isFirst {...props}>
    <Menu size={17} color={invert ? colors.azure.base : colors.white.base} />
    {children}
  </MobileButton>
);

MenuButton.propTypes = {
  children: PropTypes.node,
  invert: PropTypes.bool
};

MenuButton.defaultProps = {
  children: null,
  invert: false
};

const LinkRow = styled.nav`
  display: none;
  height: 60px;
  width: 100%;
  ${largeAndUp`
    display: inline-block;
  `};
`;

const LinkList = styled.nav.attrs({ className: "linkList" })`
  display: none;
  background-color: ${colors.white.base};
  color: ${colors.onyx.base};
  font-weight: ${typography.weight.regular};
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.12);
  border-radius: ${constants.borderRadius.large};
  overflow: hidden;
`;

const LinkContainer = styled.span.attrs({ className: "linkContainer" })`
  ${largeAndUp`
    position: relative;
    &:hover .linkList {
      display: block;
      position: absolute;
      left: 0;
      top: 41px;

      .linkItem {
        display: block;
        padding-top: 8px;
        padding-bottom: 8px;
      }
    }
  `};
`;

const StyledLink = styled.a.attrs({ className: "linkItem" })`
  display: inline-block;
  text-decoration: none;
  padding: 19px ${spacing.gutters.small}px 19px ${spacing.gutters.small}px;
  ${mediumAndUp`
    &:hover {
      background-color: rgba(38, 38, 38, 0.1);
    }
    .inverted &:hover {
      background-color: ${colors.shale};
    }
  `};
`;

const Link = ({ children, ...props }) => {
  const [label, ...other] = Children.toArray(children);
  return (
    <LinkContainer>
      <StyledLink {...props}>{label}</StyledLink>
      {other}
    </LinkContainer>
  );
};

Link.propTypes = {
  children: PropTypes.node
};

Link.defaultProps = {
  children: null
};

const NavBar = ({ children, fixed, invert, ...props }) => (
  <Nav {...props} fixed={fixed} invert={invert}>
    <Container>{children}</Container>
  </Nav>
);

NavBar.propTypes = {
  children: PropTypes.node,
  fixed: PropTypes.bool,
  invert: PropTypes.bool
};

NavBar.defaultProps = {
  children: null,
  fixed: false,
  invert: false
};

NavBar.MenuButton = MenuButton;
NavBar.Button = Button;
NavBar.LinkRow = LinkRow;
NavBar.LinkList = LinkList;
NavBar.Link = Link;
NavBar.Right = Right;
NavBar.LogoContainer = LogoContainer;

export default NavBar;
