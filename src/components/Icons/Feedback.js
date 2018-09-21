import React from "react";
import { PropTypes } from "prop-types";

const FeedbackIcon = ({ children, color, ...props }) => (
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
        d="M5 22.293l4.146-4.147A.5.5 0 0 1 9.5 18h10a3.5 3.5 0 0 0 3.5-3.5v-10A3.5 3.5 0 0 0 19.5 1h-15A3.5 3.5 0 0 0 1 4.5v10A3.5 3.5 0 0 0 4.5 18a.5.5 0 0 1 .5.5v3.793zM9.707 19l-4.853 4.854A.5.5 0 0 1 4 23.5v-4.527A4.5 4.5 0 0 1 0 14.5v-10A4.5 4.5 0 0 1 4.5 0h15A4.5 4.5 0 0 1 24 4.5v10a4.5 4.5 0 0 1-4.5 4.5H9.707zM5.5 6a.5.5 0 0 1 0-1h13a.5.5 0 1 1 0 1h-13zm0 4a.5.5 0 0 1 0-1h13a.5.5 0 1 1 0 1h-13zm0 4a.5.5 0 1 1 0-1h7a.5.5 0 1 1 0 1h-7z"
      />
    </g>
  </svg>
);

FeedbackIcon.displayName = "FeedbackIcon";

FeedbackIcon.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string
};

FeedbackIcon.defaultProps = {
  children: null,
  color: "currentColor"
};

export default FeedbackIcon;
