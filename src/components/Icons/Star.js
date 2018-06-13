import React from "react";
import { PropTypes } from "prop-types";

const StarIcon = ({ size, color, children, ...props }) => (
  <svg {...props} viewBox="0 0 11 10" width={size} height={size} fill={color}>
    {children}
    <path
      fillRule="evenodd"
      d="M5.5 7.7L2.267 9.95l1.14-3.77L.27 3.8l3.938-.08L5.5 0l1.293 3.72 3.938.08-3.139 2.38 1.14 3.77z"
    />
  </svg>
);

StarIcon.displayName = "StarIcon";

StarIcon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string,
  children: PropTypes.node
};

StarIcon.defaultProps = {
  children: null,
  color: "currentColor"
};

export default StarIcon;
