import React from "react";
import { PropTypes } from "prop-types";
import { themes } from "../../theme";

const BookmarkIcon = ({ children, ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
  >
    {children}
    <path
      fill={themes.global.gray01}
      fillOpacity=".5"
      fillRule="nonzero"
      d="M13 1H3v13.29l3.957-2.229a2 2 0 0 1 1.946-.01L13 14.309V1zM3 0h10a1 1 0 0 1 1 1v15l-5.58-3.072a1 1 0 0 0-.973.005L2 16V1a1 1 0 0 1 1-1z"
    />
  </svg>
);

BookmarkIcon.displayName = "BookmarkIcon";

BookmarkIcon.propTypes = {
  children: PropTypes.node
};

BookmarkIcon.defaultProps = {
  children: null
};

export default BookmarkIcon;
