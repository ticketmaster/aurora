import React from "react";
import { PropTypes } from "prop-types";
import { themes } from "../../theme";

const EditIcon = ({ children, ...props }) => (
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
        d="M5.054 22.487l4.854-3.205L18.952 3.62S17.44 2.745 14.418 1L5.375 16.663l-.321 5.824zM4 23.425l.382-6.936a.5.5 0 0 1 .066-.223L13.553.5a1 1 0 0 1 1.365-.365l4.535 2.618c.477.278.64.887.365 1.366l-9.103 15.766a.5.5 0 0 1-.157.168L4.776 23.87A.5.5 0 0 1 4 23.425zm6.031-3.357l-5.4-3.118c-.577-.334-.077-1.2.5-.867l5.4 3.118c.578.334.078 1.2-.5.867zm7.015-12.15l-5.4-3.118c-.577-.334-.077-1.2.5-.866l5.4 3.118c.577.333.077 1.199-.5.866zM4.5 24a.5.5 0 1 1 0-1h15a.5.5 0 1 1 0 1h-15z"
      />
    </g>
  </svg>
);

EditIcon.displayName = "EditIcon";

EditIcon.propTypes = {
  children: PropTypes.node
};

EditIcon.defaultProps = {
  children: null
};

export default EditIcon;
