import React from "react";
import { PropTypes } from "prop-types";
import { xSmallLarge } from "./iconConstants";
import { themes } from "../../theme";

const downIcons = {
  xSmall: (color, children, props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
    >
      {children}
      <g fill="none" fillRule="evenodd">
        <rect width="12" height="12" rx="1" />
        <path
          fill={color}
          {...color !== "currentColor" && { fillOpacity: ".65" }}
          fillRule="nonzero"
          d="M2.554 3.703a.75.75 0 1 0-1.066 1.056l3.986 4.023a.75.75 0 0 0 1.065 0l3.973-4.01a.75.75 0 0 0-1.066-1.056l-3.44 3.472-3.452-3.485z"
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
          d="M3.278 5.459A.75.75 0 0 0 2.221 6.52l5.263 5.24a.75.75 0 0 0 1.059 0L13.78 6.52a.75.75 0 0 0-1.06-1.06l-4.71 4.711L3.278 5.46z"
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
          d="M3.244 7.197a.75.75 0 1 0-1.013 1.106l9.252 8.47a.75.75 0 0 0 1.013 0l9.243-8.47a.75.75 0 1 0-1.013-1.106l-8.737 8.006-8.745-8.006z"
        />
      </g>
    </svg>
  )
};

const DownIcon = ({ size, color, children, ...props }) =>
  downIcons[size](color, children, props);

DownIcon.displayName = "DownIcon";

DownIcon.defaultProps = {
  size: xSmallLarge[1],
  children: null,
  color: themes.global.gray01
};

DownIcon.propTypes = {
  size: PropTypes.oneOf(xSmallLarge),
  children: PropTypes.node,
  color: PropTypes.string
};

export default DownIcon;
