import React from "react";
import PropTypes from "prop-types";
import { smallLarge } from "./iconConstants";
import { themes } from "../../theme";

const navigationArrowIcons = {
  small: (color, fillCircle, fillArrow, children, props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      {...props}
    >
      {children}
      <g>
        <circle
          fill={fillCircle}
          stroke={color}
          {...color !== "currentColor" && { strokeOpacity: ".5" }}
          cx="8"
          cy="8"
          r="7.5"
        />
        <path
          fill={fillArrow}
          strokeLinecap="round"
          stroke={color}
          {...color !== "currentColor" && { strokeOpacity: ".5" }}
          strokeLinejoin="round"
          d="M 5.154 8.673 L 11.812 4.263 L 7.949 11.375 L 7.841 8.637 L 5.154 8.673 Z"
        />
      </g>
    </svg>
  ),
  large: (color, fillCircle, fillArrow, children, props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
    >
      {children}
      <g>
        <circle
          fill={fillCircle}
          stroke={color}
          {...color !== "currentColor" && { strokeOpacity: ".5" }}
          cx="12"
          cy="12"
          r="11.5"
        />
        <path
          fill={fillArrow}
          strokeLinecap="round"
          stroke={color}
          {...color !== "currentColor" && { strokeOpacity: ".5" }}
          strokeLinejoin="round"
          d="M 7.612 12.735 L 17.878 5.935 L 11.922 16.902 L 11.755 12.68 L 7.612 12.735 Z"
        />
      </g>
    </svg>
  )
};

const NavigationArrowIcon = ({
  size,
  color,
  children,
  fillCircle,
  fillArrow,
  ...props
}) => navigationArrowIcons[size](color, fillCircle, fillArrow, children, props);

NavigationArrowIcon.displayName = "NavigationArrowIcon";

NavigationArrowIcon.defaultProps = {
  size: smallLarge[0],
  color: themes.global.gray01,
  fillCircle: "none",
  fillArrow: "none",
  children: null
};

NavigationArrowIcon.propTypes = {
  size: PropTypes.oneOf(smallLarge),
  color: PropTypes.string,
  fillCircle: PropTypes.string,
  fillArrow: PropTypes.string,
  children: PropTypes.node
};

export default NavigationArrowIcon;
