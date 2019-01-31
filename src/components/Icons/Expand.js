import React from "react";
import { PropTypes } from "prop-types";
import { themes } from "../../theme";

const ExpandIcon = ({ children, color, ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
  >
    {children}
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g>
        <rect x="0" y="0" width="24" height="24" />
        <path
          fill={color}
          {...color !== "currentColor" && { fillOpacity: ".65" }}
          fillRule="nonzero"
          d="M19.2928932,4 L14.5,4 C14.2238576,4 14,3.77614237 14,3.5 C14,3.22385763 14.2238576,3 14.5,3 L20.5,3 C20.7761424,3 21,3.22385763 21,3.5 L21,9.5 C21,9.77614237 20.7761424,10 20.5,10 C20.2238576,10 20,9.77614237 20,9.5 L20,4.70710678 L13.8535534,10.8535534 C13.6582912,11.0488155 13.3417088,11.0488155 13.1464466,10.8535534 C12.9511845,10.6582912 12.9511845,10.3417088 13.1464466,10.1464466 L19.2928932,4 Z M4,19.2928932 L10.1464466,13.1464466 C10.3417088,12.9511845 10.6582912,12.9511845 10.8535534,13.1464466 C11.0488155,13.3417088 11.0488155,13.6582912 10.8535534,13.8535534 L4.70710678,20 L9.5,20 C9.77614237,20 10,20.2238576 10,20.5 C10,20.7761424 9.77614237,21 9.5,21 L3.5,21 C3.22385763,21 3,20.7761424 3,20.5 L3,14.5 C3,14.2238576 3.22385763,14 3.5,14 C3.77614237,14 4,14.2238576 4,14.5 L4,19.2928932 Z"
        />
      </g>
    </g>
  </svg>
);

ExpandIcon.displayName = "ExpandIcon";

ExpandIcon.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string
};

ExpandIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

export default ExpandIcon;
