import React from "react";
import { PropTypes } from "prop-types";
import { allSizes, types } from "./iconConstants";
import { themes } from "../../theme";

const infoIcons = {
  outline: {
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
          <path d="M0 0h16v16H0z" />
          <path
            fill={color}
            d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm0 1A7 7 0 1 1 8 1a7 7 0 0 1 0 14zM8 5a.75.75 0 1 0 0-1.5A.75.75 0 0 0 8 5zm0 7.5a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-1.5 0v4.5c0 .414.336.75.75.75z"
          />
        </g>
      </svg>
    ),
    regular: (color, children, props) => (
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
            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 1C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm0-15.75a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM12 18a1 1 0 0 0 1-1v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1z"
          />
        </g>
      </svg>
    ),
    large: (color, children, props) => (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 36 36"
      >
        {children}
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h36v36H0z" />
          <path
            fill={color}
            d="M18 34c8.837 0 16-7.163 16-16S26.837 2 18 2 2 9.163 2 18s7.163 16 16 16zm0 1C8.611 35 1 27.389 1 18S8.611 1 18 1s17 7.611 17 17-7.611 17-17 17zm0-24a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 17a1.5 1.5 0 0 0 1.5-1.5v-11a1.5 1.5 0 0 0-3 0v11A1.5 1.5 0 0 0 18 28z"
          />
        </g>
      </svg>
    )
  },
  filled: {
    small: (color, children, props) => (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        {children}
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <circle fill={color} cx="8" cy="8" r="7" />
          <circle fill="#FFFFFF" cx="8" cy="4.25" r="1" />
          <path
            d="M8,12.5 L8,12.5 C8.41421356,12.5 8.75,12.1642136 8.75,11.75 L8.75,7.25 C8.75,6.83578644 8.41421356,6.5 8,6.5 L8,6.5 C7.58578644,6.5 7.25,6.83578644 7.25,7.25 L7.25,11.75 C7.25,12.1642136 7.58578644,12.5 8,12.5 Z"
            fill="#FFFFFF"
          />
        </g>
      </svg>
    ),
    regular: (color, children, props) => (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        {children}
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <circle fill={color} cx="12" cy="12" r="11" />
          <circle fill="#FFFFFF" cx="12" cy="6.25" r="1" />
          <path
            d="M12,18 L12,18 C12.5522847,18 13,17.5522847 13,17 L13,10 C13,9.44771525 12.5522847,9 12,9 L12,9 C11.4477153,9 11,9.44771525 11,10 L11,17 C11,17.5522847 11.4477153,18 12,18 Z"
            fill="#FFFFFF"
          />
        </g>
      </svg>
    ),
    large: (color, children, props) => (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 36 36"
      >
        {children}
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <circle fill={color} cx="18" cy="18" r="17" />
          <circle fill="#FFFFFF" cx="18" cy="9.5" r="1.5" />
          <path
            d="M18,28 L18,28 C18.8284271,28 19.5,27.3284271 19.5,26.5 L19.5,15.5 C19.5,14.6715729 18.8284271,14 18,14 L18,14 C17.1715729,14 16.5,14.6715729 16.5,15.5 L16.5,26.5 C16.5,27.3284271 17.1715729,28 18,28 Z"
            fill="#FFFFFF"
          />
        </g>
      </svg>
    )
  }
};

const InfoIcon = ({ type, size, children, ...props }) =>
  infoIcons[type][size](themes.global.primary.base, children, props);

InfoIcon.displayName = "InfoIcon";

InfoIcon.defaultProps = {
  type: types[0],
  size: allSizes[0],
  children: null
};

InfoIcon.propTypes = {
  type: PropTypes.oneOf(types),
  size: PropTypes.oneOf(allSizes),
  children: PropTypes.node
};

export default InfoIcon;
