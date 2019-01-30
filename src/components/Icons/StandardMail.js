import React from "react";
import { PropTypes } from "prop-types";
import { themes } from "../../theme";

const StandardMailIcon = ({ children, color, ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
  >
    {children}
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <path
        fill={color}
        {...color !== "currentColor" && { fillOpacity: ".65" }}
        fillRule="nonzero"
        d="M18.9160973,16 C18.711543,16.5830835 18.1555194,17 17.4991283,17 L12,17 L12,23 L14.5,23 C14.7761424,23 15,23.2238576 15,23.5 C15,23.7761424 14.7761424,24 14.5,24 L6.5,24 C6.22385763,24 6,23.7761424 6,23.5 C6,23.2238576 6.22385763,23 6.5,23 L9,23 L9,17 L3.50087166,17 C2.67525418,17 2,16.3237743 2,15.5046024 L2,10.509763 C2,8.01666272 4.01408068,6 6.509763,6 L12.5,6 C12.7761424,6 13,6.22385763 13,6.5 C13,6.77614237 12.7761424,7 12.5,7 L6.509763,7 C4.56665243,7 3,8.56866087 3,10.509763 L3,15.5046024 C3,15.7718111 3.22786105,16 3.50087166,16 L17.4991283,16 C17.7783713,16 18,15.7790536 18,15.5046024 L18,7.49539757 C18,7.22809158 17.7724345,7 17.5,7 L16.5,7 C16.2238576,7 16,6.77614237 16,6.5 C16,6.22385763 16.2238576,6 16.5,6 L17.5,6 C18.3252368,6 19,6.67632306 19,7.49539757 L19,8 L21.5,8 C21.8042747,8 22.0380057,8.26949412 21.9949747,8.57071068 L20.9949747,15.5707107 C20.9597856,15.817035 20.7488252,16 20.5,16 L18.9160973,16 Z M19,15 L20.0663523,15 L20.9234952,9 L19,9 L19,15 Z M14,4 L9.5,4 C9.22385763,4 9,3.77614237 9,3.5 L9,0.5 C9,0.223857625 9.22385763,0 9.5,0 L14.5,0 C14.7761424,0 15,0.223857625 15,0.5 L15,8.5 C15,8.77614237 14.7761424,9 14.5,9 C14.2238576,9 14,8.77614237 14,8.5 L14,4 Z M14,3 L14,1 L10,1 L10,3 L14,3 Z M11,17 L10,17 L10,23 L11,23 L11,17 Z"
      />
    </g>
  </svg>
);

StandardMailIcon.displayName = "StandardMailIcon";

StandardMailIcon.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string
};

StandardMailIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

export default StandardMailIcon;
