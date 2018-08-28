import React from "react";
import { PropTypes } from "prop-types";

const YoutubeIcon = ({ size, color, children, ...props }) => (
  <svg {...props} viewBox="0 0 17 12" width={size} height={size} fill={color}>
    {children}
    <path d="M6.761 8.464V3.44l4.444 2.512L6.76 8.464zm9.884-6.605A2.13 2.13 0 0 0 15.142.355C13.816 0 8.5 0 8.5 0S3.184 0 1.858.355A2.13 2.13 0 0 0 .355 1.86C0 3.185 0 5.952 0 5.952s0 2.767.355 4.093a2.13 2.13 0 0 0 1.503 1.504c1.326.355 6.642.355 6.642.355s5.316 0 6.642-.355a2.13 2.13 0 0 0 1.503-1.504C17 8.72 17 5.952 17 5.952s0-2.767-.355-4.093z" />
  </svg>
);

YoutubeIcon.displayName = "YoutubeIcon";

YoutubeIcon.defaultProps = {
  color: "currentcolor",
  children: null
};

YoutubeIcon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string,
  children: PropTypes.node
};

export default YoutubeIcon;
