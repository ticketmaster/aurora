import React from "react";
import PropTypes from "prop-types";

const DIRECTION = ["up", "down", "left", "right"];

const getChevronStyle = ({ direction }) => {
  switch (direction) {
    case "up":
      return { transform: "rotate(-180deg)" };
    case "left":
      return { transform: "rotate(90deg)" };
    case "right":
      return { transform: "rotate(-90deg)" };
    default:
      return {};
  }
};

const ChevronIcon = ({ size, color, direction, children, ...props }) => (
  <svg
    {...props}
    style={getChevronStyle({ direction })}
    viewBox="0 0 15 7"
    width={size}
    height={size}
    fill={color}
  >
    {children}
    <path d="M13.974.132a.614.614 0 0 0-.762 0L7.17 5.341 1.12.132C.916-.044.563-.037.376.125a.398.398 0 0 0-.167.332c0 .058.012.116.036.17a.385.385 0 0 0 .12.155l6.427 5.54a.568.568 0 0 0 .378.135.568.568 0 0 0 .377-.135l6.427-5.54a.422.422 0 0 0 .156-.325.42.42 0 0 0-.156-.325z" />
  </svg>
);

ChevronIcon.displayName = "ChevronIcon";

ChevronIcon.defaultProps = {
  direction: "down",
  children: null
};

ChevronIcon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.node,
  direction: PropTypes.oneOf(DIRECTION)
};

export default ChevronIcon;
