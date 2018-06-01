import React from "react";
import PropTypes from "prop-types";

const MenuIcon = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 20 17" width={size} height={size} fill={color}>
    <title>Menu Icon</title>
    <path d="M 0 0 H 20 V 3 H 0 z M 0 7 H 20 V 10 H 0 z M 0 14 H 20 V 17 H 0 z" />
  </svg>
);

MenuIcon.displayName = "MenuIcon";

MenuIcon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
};

MenuIcon.defaultProps = {
  size: 24,
  color: "currentcolor"
};

export default MenuIcon;
