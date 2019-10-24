import React from "react";
import { PropTypes } from "prop-types";
import { smallLarge } from "./iconConstants";
import { themes } from "../../theme";

const closeIcons = {
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
          d="M2.47 2.47a.75.75 0 0 1 1.06 0l4.718 4.718 4.718-4.718a.75.75 0 0 1 .976-.073l.085.073a.75.75 0 0 1 0 1.06L9.308 8.25l4.719 4.72a.75.75 0 0 1 .072.976l-.072.085a.75.75 0 0 1-1.061 0L8.248 9.31l-4.718 4.72a.75.75 0 0 1-.976.072l-.084-.072a.75.75 0 0 1 0-1.061l4.717-4.72L2.47 3.53a.75.75 0 0 1-.073-.976z"
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
          d="M3.214 3.213a.73.73 0 0 1 1.031 0l7.752 7.758 7.753-7.757a.73.73 0 0 1 .95-.071l.08.07a.73.73 0 0 1 .001 1.032l-7.753 7.758 7.753 7.759a.73.73 0 0 1 .07.95l-.07.081a.73.73 0 0 1-1.031 0l-7.753-7.759-7.752 7.759a.73.73 0 0 1-.95.07l-.081-.07a.73.73 0 0 1 0-1.031l7.752-7.759-7.753-7.758a.73.73 0 0 1-.07-.95z"
        />
      </g>
    </svg>
  )
};

const CloseIcon = ({ size, color, children, ...props }) =>
  closeIcons[size](color, children, props);

CloseIcon.displayName = "CloseIcon";

CloseIcon.defaultProps = {
  size: smallLarge[0],
  children: null,
  color: themes.global.gray01
};

CloseIcon.propTypes = {
  size: PropTypes.oneOf(smallLarge),
  children: PropTypes.node,
  color: PropTypes.string
};

export default CloseIcon;
