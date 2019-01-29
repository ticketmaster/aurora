import React from "react";
import { PropTypes } from "prop-types";
import { themes } from "../../theme";

const MinusIcon = ({ children, color, ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
  >
    {children}
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g fillRule="nonzero">
        <rect x="0" y="0" width="24" height="24" />
        <path
          fill={color}
          {...color !== "currentColor" && { fillOpacity: ".65" }}
          fillRule="nonzero"
          d="M4,12.5 C3.72385763,12.5 3.5,12.2761424 3.5,12 C3.5,11.7238576 3.72385763,11.5 4,11.5 L20,11.5 C20.2761424,11.5 20.5,11.7238576 20.5,12 C20.5,12.2761424 20.2761424,12.5 20,12.5 L4,12.5 Z"
        />
      </g>
    </g>
  </svg>
);

MinusIcon.displayName = "MinusIcon";

MinusIcon.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string
};

MinusIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

export default MinusIcon;
