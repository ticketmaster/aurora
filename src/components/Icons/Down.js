import React from "react";
import { PropTypes } from "prop-types";
import * as sizes from "./iconSizes";
import { themes } from "../../theme";

const downIcons = {
  small: (children, props) => (
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
        d="M8 10.768l6.678-6.679a.774.774 0 1 1 1.095 1.095L8.547 12.41a.774.774 0 0 1-1.094 0L.227 5.184A.774.774 0 0 1 1.322 4.09L8 10.768z"
      />
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
      <path
        fill={themes.global.gray01}
        fillOpacity=".5"
        fillRule="nonzero"
        d="M22.692 7.224a.778.778 0 0 1 1.084 0c.299.293.299.768 0 1.061L12.542 19.283a.778.778 0 0 1-1.084 0L.224 8.285a.739.739 0 0 1 0-1.06.778.778 0 0 1 1.084 0L12 17.691 22.692 7.224z"
      />
    </svg>
  )
};

const DownIcon = ({ size, children, ...props }) =>
  downIcons[size](children, props);

DownIcon.displayName = "DownIcon";

DownIcon.defaultProps = {
  size: sizes.smallLarge[0],
  children: null
};

DownIcon.propTypes = {
  size: PropTypes.oneOf(sizes.smallLarge),
  children: PropTypes.node
};

export default DownIcon;
