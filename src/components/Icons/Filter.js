import React from "react";
import { PropTypes } from "prop-types";

const FilterIcon = ({ children, color, ...props }) => (
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
        d="M10.5 16v2h3v-2h-3zm2-1h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1v3.5a.5.5 0 1 1-1 0V19h-1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1V1.5a.5.5 0 1 1 1 0V15zm6.5-1.5a.5.5 0 1 1 1 0v9a.5.5 0 1 1-1 0v-9zm0-12a.5.5 0 1 1 1 0v9a.5.5 0 1 1-1 0v-9zM18 11v2h3v-2h-3zm0-1h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zM3 6v2h3V6H3zm2-1h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5v13.5a.5.5 0 1 1-1 0V9H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1V1.5a.5.5 0 0 1 1 0V5z"
      />
    </g>
  </svg>
);

FilterIcon.displayName = "FilterIcon";

FilterIcon.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string
};

FilterIcon.defaultProps = {
  children: null,
  color: "currentColor"
};

export default FilterIcon;
