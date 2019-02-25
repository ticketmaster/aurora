import React from "react";
import { PropTypes } from "prop-types";
import { themes } from "../../theme";

const CreateNewIcon = ({ children, color, ...props }) => (
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
        d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M11.5,5 C11.5,4.72385763 11.7238576,4.5 12,4.5 C12.2761424,4.5 12.5,4.72385763 12.5,5 L12.5,19 C12.5,19.2761424 12.2761424,19.5 12,19.5 C11.7238576,19.5 11.5,19.2761424 11.5,19 L11.5,5 Z M5,12.5 C4.72385763,12.5 4.5,12.2761424 4.5,12 C4.5,11.7238576 4.72385763,11.5 5,11.5 L19,11.5 C19.2761424,11.5 19.5,11.7238576 19.5,12 C19.5,12.2761424 19.2761424,12.5 19,12.5 L5,12.5 Z"
      />
    </g>
  </svg>
);

CreateNewIcon.displayName = "CreateNewIcon";

CreateNewIcon.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string
};

CreateNewIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

export default CreateNewIcon;
