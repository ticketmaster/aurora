import React from "react";
import { PropTypes } from "prop-types";

import { themes } from "../../theme";
import { SIZES_SL } from "../constants";

const playCircularIcons = {
  small: ({ children, circleColor, arrowColor, ...props }) => (
    <svg
      className="icon--play-circular icon--play-circular-small"
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
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
  ),
  large: ({ children, circleColor, arrowColor, ...props }) => (
    <svg
      className="icon--play-circular icon--play-circular-large"
      xmlns="http://www.w3.org/2000/svg"
      width="120"
      height="120"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path d="M10 10h100v100H10z" />
        <circle
          cx="60"
          cy="60"
          r="47.917"
          fill={circleColor}
          fillOpacity=".1"
          stroke={arrowColor}
          strokeWidth="4.167"
        />
        <path
          fill={arrowColor}
          stroke={arrowColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4.167"
          d="M49.583 41.25L78.75 60 49.583 78.75z"
        />
      </g>
      {children}
    </svg>
  )
};

const PlayCircularIcon = ({ size, ...rest }) => playCircularIcons[size](rest);

PlayCircularIcon.displayName = "PlayCircularIcon";

PlayCircularIcon.propTypes = {
  children: PropTypes.node,
  circleColor: PropTypes.string,
  arrowColor: PropTypes.string,
  size: PropTypes.oneOf(SIZES_SL)
};

PlayCircularIcon.defaultProps = {
  children: null,
  circleColor: themes.global.dark.base,
  arrowColor: themes.global.white.base,
  size: "small"
};

export default PlayCircularIcon;
