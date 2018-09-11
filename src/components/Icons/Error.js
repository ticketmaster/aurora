import React from "react";
import { PropTypes } from "prop-types";
import * as sizes from "./iconSizes";
import { themes } from "../../theme";

const errorIcons = {
  small: (children, props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19"
      viewBox="0 0 18 19"
    >
      {children}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h18v19H0z" />
        <path
          fill={themes.global.error.base}
          d="M16.822 9.697a.274.274 0 0 0 0-.373l-7.636-8.06a.24.24 0 0 0-.353 0l-7.635 8.06a.274.274 0 0 0 0 .373l7.663 8.06a.24.24 0 0 0 .353-.001l7.608-8.059zm-6.81 8.897a1.324 1.324 0 0 1-1.945.004l-7.663-8.06a1.51 1.51 0 0 1-.001-2.054L8.037.425a1.324 1.324 0 0 1 1.945 0l7.635 8.06a1.51 1.51 0 0 1 .002 2.05l-7.608 8.059zm-1.002-3.74c.466 0 .843-.399.843-.89 0-.492-.377-.891-.843-.891-.466 0-.844.399-.844.89 0 .492.378.891.844.891zm0-2.969a.844.844 0 0 0 .843-.843V5.604a.844.844 0 0 0-1.688 0l.001 5.438c0 .466.378.843.844.843z"
        />
      </g>
    </svg>
  ),
  regular: (children, props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
    >
      {children}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          fill={themes.global.error.base}
          d="M22.585 12.969a.333.333 0 0 0 0-.471l-10.35-10.35a.333.333 0 0 0-.471 0L1.415 12.497a.333.333 0 0 0 0 .471l10.387 10.35c.13.13.341.13.471-.001l10.312-10.348zm-9.603 11.054a1.333 1.333 0 0 1-1.886.003L.71 13.676a1.334 1.334 0 0 1-.002-1.886L11.057 1.44c.52-.52 1.365-.52 1.885 0l10.35 10.35c.52.52.52 1.362.001 1.883L12.982 24.023zM12 19.733a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0-4a1 1 0 0 0 1-1v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1z"
        />
      </g>
    </svg>
  ),
  large: (children, props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="37"
      viewBox="0 0 36 37"
    >
      {children}
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h36v36H0z" />
        <path
          fill={themes.global.error.base}
          d="M33.878 19.086a.5.5 0 0 0-.001-.706L18.353 2.856a.5.5 0 0 0-.707 0L2.123 18.379a.5.5 0 0 0 0 .707l15.58 15.524a.5.5 0 0 0 .707 0l15.468-15.524zm-14.76 16.229a1.5 1.5 0 0 1-2.12.004L1.417 19.795a1.5 1.5 0 0 1-.002-2.123L16.939 2.149a1.5 1.5 0 0 1 2.121 0l15.524 15.524a1.5 1.5 0 0 1 .002 2.12L19.118 35.314zM18 28.733a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0-6a1.5 1.5 0 0 0 1.5-1.5v-10a1.5 1.5 0 1 0-3 0v10a1.5 1.5 0 0 0 1.5 1.5z"
        />
      </g>
    </svg>
  )
};

const ErrorIcon = ({ size, children, ...props }) =>
  errorIcons[size](children, props);

ErrorIcon.displayName = "ErrorIcon";

ErrorIcon.defaultProps = {
  size: sizes.all[0],
  children: null
};

ErrorIcon.propTypes = {
  size: PropTypes.oneOf(sizes.all),
  children: PropTypes.node
};

export default ErrorIcon;
