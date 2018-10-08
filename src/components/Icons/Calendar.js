import React from "react";
import { PropTypes } from "prop-types";
import { smallLarge } from "./iconConstants";
import { themes } from "../../theme";

const calendarIcons = {
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
          {...color !== "currentColor" && { fillOpacity: ".5" }}
          fillRule="nonzero"
          d="M15 5V3.5a.5.5 0 0 0-.5-.5h-1.585a1.5 1.5 0 0 1-2.83 0h-4.17a1.5 1.5 0 0 1-2.83 0H1.5a.5.5 0 0 0-.5.5V5h14zm0 1H1v8.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5V6zm-5-4v-.5a1.5 1.5 0 0 1 3 0V2h1.5A1.5 1.5 0 0 1 16 3.5v11a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-11A1.5 1.5 0 0 1 1.5 2H3v-.5a1.5 1.5 0 0 1 3 0V2h4zM3 7h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1zm1.5-4a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-1 0v1a.5.5 0 0 0 .5.5zm7 0a.5.5 0 0 0 .5-.5v-1a.5.5 0 1 0-1 0v1a.5.5 0 0 0 .5.5zM3 8v2h2V8H3z"
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
        <path d="M0 0h24v24H0z" />
        <path
          fill={color}
          {...color !== "currentColor" && { fillOpacity: ".5" }}
          fillRule="nonzero"
          d="M6 3v-.5a1.5 1.5 0 0 1 3 0V3h6v-.5a1.5 1.5 0 0 1 3 0V3h3.5A1.5 1.5 0 0 1 23 4.5v17a1.5 1.5 0 0 1-1.5 1.5h-19A1.5 1.5 0 0 1 1 21.5v-17A1.5 1.5 0 0 1 2.5 3H6zm0 1H2.5a.5.5 0 0 0-.5.5V8h20V4.5a.5.5 0 0 0-.5-.5H18v.5a1.5 1.5 0 0 1-3 0V4H9v.5a1.5 1.5 0 0 1-3 0V4zM2 9v12.5a.5.5 0 0 0 .5.5h19a.5.5 0 0 0 .5-.5V9H2zm3 2h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm0 1v2h2v-2H5zm11.5-7a.5.5 0 0 0 .5-.5v-2a.5.5 0 1 0-1 0v2a.5.5 0 0 0 .5.5zm-9 0a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v2a.5.5 0 0 0 .5.5z"
        />
      </g>
    </svg>
  )
};

const CalendarIcon = ({ size, color, children, ...props }) =>
  calendarIcons[size](color, children, props);

CalendarIcon.displayName = "CalendarIcon";

CalendarIcon.defaultProps = {
  size: smallLarge[0],
  children: null,
  color: themes.global.gray01
};

CalendarIcon.propTypes = {
  size: PropTypes.oneOf(smallLarge),
  children: PropTypes.node,
  color: PropTypes.string
};

export default CalendarIcon;
