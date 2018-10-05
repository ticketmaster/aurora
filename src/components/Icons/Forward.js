import React from "react";
import { PropTypes } from "prop-types";
import { smallLarge } from "./iconConstants";
import { themes } from "../../theme";

const forwardIcons = {
  small: (color, children, props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      {children}
      <g fill="none" fillRule="evenodd">
        <path d="M16 0H0v16h16z" />
        <path
          fill={color}
          {...color !== "currentColor" && { fillOpacity: ".5" }}
          fillRule="nonzero"
          d="M10.905 8l-6.678 6.678a.774.774 0 0 0 1.095 1.095l7.225-7.226a.774.774 0 0 0 0-1.094L5.322.227a.774.774 0 0 0-1.095 1.095L10.905 8z"
        />
      </g>
    </svg>
  ),
  large: (color, children, props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      {children}
      <g fill="none" fillRule="evenodd">
        <path d="M24 0H0v24h24z" />
        <path
          fill={color}
          {...color !== "currentColor" && { fillOpacity: ".5" }}
          fillRule="nonzero"
          d="M6.224 22.692a.766.766 0 1 0 1.084 1.084l11.234-11.234c.299-.3.299-.785 0-1.084L7.308.224a.766.766 0 0 0-1.084 1.084L16.917 12 6.224 22.692z"
        />
      </g>
    </svg>
  )
};

const ForwardIcon = ({ size, color, children, ...props }) =>
  forwardIcons[size](color, children, props);

ForwardIcon.displayName = "ForwardIcon";

ForwardIcon.defaultProps = {
  size: smallLarge[0],
  children: null,
  color: themes.global.gray01
};

ForwardIcon.propTypes = {
  size: PropTypes.oneOf(smallLarge),
  children: PropTypes.node,
  color: PropTypes.string
};

export default ForwardIcon;
