import React from "react";
import { PropTypes } from "prop-types";
import { themes } from "../../theme";

const PauseIcon = ({ children, color, ...props }) => (
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
          d="M8.5,5 C8.22385763,5 8,5.22385763 8,5.5 L8,18.5 C8,18.7761424 8.22385763,19 8.5,19 L9.5,19 C9.77614237,19 10,18.7761424 10,18.5 L10,5.5 C10,5.22385763 9.77614237,5 9.5,5 L8.5,5 Z M8.5,4 L9.5,4 C10.3284271,4 11,4.67157288 11,5.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L8.5,20 C7.67157288,20 7,19.3284271 7,18.5 L7,5.5 C7,4.67157288 7.67157288,4 8.5,4 Z M14.5,5 C14.2238576,5 14,5.22385763 14,5.5 L14,18.5 C14,18.7761424 14.2238576,19 14.5,19 L15.5,19 C15.7761424,19 16,18.7761424 16,18.5 L16,5.5 C16,5.22385763 15.7761424,5 15.5,5 L14.5,5 Z M14.5,4 L15.5,4 C16.3284271,4 17,4.67157288 17,5.5 L17,18.5 C17,19.3284271 16.3284271,20 15.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z"
        />
      </g>
    </g>
  </svg>
);

PauseIcon.displayName = "PauseIcon";

PauseIcon.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string
};

PauseIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

export default PauseIcon;
