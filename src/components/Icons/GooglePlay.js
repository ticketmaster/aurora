import React from "react";
import PropTypes from "prop-types";

const GooglePlayIcon = ({ size, ...props }) => (
  <svg {...props} viewBox="0 0 48 48" width={size} height={size}>
    <g id="surface1">
      <path
        fill="#4DB6AC"
        d="M 7.703125 4.042969 C 7.292969 4.148438 7 4.507813 7 5.121094 C 7 6.921875 7 23.914063 7 23.914063 C 7 23.914063 7 42.28125 7 43.089844 C 7 43.535156 7.195313 43.835938 7.5 43.945313 L 27.679688 23.882813 Z "
      />
      <path
        fill="#DCE775"
        d="M 33.238281 18.359375 L 24.929688 13.5625 C 24.929688 13.5625 9.683594 4.761719 8.789063 4.242188 C 8.402344 4.019531 8.019531 3.960938 7.703125 4.042969 L 27.683594 23.882813 Z "
      />
      <path
        fill="#D32F2F"
        d="M 8.417969 43.800781 C 8.949219 43.492188 23.699219 34.976563 33.28125 29.445313 L 27.679688 23.882813 L 7.5 43.945313 C 7.746094 44.039063 8.066406 44.003906 8.417969 43.800781 Z "
      />
      <path
        fill="#FBC02D"
        d="M 41.398438 23.070313 C 40.601563 22.640625 33.296875 18.394531 33.296875 18.394531 L 33.238281 18.359375 L 27.679688 23.882813 L 33.28125 29.445313 C 37.714844 26.886719 41.042969 24.964844 41.339844 24.792969 C 42.285156 24.246094 42.195313 23.5 41.398438 23.070313 Z "
      />
    </g>
  </svg>
);

GooglePlayIcon.displayName = "GooglePlayIcon";

GooglePlayIcon.defaultProps = {
  children: null
};

GooglePlayIcon.propTypes = {
  size: PropTypes.number.isRequired,
  children: PropTypes.node
};

export default GooglePlayIcon;
