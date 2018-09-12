import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Menu from "../Icons/Menu";
import { SearchIconDeprecated as Search } from "../Icons";
import User from "../Icons/User";
import colors from "../../theme/colors";
import spacing from "../../theme/spacing";
import typography from "../../theme/typography";
import { mediumAndUp, smallAndUp } from "../../theme/mediaQueries";
import getRelByTarget from "../../utils/link";

const BaseButton = styled.button`
  display: flex;
  align-items: center;
  flex: 0 1 auto;
  background-color: transparent;
  text-decoration: none;
  border: 0;
  height: 60px;
  outline: 0;
  appearance: none;
  padding-right: ${({ isLast }) =>
    isLast ? spacing.gutters.small : spacing.gutters.small / 2}px;
  padding-left: ${({ isFirst }) =>
    isFirst ? spacing.gutters.small : spacing.gutters.small / 2}px;
  color: ${colors.white.base};
  font-size: ${typography.size.kilo};
  font-weight: ${typography.weight.semiBold};
  .nav--inverted & {
    color: ${colors.onyx.base};
    font-weight: ${typography.weight.regular};
  }

  ${smallAndUp`
    padding-right: ${({ isLast }) =>
      isLast
        ? spacing.gutters.mediumAndUp
        : parseInt(spacing.normal, 10) / 2}px;
    padding-left: ${({ isFirst }) =>
      isFirst
        ? spacing.gutters.mediumAndUp
        : parseInt(spacing.normal, 10) / 2}px;
  `};
`;

const Anchor = BaseButton.withComponent("a");

const Button = ({ children, href, target, rel, ...props }) => {
  if (href) {
    return (
      <Anchor
        {...props}
        href={href}
        target={target}
        rel={getRelByTarget(target, rel)}
      >
        {children}
      </Anchor>
    );
  }

  return (
    <BaseButton type="button" {...props}>
      {children}
    </BaseButton>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool
};

Button.defaultProps = {
  children: null,
  href: null,
  isFirst: false,
  isLast: false,
  target: "_self",
  rel: null
};

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
