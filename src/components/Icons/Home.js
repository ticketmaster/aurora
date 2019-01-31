import React from "react";
import { PropTypes } from "prop-types";
import { smallLarge } from "./iconConstants";
import { themes } from "../../theme";

const homeIcons = {
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
          {...color !== "currentColor" && { fillOpacity: ".65" }}
          fillRule="nonzero"
          d="M2.598 9.167a1.546 1.546 0 0 1-2.171-.073 1.533 1.533 0 0 1 .06-2.167l7.17-6.79a.5.5 0 0 1 .686 0l7.178 6.788c.617.588.64 1.558.056 2.17a1.553 1.553 0 0 1-2.178.07L8 4.18 2.598 9.167zM8 1.188L1.174 7.653a.533.533 0 0 0-.02.753.546.546 0 0 0 .766.026l5.74-5.3a.5.5 0 0 1 .68 0l5.738 5.298a.553.553 0 0 0 .775-.025.532.532 0 0 0-.018-.752L8 1.188zM2 8.58a.5.5 0 0 1 .16-.367l5.5-5.08a.5.5 0 0 1 .68 0l5.5 5.08a.5.5 0 0 1 .16.367V15a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8.58zm1 .219V15h10V8.799L8 4.18 3 8.799zM7 15.5a.5.5 0 1 1-1 0V11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4.5a.5.5 0 1 1-1 0V11H7v4.5z"
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
          {...color !== "currentColor" && { fillOpacity: ".65" }}
          fillRule="nonzero"
          d="M12 5.207l-8.396 8.397a1.56 1.56 0 0 1-2.208-2.208l10.25-10.25a.5.5 0 0 1 .708 0l10.25 10.25a1.56 1.56 0 0 1-2.208 2.208L12 5.207zm-9.896 6.897a.56.56 0 1 0 .792.792l8.75-8.75a.5.5 0 0 1 .708 0l8.75 8.75a.56.56 0 0 0 .792-.792L12 2.207l-9.896 9.897zM4 12a.5.5 0 0 1 .146-.354l7.5-7.5a.5.5 0 0 1 .708 0l7.5 7.5A.5.5 0 0 1 20 12v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V12zm1 .207V22h14v-9.793l-7-7-7 7zM10 22.5a.5.5 0 1 1-1 0V16a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6.5a.5.5 0 1 1-1 0V16h-4v6.5z"
        />
      </g>
    </svg>
  )
};

const HomeIcon = ({ size, color, children, ...props }) =>
  homeIcons[size](color, children, props);

HomeIcon.displayName = "HomeIcon";

HomeIcon.defaultProps = {
  size: smallLarge[0],
  children: null,
  color: themes.global.gray01
};

HomeIcon.propTypes = {
  size: PropTypes.oneOf(smallLarge),
  children: PropTypes.node,
  color: PropTypes.string
};

export default HomeIcon;
