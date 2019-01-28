import React from "react";
import { PropTypes } from "prop-types";
import { themes } from "../../theme";

const CompressIcon = ({ children, color, ...props }) => (
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
        <rect id="bounds" x="0" y="0" width="24" height="24" />
        <path
          fill={color}
          {...color !== "currentColor" && { fillOpacity: ".65" }}
          fillRule="nonzero"
          d="M9.29289322,14 L4.5,14 C4.22385763,14 4,13.7761424 4,13.5 C4,13.2238576 4.22385763,13 4.5,13 L10.5,13 C10.7761424,13 11,13.2238576 11,13.5 L11,19.5 C11,19.7761424 10.7761424,20 10.5,20 C10.2238576,20 10,19.7761424 10,19.5 L10,14.7071068 L3.85355339,20.8535534 C3.65829124,21.0488155 3.34170876,21.0488155 3.14644661,20.8535534 C2.95118446,20.6582912 2.95118446,20.3417088 3.14644661,20.1464466 L9.29289322,14 Z M14,9.29289322 L20.1464466,3.14644661 C20.3417088,2.95118446 20.6582912,2.95118446 20.8535534,3.14644661 C21.0488155,3.34170876 21.0488155,3.65829124 20.8535534,3.85355339 L14.7071068,10 L19.5,10 C19.7761424,10 20,10.2238576 20,10.5 C20,10.7761424 19.7761424,11 19.5,11 L13.5,11 C13.2238576,11 13,10.7761424 13,10.5 L13,4.5 C13,4.22385763 13.2238576,4 13.5,4 C13.7761424,4 14,4.22385763 14,4.5 L14,9.29289322 Z"
          id="Combined-Shape"
        />
      </g>
    </g>
  </svg>
);

CompressIcon.displayName = "CompressIcon";

CompressIcon.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string
};

CompressIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

export default CompressIcon;
