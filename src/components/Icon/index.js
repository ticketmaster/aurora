import React from "react";
import PropTypes from "prop-types";

import icons from "./icons";

const Icon = ({ name, size, color, svgStyle }) => (
  <svg
    style={svgStyle}
    width={`${size}px`}
    height={`${size}px`}
    viewBox="0 0 1024 1024"
  >
    {icons[name].map(path => <path key={path} d={path} fill={color} />)}
  </svg>
);

Icon.defaultProps = {
  svgStyle: {}
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  svgStyle: PropTypes.objectOf(PropTypes.any)
};

export default Icon;
