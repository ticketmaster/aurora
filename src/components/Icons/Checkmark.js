import React from "react";
import PropTypes from "prop-types";
import { themes } from "../../theme";

const Checkmark = ({ size, color, children, stroke, ...props }) => (
  <svg
    {...props}
    viewBox="0 0 24 28"
    width={size}
    height={size}
    stroke={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={3}
    fill="none"
    fillRule="evenodd"
  >
    {children}
    <path d="M5.215 12.219l4.437 4.439 9.514-9.433" />
  </svg>
);

Checkmark.displayName = "Checkmark";

Checkmark.defaultProps = {
  size: 24,
  color: "currentcolor",
  children: null,
  stroke: themes.global.primary.base
};

Checkmark.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  children: PropTypes.node,
  stroke: PropTypes.string
};

export default Checkmark;
