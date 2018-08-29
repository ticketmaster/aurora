import React from "react";
import PropTypes from "prop-types";

const Checkmark = ({ size, color, children, ...props }) => (
  <svg
    {...props}
    viewBox="0 0 24 28"
    width={size}
    height={size}
    stroke="#026CDF"
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
  children: null
};

Checkmark.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  children: PropTypes.node
};

export default Checkmark;
