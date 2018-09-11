import React from "react";
import { PropTypes } from "prop-types";
import { themes } from "../../theme";

const ClearIcon = ({ children, ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    {children}
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        fill={themes.global.gray01}
        fillOpacity=".5"
        fillRule="nonzero"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 1C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm3.89-15.596a.5.5 0 0 1 .706.707l-8.485 8.485a.5.5 0 0 1-.707-.707l8.485-8.485zm-8.486.707a.5.5 0 0 1 .707-.707l8.485 8.485a.5.5 0 0 1-.707.707L7.404 8.111z"
      />
    </g>
  </svg>
);

ClearIcon.displayName = "ClearIcon";

ClearIcon.propTypes = {
  children: PropTypes.node
};

ClearIcon.defaultProps = {
  children: null
};

export default ClearIcon;
