import React from "react";
import { PropTypes } from "prop-types";
import * as sizes from "./iconSizes";
import { themes } from "../../theme";

const deleteIcons = {
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
        <path d="M0 0h16v16H0z" />
        <path
          fill={themes.global.gray01}
          fillOpacity=".5"
          fillRule="nonzero"
          d="M6 0h4a1 1 0 0 1 1 1v1.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5V1a1 1 0 0 1 1-1zM3.5 4h9a.5.5 0 0 1 .498.545l-.959 10.546a1 1 0 0 1-.996.909H4.957a1 1 0 0 1-.996-.91L3.002 4.546A.5.5 0 0 1 3.5 4zm.548 1l.909 10h6.086l.91-10H4.047zM2.5 2h11a1.5 1.5 0 0 1 0 3h-11a1.5 1.5 0 0 1 0-3zm0 1a.5.5 0 0 0 0 1h11a.5.5 0 1 0 0-1h-11zM10 1H6v1h4V1zM9 7.5a.5.5 0 0 1 1 0v5a.5.5 0 1 1-1 0v-5zm-2 0a.5.5 0 0 0-1 0v5a.5.5 0 1 0 1 0v-5z"
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
        <path d="M0 0h24v24H0z" />
        <path
          fill={themes.global.gray01}
          fillOpacity=".5"
          fillRule="nonzero"
          d="M5.03 7H3.5a1.5 1.5 0 0 1 0-3H7V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2h3.5a1.5 1.5 0 0 1 0 3h-1.53l-.942 15.062a1 1 0 0 1-.998.938H6.97a1 1 0 0 1-.998-.938L5.03 7zM14 10.5a.5.5 0 1 1 1 0v8a.5.5 0 1 1-1 0v-8zm-4 0a.5.5 0 1 0-1 0v8a.5.5 0 1 0 1 0v-8zM16 2H8v2h8V2zM3.5 5a.5.5 0 0 0 0 1h17a.5.5 0 1 0 0-1h-17zm2.532 2l.938 15h10.06l.938-15H6.032z"
        />
      </g>
    </svg>
  )
};

const DeleteIcon = ({ size, children, ...props }) =>
  deleteIcons[size](children, props);

DeleteIcon.displayName = "DeleteIcon";

DeleteIcon.defaultProps = {
  size: sizes.smallLarge[0],
  children: null
};

DeleteIcon.propTypes = {
  size: PropTypes.oneOf(sizes.smallLarge),
  children: PropTypes.node
};

export default DeleteIcon;
