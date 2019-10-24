import React from "react";
import { PropTypes } from "prop-types";
import { xSmallLarge } from "./iconConstants";
import { themes } from "../../theme";

const upIcons = {
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
          d="M2.554 9.305a.75.75 0 1 1-1.066-1.056l3.986-4.023a.75.75 0 0 1 1.065 0l3.973 4.01a.75.75 0 0 1-1.066 1.056l-3.44-3.473-3.452 3.486z"
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
        <path d="M16 0H0v16h16z" />
        <path
          fill={color}
          {...color !== "currentColor" && { fillOpacity: ".65" }}
          fillRule="nonzero"
          d="M3.278 11.559a.75.75 0 0 1-1.057-1.063l5.263-5.24a.75.75 0 0 1 1.059.001l5.238 5.24a.75.75 0 0 1-1.06 1.06L8.01 6.846l-4.733 4.713z"
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
        <path d="M23.8 1.133h-24v24h24z" />
        <path
          fill={color}
          {...color !== "currentColor" && { fillOpacity: ".65" }}
          fillRule="nonzero"
          d="M20.525 17.919a.75.75 0 1 0 1.013-1.107l-9.252-8.47a.75.75 0 0 0-1.013 0l-9.243 8.47a.75.75 0 1 0 1.014 1.107l8.736-8.007 8.745 8.007z"
        />
      </g>
    </svg>
  )
};

const UpIcon = ({ size, color, children, ...props }) =>
  upIcons[size](color, children, props);

UpIcon.displayName = "UpIcon";

UpIcon.defaultProps = {
  size: xSmallLarge[1],
  children: null,
  color: themes.global.gray01
};

UpIcon.propTypes = {
  size: PropTypes.oneOf(xSmallLarge),
  children: PropTypes.node,
  color: PropTypes.string
};

export default UpIcon;
