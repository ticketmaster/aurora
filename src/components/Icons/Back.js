import React from "react";
import { PropTypes } from "prop-types";
import { smallLarge } from "./iconConstants";
import { themes } from "../../theme";

const backIcons = {
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
          {...color !== "currentColor" && { fillOpacity: ".65" }}
          fillRule="nonzero"
          d="M4.869 8l6.678 6.678a.774.774 0 0 1-1.094 1.095L3.227 8.547a.774.774 0 0 1 0-1.094L10.453.227a.774.774 0 0 1 1.094 1.095L4.87 8z"
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
          {...color !== "currentColor" && { fillOpacity: ".65" }}
          fillRule="nonzero"
          d="M17.542 22.692a.766.766 0 1 1-1.084 1.084L5.224 12.542c-.299-.3-.299-.785 0-1.084L16.458.224a.766.766 0 0 1 1.084 1.084L6.85 12l10.692 10.692z"
        />
      </g>
    </svg>
  )
};

const BackIcon = ({ size, color, children, ...props }) =>
  backIcons[size](color, children, props);

BackIcon.displayName = "BackIcon";

BackIcon.defaultProps = {
  size: smallLarge[0],
  children: null,
  color: themes.global.gray01
};

BackIcon.propTypes = {
  size: PropTypes.oneOf(smallLarge),
  children: PropTypes.node,
  color: PropTypes.string
};

export default BackIcon;
