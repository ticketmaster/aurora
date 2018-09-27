import React from "react";
import PropTypes from "prop-types";

import colors from "../../theme/colors";

const AppleIcon = ({ size, children, ...props }) => (
  <svg
    {...props}
    viewBox="0 0 13 16"
    width={size}
    height={size}
    fill={colors.white.base}
  >
    {children}
    <path d="M10.41 8.703c-.018-1.969 1.584-2.927 1.658-2.972-.908-1.346-2.315-1.53-2.809-1.544-1.18-.127-2.326.72-2.928.72-.614 0-1.54-.708-2.538-.687-1.285.02-2.488.778-3.147 1.953-1.36 2.396-.345 5.918.957 7.855.653.949 1.414 2.009 2.412 1.971.976-.04 1.34-.633 2.518-.633 1.167 0 1.509.633 2.526.61 1.047-.018 1.706-.954 2.336-1.912.753-1.087 1.056-2.158 1.068-2.213-.025-.008-2.034-.788-2.053-3.148M9.49 2.415c.587-.646.988-1.523.877-2.415-.85.033-1.911.517-2.523 1.148-.542.556-1.025 1.468-.9 2.325.954.063 1.934-.424 2.546-1.058" />
  </svg>
);

AppleIcon.displayName = "AppleIcon";

AppleIcon.defaultProps = {
  children: null
};

AppleIcon.propTypes = {
  size: PropTypes.number.isRequired,
  children: PropTypes.node
};

export default AppleIcon;
