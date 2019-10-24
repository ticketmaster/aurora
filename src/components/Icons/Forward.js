import React from "react";
import { PropTypes } from "prop-types";
import { xSmallLarge } from "./iconConstants";
import { themes } from "../../theme";

const forwardIcons = {
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
          d="M3.726 10.446a.75.75 0 1 0 1.055 1.066l4.024-3.986a.75.75 0 0 0 0-1.065l-4.01-3.973a.75.75 0 0 0-1.056 1.066l3.472 3.44-3.485 3.452z"
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
          d="M5.194 12.857a.75.75 0 0 0 1.063 1.057l5.24-5.263a.75.75 0 0 0-.001-1.059l-5.24-5.238a.75.75 0 1 0-1.06 1.06l4.711 4.71-4.713 4.733z"
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
          d="M13.197 20.738a.75.75 0 0 0 1.106 1.013l8.47-9.252a.75.75 0 0 0 0-1.013l-8.47-9.243a.75.75 0 1 0-1.106 1.014l8.006 8.736-8.006 8.745z"
        />
      </g>
    </svg>
  )
};

const ForwardIcon = ({ size, color, children, ...props }) =>
  forwardIcons[size](color, children, props);

ForwardIcon.displayName = "ForwardIcon";

ForwardIcon.defaultProps = {
  size: xSmallLarge[1],
  children: null,
  color: themes.global.gray01
};

ForwardIcon.propTypes = {
  size: PropTypes.oneOf(xSmallLarge),
  children: PropTypes.node,
  color: PropTypes.string
};

export default ForwardIcon;
