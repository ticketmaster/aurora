import React from "react";
import { PropTypes } from "prop-types";
import * as sizes from "./iconSizes";
import { themes } from "../../theme";

const closeIcons = {
  small: (children, props) => (
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
          fill={themes.global.gray01}
          fillOpacity=".5"
          fillRule="nonzero"
          d="M8 6.905L14.678.227a.774.774 0 0 1 1.095 1.095L9.095 8l6.678 6.678a.774.774 0 0 1-1.095 1.095L8 9.095l-6.678 6.678a.774.774 0 0 1-1.095-1.095L6.905 8 .227 1.322A.774.774 0 0 1 1.322.227L8 6.905z"
        />
      </g>
    </svg>
  ),
  large: (children, props) => (
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
          fill={themes.global.gray01}
          fillOpacity=".5"
          fillRule="nonzero"
          d="M12 10.869L22.634.234a.8.8 0 1 1 1.132 1.132L13.13 12l10.635 10.634a.8.8 0 1 1-1.132 1.132L12 13.13 1.366 23.766a.8.8 0 1 1-1.132-1.132L10.87 12 .234 1.366A.8.8 0 1 1 1.366.234L12 10.87z"
        />
      </g>
    </svg>
  )
};

const CloseIcon = ({ size, children, ...props }) =>
  closeIcons[size](children, props);

CloseIcon.displayName = "CloseIcon";

CloseIcon.defaultProps = {
  size: sizes.smallLarge[0],
  children: null
};

CloseIcon.propTypes = {
  size: PropTypes.oneOf(sizes.smallLarge),
  children: PropTypes.node
};

export default CloseIcon;
