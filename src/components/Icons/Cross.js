import React from "react";
import PropTypes from "prop-types";

const CrossIcon = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 12 12" width={size} height={size} fill={color}>
    <path d="M6.563 6.203l4.523 4.516a.384.384 0 0 1 .117.281c0 .11-.039.203-.117.281a.378.378 0 0 1-.137.09.417.417 0 0 1-.297 0 .378.378 0 0 1-.136-.09L6 6.766 1.484 11.28a.378.378 0 0 1-.136.09.417.417 0 0 1-.297 0 .378.378 0 0 1-.137-.09A.384.384 0 0 1 .797 11c0-.11.039-.203.117-.281l4.524-4.516L.913 1.68a.384.384 0 0 1-.117-.282c0-.109.039-.203.117-.28A.388.388 0 0 1 1.2 1c.112 0 .207.04.285.117L6 5.633l4.516-4.516A.388.388 0 0 1 10.8 1c.112 0 .207.04.285.117a.384.384 0 0 1 .117.281c0 .11-.039.204-.117.282L6.562 6.203z" />
  </svg>
);

CrossIcon.displayName = "CrossIcon";

CrossIcon.defaultProps = {
  color: "currentColor"
};

CrossIcon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string
};

export default CrossIcon;
