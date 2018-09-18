import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Button from "./ButtonBase";
import Menu from "../Icons/Menu";
import Search from "../Icons/Search";
import User from "../Icons/User";
import spacing from "../../theme/spacing";
import { mediumAndUp, smallAndUp } from "../../theme/mediaQueries";

const LogoBtn = styled(Button)`
  padding-left: ${spacing.gutters.small / 2}px;
  padding-right: ${spacing.gutters.small / 2}px;

  ${smallAndUp`
    padding-left: ${spacing.gutters.mediumAndUp / 2}px;
    padding-right: ${spacing.gutters.mediumAndUp / 2}px;
  `} ${mediumAndUp`
    padding-left: ${spacing.gutters.mediumAndUp}px;
  `};
`;

const LogoContainer = ({ children, href, ...props }) => (
  <LogoBtn href={href} {...props}>
    {children}
  </LogoBtn>
);

LogoContainer.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string
};

LogoContainer.defaultProps = {
  children: null,
  href: null
};

const MenuButton = ({ children, ...props }) => (
  <Button isFirst {...props}>
    <Menu size={20} />
    {children}
  </Button>
);

MenuButton.propTypes = {
  children: PropTypes.node
};

MenuButton.defaultProps = {
  children: null
};

const SearchButton = ({ children, ...props }) => (
  <Button {...props}>
    <Search size={21} />
    {children}
  </Button>
);

SearchButton.propTypes = {
  children: PropTypes.node
};

SearchButton.defaultProps = {
  children: null
};

const UserButton = ({ children, ...props }) => (
  <Button {...props}>
    <User size={24} />
    {children}
  </Button>
);

UserButton.propTypes = {
  children: PropTypes.node
};

UserButton.defaultProps = {
  children: null
};

const TextButton = ({ children, ...props }) => (
  <Button {...props}>{children}</Button>
);

TextButton.propTypes = {
  children: PropTypes.node
};

TextButton.defaultProps = {
  children: null
};

export default {
  Button,
  LogoContainer,
  MenuButton,
  SearchButton,
  UserButton,
  TextButton
};
