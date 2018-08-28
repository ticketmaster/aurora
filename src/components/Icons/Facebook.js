import React from "react";
import { PropTypes } from "prop-types";

const FacebookIcon = ({ size, color, children, ...props }) => (
  <svg {...props} viewBox="0 0 7 14" width={size} height={size} fill={color}>
    {children}
    <path d="M6.418 4.38H4.232V2.978c0-.528.357-.65.608-.65h1.543V.007L4.258 0C1.9 0 1.364 1.73 1.364 2.836V4.38H0V6.77h1.364v6.76h2.868V6.77h1.936l.25-2.39z" />
  </svg>
);

FacebookIcon.displayName = "FacebookIcon";

FacebookIcon.defaultProps = {
  color: "currentcolor",
  children: null
};

FacebookIcon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string,
  children: PropTypes.node
};

export default FacebookIcon;
