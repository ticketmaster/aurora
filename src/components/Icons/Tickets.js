import React from "react";
import { PropTypes } from "prop-types";
import { themes } from "../../theme";

const TicketsIcon = ({ children, color, ...props }) => (
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
        fillOpacity=".5"
        fillRule="nonzero"
        d="M17.978 4.5a1.03 1.03 0 0 0 1.457 1.457l.332-.332a.5.5 0 0 1 .707 0l3.14 3.14a1 1 0 0 1 0 1.413L10.177 23.613a1 1 0 0 1-1.414 0L.28 15.128a1 1 0 0 1 0-1.414L13.714.279a1 1 0 0 1 1.414 0L18.31 3.46a.5.5 0 0 1 0 .707l-.332.332zM14.42.986L.986 14.421l8.485 8.485L22.906 9.471 20.12 6.685a2.03 2.03 0 0 1-2.87-2.87L14.42.986zm-3.889 3.182a.5.5 0 0 1 .707-.707l2.121 2.121a.5.5 0 1 1-.707.707l-2.121-2.121zM7.704 14.775a.5.5 0 1 1-.708-.707l4.95-4.95a.5.5 0 0 1 .707.707l-4.95 4.95zm4.242 0a.5.5 0 1 1-.707-.707l2.829-2.829a.5.5 0 0 1 .707.707l-2.829 2.829zm2.122-7.071a.5.5 0 0 1 .707-.708l2.121 2.122a.5.5 0 1 1-.707.707l-2.121-2.121zM5.91 3.984l1.403.511a.5.5 0 0 1-.342.94l-1.403-.51-2.792 7.67a.5.5 0 0 1-.94-.341L4.77 4.192a.503.503 0 0 1 .058-.16L6.076.607A1 1 0 0 1 7.358.008l3.232 1.176a.5.5 0 0 1 .3.641l-.233.639a.82.82 0 0 0 .49 1.05.5.5 0 1 1-.343.939 1.819 1.819 0 0 1-1.087-2.331l.062-.169L7.016.948 5.911 3.985zm11.692 7.255a.5.5 0 0 1 .707-.707l2.121 2.121a.5.5 0 1 1-.707.707l-2.12-2.12z"
      />
    </g>
  </svg>
);

TicketsIcon.displayName = "TicketsIcon";

TicketsIcon.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string
};

TicketsIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

export default TicketsIcon;
