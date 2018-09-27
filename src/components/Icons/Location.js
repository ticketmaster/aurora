import React from "react";
import { PropTypes } from "prop-types";

const LocationIcon = ({ children, color, ...props }) => (
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
        fill={color}
        fillOpacity=".5"
        fillRule="nonzero"
        d="M12.373 23.833a.5.5 0 0 1-.746 0C5.883 17.413 3 12.495 3 9c0-5.276 3.724-9 9-9s9 3.724 9 9c0 3.495-2.883 8.414-8.627 14.833zM20 9c0-4.724-3.276-8-8-8S4 4.276 4 9c0 3.1 2.66 7.707 8 13.748C17.34 16.708 20 12.1 20 9zm-8 4a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
      />
    </g>
  </svg>
);

LocationIcon.displayName = "LocationIcon";

LocationIcon.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string
};

LocationIcon.defaultProps = {
  children: null,
  color: "currentColor"
};

export default LocationIcon;
