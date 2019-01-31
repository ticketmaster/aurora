import React from "react";
import { PropTypes } from "prop-types";
import { themes } from "../../theme";

const MobileDeviceIcon = ({ children, color, ...props }) => (
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
          d="M16.5,23 C17.3284271,23 18,22.3284271 18,21.5 L18,2.5 C18,1.67157288 17.3284271,1 16.5,1 L7.5,1 C6.67157288,1 6,1.67157288 6,2.5 L6,21.5 C6,22.3284271 6.67157288,23 7.5,23 L16.5,23 Z M16.5,24 L7.5,24 C6.11928813,24 5,22.8807119 5,21.5 L5,2.5 C5,1.11928813 6.11928813,7.21644966e-16 7.5,4.4408921e-16 L16.5,0 C17.8807119,-2.77555756e-16 19,1.11928813 19,2.5 L19,21.5 C19,22.8807119 17.8807119,24 16.5,24 Z M9.5,4 C9.22385763,4 9,3.77614237 9,3.5 C9,3.22385763 9.22385763,3 9.5,3 L14.5,3 C14.7761424,3 15,3.22385763 15,3.5 C15,3.77614237 14.7761424,4 14.5,4 L9.5,4 Z"
        />
      </g>
    </g>
  </svg>
);

MobileDeviceIcon.displayName = "MobileDeviceIcon";

MobileDeviceIcon.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string
};

MobileDeviceIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

export default MobileDeviceIcon;
