import React from "react";
import { PropTypes } from "prop-types";
import { smallLarge } from "./iconConstants";

const searchIcons = {
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
          fillRule="nonzero"
          d="M12 6.5a5.5 5.5 0 1 0-11 0 5.5 5.5 0 0 0 11 0zm-.564 4.229l4.418 4.417a.5.5 0 0 1-.708.708l-4.417-4.418a6.5 6.5 0 1 1 .707-.707z"
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
          fillRule="nonzero"
          d="M18 9.5a8.5 8.5 0 1 0-17 0 8.5 8.5 0 0 0 17 0zm-1.438 6.355l7.292 7.291a.5.5 0 0 1-.708.708l-7.291-7.292a9.5 9.5 0 1 1 .707-.707z"
        />
      </g>
    </svg>
  )
};

const SearchIcon = ({ size, color, children, ...props }) =>
  searchIcons[size] ? searchIcons[size](color, children, props) : null;

SearchIcon.displayName = "SearchIcon";

SearchIcon.defaultProps = {
  size: smallLarge[0],
  children: null,
  color: "currentColor"
};

SearchIcon.propTypes = {
  size: PropTypes.oneOf(smallLarge),
  children: PropTypes.node,
  color: PropTypes.string
};

export default SearchIcon;
