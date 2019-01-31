import React from "react";
import { PropTypes } from "prop-types";
import { themes } from "../../theme";

const RefreshIcon = ({ children, color, ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
  >
    {children}
    <g fill="none" fillRule="evenodd">
      <path d="M1 0h23.543v23.395H1z" />
      <path
        stroke={color}
        {...color !== "currentColor" && { strokeOpacity: ".65" }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22.13 1.66l-.383 7.3-7.232-2.575m6.492 1.675c-1.51-3.893-5.371-6.662-9.897-6.662-5.84 0-10.574 4.611-10.574 10.3 0 5.688 4.734 10.3 10.574 10.3 3.582 0 6.748-1.735 8.661-4.39"
      />
    </g>
  </svg>
);

RefreshIcon.displayName = "RefreshIcon";

RefreshIcon.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string
};

RefreshIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

export default RefreshIcon;
