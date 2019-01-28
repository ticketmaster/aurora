import React from "react";
import { PropTypes } from "prop-types";
import { themes } from "../../theme";

const MobileTicketIcon = ({ children, color, ...props }) => (
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
        d="M6,20 L7,20 L7,8.5 C7,8.22385763 7.22385763,8 7.5,8 L10.5,8 C10.689386,8 10.8625176,8.10700119 10.9472136,8.2763932 L11,8.38196601 C11.189386,8.76073807 11.57652,9 12,9 C12.42348,9 12.810614,8.76073807 13,8.38196601 L13.0527864,8.2763932 C13.1374824,8.10700119 13.310614,8 13.5,8 L16.5,8 C16.7761424,8 17,8.22385763 17,8.5 L17,20 L18,20 L18,2.5 C18,1.67157288 17.3284271,1 16.5,1 L7.5,1 C6.67157288,1 6,1.67157288 6,2.5 L6,20 Z M6,21 L6,21.5 C6,22.3284271 6.67157288,23 7.5,23 L16.5,23 C17.3284271,23 18,22.3284271 18,21.5 L18,21 L6,21 Z M8,12 L16,12 L16,9 L13.7989429,9 C13.4151015,9.61791491 12.7365719,10 12,10 C11.2634281,10 10.5848985,9.61791491 10.2010571,9 L8,9 L8,12 Z M16,13 L8,13 L8,20 L16,20 L16,13 Z M11.5,4 C11.2238576,4 11,3.77614237 11,3.5 C11,3.22385763 11.2238576,3 11.5,3 L14.5,3 C14.7761424,3 15,3.22385763 15,3.5 C15,3.77614237 14.7761424,4 14.5,4 L11.5,4 Z M8.5,4 C8.22385763,4 8,3.77614237 8,3.5 C8,3.22385763 8.22385763,3 8.5,3 L9.5,3 C9.77614237,3 10,3.22385763 10,3.5 C10,3.77614237 9.77614237,4 9.5,4 L8.5,4 Z M16.5,24 L7.5,24 C6.11928813,24 5,22.8807119 5,21.5 L5,2.5 C5,1.11928813 6.11928813,7.21644966e-16 7.5,4.4408921e-16 L16.5,0 C17.8807119,-2.77555756e-16 19,1.11928813 19,2.5 L19,21.5 C19,22.8807119 17.8807119,24 16.5,24 Z"
      />
    </g>
  </svg>
);

MobileTicketIcon.displayName = "MobileTicketIcon";

MobileTicketIcon.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string
};

MobileTicketIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

export default MobileTicketIcon;
