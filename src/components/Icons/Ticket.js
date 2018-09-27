import React from "react";
import { PropTypes } from "prop-types";

const TicketIcon = ({ children, color, ...props }) => (
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
        d="M18.006 4.528a1.03 1.03 0 0 0 1.457 1.457l.332-.332a.5.5 0 0 1 .707 0l3.14 3.14a1 1 0 0 1 0 1.414L10.207 23.642a1 1 0 0 1-1.415 0L.307 15.156a1 1 0 0 1 0-1.414L13.742.307a1 1 0 0 1 1.414 0l3.182 3.182a.5.5 0 0 1 0 .707l-.332.332zM14.45 1.014L1.014 14.45 9.5 22.935 22.935 9.499l-2.786-2.785a2.03 2.03 0 0 1-2.871-2.871l-2.829-2.829zM10.56 4.196a.5.5 0 1 1 .707-.707L13.39 5.61a.5.5 0 1 1-.708.708l-2.12-2.122zM7.732 14.803a.5.5 0 1 1-.707-.707l4.95-4.95a.5.5 0 1 1 .706.707l-4.95 4.95zm4.242 0a.5.5 0 1 1-.707-.707l2.829-2.829a.5.5 0 1 1 .707.707l-2.829 2.829zm2.122-7.071a.5.5 0 1 1 .707-.707l2.121 2.12a.5.5 0 1 1-.707.708l-2.121-2.121zm3.535 3.535a.5.5 0 1 1 .707-.707l2.122 2.121a.5.5 0 1 1-.707.708l-2.122-2.122z"
      />
    </g>
  </svg>
);

TicketIcon.displayName = "TicketIcon";

TicketIcon.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string
};

TicketIcon.defaultProps = {
  children: null,
  color: "currentColor"
};

export default TicketIcon;
