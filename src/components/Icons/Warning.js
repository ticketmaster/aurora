import React from "react";
import PropTypes from "prop-types";

const WarningIcon = ({ size, children, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 36 36" {...props}>
    {children}
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h36v36H0z" />
      <path
        fill="#F2BD2A"
        d="M1.38 32.54L16.652 2.992a1 1 0 0 1 1.766-.02L34.59 32.52a1 1 0 0 1-.877 1.48H2.268a1 1 0 0 1-.889-1.46z"
      />
      <circle cx="17.5" cy="29.5" r="1.5" fill="#FFF" />
      <path
        fill="#FFF"
        d="M17.5 25a1.5 1.5 0 0 0 1.5-1.5v-10a1.5 1.5 0 0 0-3 0v10a1.5 1.5 0 0 0 1.5 1.5z"
      />
    </g>
  </svg>
);

WarningIcon.defaultProps = {
  children: null
};

WarningIcon.propTypes = {
  size: PropTypes.number.isRequired,
  children: PropTypes.node
};

export default WarningIcon;
