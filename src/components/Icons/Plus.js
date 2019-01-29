import React from "react";
import { PropTypes } from "prop-types";
import { themes } from "../../theme";

const PlusIcon = ({ children, color, ...props }) => (
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
          d="M4,12 L20,12"
          fill={color}
          {...color !== "currentColor" && { fillOpacity: ".65" }}
          fillRule="nonzero"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12,4 L12,20"
          fill={color}
          {...color !== "currentColor" && { fillOpacity: ".65" }}
          fillRule="nonzero"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);

PlusIcon.displayName = "PlusIcon";

PlusIcon.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string
};

PlusIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

export default PlusIcon;
