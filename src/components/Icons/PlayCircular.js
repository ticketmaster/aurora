import React from "react";
import { PropTypes } from "prop-types";
import { themes } from "../../theme";

const PlayCircularIcon = ({
  children,
  circleColor,
  arrowColor,
  size,
  ...props
}) => (
  <svg
    className="icon--play-circular"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    {...props}
  >
    <g fill="none" fillRule="evenodd">
      <path d="M1 1h46v46H1z" />
      <circle
        cx="24"
        cy="24"
        r="22.042"
        fill={circleColor}
        fillOpacity=".1"
        stroke={arrowColor}
        strokeWidth="1.917"
      />
      <path
        fill={arrowColor}
        stroke={arrowColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.917"
        d="M19.208 15.375L32.625 24l-13.417 8.625z"
      />
    </g>
    {children}
  </svg>
);

PlayCircularIcon.displayName = "PlayCircularIcon";

PlayCircularIcon.propTypes = {
  children: PropTypes.node,
  circleColor: PropTypes.string,
  arrowColor: PropTypes.string,
  size: PropTypes.number
};

PlayCircularIcon.defaultProps = {
  children: null,
  circleColor: themes.global.dark.base,
  arrowColor: themes.global.white.base,
  size: 48
};

export default PlayCircularIcon;
