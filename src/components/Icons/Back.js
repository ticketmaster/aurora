import React from "react";
import { PropTypes } from "prop-types";
import { xSmallLarge } from "./iconConstants";
import { themes } from "../../theme";

const backIcons = {
  xSmall: (color, children, props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
    >
      {children}
      <g fill="none" fillRule="evenodd" transform="translate(-.2 -.867)">
        <rect width="12" height="12" y="1" rx="1" />
        <path
          fill={color}
          {...color !== "currentColor" && { fillOpacity: ".65" }}
          fillRule="nonzero"
          d="M8.301 10.453a.75.75 0 1 1-1.056 1.065L3.222 7.533a.75.75 0 0 1 0-1.066l4.01-3.972A.75.75 0 0 1 8.288 3.56L4.816 7 8.3 10.453z"
        />
      </g>
    </svg>
  ),
  small: (color, children, props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      {children}
      <g fill="none" fillRule="evenodd">
        <path d="M15.8.133h-16v16h16z" />
        <path
          fill={color}
          {...color !== "currentColor" && { fillOpacity: ".65" }}
          fillRule="nonzero"
          d="M10.32 12.857a.75.75 0 0 1-1.062 1.057l-5.24-5.263a.75.75 0 0 1 0-1.059L9.26 2.354a.75.75 0 0 1 1.06 1.06l-4.711 4.71 4.712 4.733z"
        />
      </g>
    </svg>
  ),
  large: (color, children, props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      {children}
      <g fill="none" fillRule="evenodd">
        <path d="M24 0H0v24h24z" />
        <path
          fill={color}
          {...color !== "currentColor" && { fillOpacity: ".65" }}
          fillRule="nonzero"
          d="M10.773 20.738a.75.75 0 0 1-1.106 1.013L1.197 12.5a.75.75 0 0 1 0-1.013l8.47-9.243a.75.75 0 1 1 1.106 1.014l-8.006 8.736 8.006 8.745z"
        />
      </g>
    </svg>
  )
};

const BackIcon = ({ size, color, children, ...props }) =>
  backIcons[size](color, children, props);

BackIcon.displayName = "BackIcon";

BackIcon.defaultProps = {
  size: xSmallLarge[1],
  children: null,
  color: themes.global.gray01
};

BackIcon.propTypes = {
  size: PropTypes.oneOf(xSmallLarge),
  children: PropTypes.node,
  color: PropTypes.string
};

export default BackIcon;
