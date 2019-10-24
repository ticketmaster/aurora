import React from "react";
import { PropTypes } from "prop-types";

const InstagramIcon = ({ size, color, children, ...props }) => (
  <svg {...props} viewBox="0 0 16 16" width={size} height={size} fill={color}>
    {children}
    <path d="M8 1c1.901 0 2.14.008 2.886.042.745.034 1.254.152 1.7.326.46.178.85.418 1.24.807.388.389.628.78.807 1.24.173.445.29.954.325 1.699.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886-.034.745-.152 1.254-.325 1.7-.18.46-.419.85-.808 1.24-.389.388-.78.628-1.24.807-.445.173-.954.29-1.699.325C10.14 14.992 9.901 15 8 15c-1.901 0-2.14-.008-2.886-.042-.745-.034-1.254-.152-1.7-.325a3.432 3.432 0 0 1-1.24-.808c-.388-.389-.628-.78-.806-1.24-.174-.445-.292-.954-.326-1.699C1.008 10.14 1 9.901 1 8c0-1.901.008-2.14.042-2.886.034-.745.152-1.254.326-1.7.178-.46.418-.85.807-1.24.389-.388.78-.628 1.24-.806.445-.174.954-.292 1.699-.326C5.86 1.008 6.099 1 8 1zm-.043 9.389a2.346 2.346 0 1 1 0-4.692 2.346 2.346 0 0 1 0 4.692zm0-5.96a3.614 3.614 0 1 0 0 7.228 3.614 3.614 0 0 0 0-7.228zm4.608-.136a.858.858 0 1 0-1.717 0 .858.858 0 0 0 1.717 0z" />
  </svg>
);

InstagramIcon.displayName = "InstagramIcon";

InstagramIcon.defaultProps = {
  color: "currentcolor",
  children: null
};

InstagramIcon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string,
  children: PropTypes.node
};

export default InstagramIcon;
