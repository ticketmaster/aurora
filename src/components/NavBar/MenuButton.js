import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import Button from "./ButtonBase";
import HamburgerIcon from "../Icons/HamburgerIcon";

const MenuButton = ({ iconClassName, className, ...props }) => (
  <Button {...props} className={classNames("menu-button", className)}>
    <HamburgerIcon className={iconClassName} />
  </Button>
);

MenuButton.propTypes = {
  isLast: PropTypes.bool,
  className: PropTypes.string
};

MenuButton.defaultProps = {
  isLast: true,
  className: ""
};

export default MenuButton;
