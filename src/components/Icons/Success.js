import React from "react";
import { PropTypes } from "prop-types";
import { allSizes, types } from "./iconConstants";
import { themes } from "../../theme";

const successIcons = {
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
            d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12zm0 1A7 7 0 1 1 8 1a7 7 0 0 1 0 14zM6.537 9.738l4.242-4.243a.667.667 0 1 1 .943.943l-4.714 4.714a.667.667 0 0 1-.943 0l-2.37-2.37a.667.667 0 0 1 .943-.943l1.899 1.899z"
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
            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 1C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm-1.758-8.343l6.364-6.364a1 1 0 0 1 1.414 1.414l-7.071 7.071a1 1 0 0 1-1.414 0L5.98 13.223a1 1 0 0 1 1.414-1.414l2.848 2.848z"
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
            d="M18 34c8.837 0 16-7.163 16-16S26.837 2 18 2 2 9.163 2 18s7.163 16 16 16zm0 1C8.611 35 1 27.389 1 18S8.611 1 18 1s17 7.611 17 17-7.611 17-17 17zm-2.637-12.818l9.546-9.546a1.5 1.5 0 1 1 2.121 2.121L16.424 25.364a1.5 1.5 0 0 1-2.122 0L8.97 20.032a1.5 1.5 0 1 1 2.121-2.122l4.272 4.272z"
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
          <path
            d="M8.9939295,9.65146578 L8.9939295,3.65146578 C8.9939295,3.28327594 9.29240634,2.98479911 9.66059617,2.98479911 C10.028786,2.98479911 10.3272628,3.28327594 10.3272628,3.65146578 L10.3272628,10.3181324 C10.3272628,10.6863223 10.028786,10.9847991 9.66059617,10.9847991 L6.30900205,10.9847991 C5.94081222,10.9847991 5.64233538,10.6863223 5.64233538,10.3181324 C5.64233538,9.94994261 5.94081222,9.65146578 6.30900205,9.65146578 L8.9939295,9.65146578 Z"
            fill="#FFFFFF"
            transform="translate(7.984799, 6.984799) rotate(45.000000) translate(-7.984799, -6.984799) "
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
          <path
            d="M13.7212986,14.7175144 L13.7212986,5.71751442 C13.7212986,5.16522967 14.1672688,4.71751442 14.7174008,4.71751442 C15.2675329,4.71751442 15.7135031,5.16522967 15.7135031,5.71751442 L15.7135031,15.7175144 C15.7135031,16.2697992 15.2675329,16.7175144 14.7174008,16.7175144 L9.7096053,16.7175144 C9.15947323,16.7175144 8.71350308,16.2697992 8.71350308,15.7175144 C8.71350308,15.1652297 9.15947323,14.7175144 9.7096053,14.7175144 L13.7212986,14.7175144 Z"
            fill="#FFFFFF"
            transform="translate(12.213503, 10.717514) rotate(45.000000) translate(-12.213503, -10.717514) "
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
          <path
            d="M20.6224413,22.2530483 L20.6224413,8.75304833 C20.6224413,7.9246212 21.3232516,7.25304833 22.1877448,7.25304833 C23.0522381,7.25304833 23.7530483,7.9246212 23.7530483,8.75304833 L23.7530483,23.7530483 C23.7530483,24.5814755 23.0522381,25.2530483 22.1877448,25.2530483 L14.3183518,25.2530483 C13.4538586,25.2530483 12.7530483,24.5814755 12.7530483,23.7530483 C12.7530483,22.9246212 13.4538586,22.2530483 14.3183518,22.2530483 L20.6224413,22.2530483 Z"
            fill="#FFFFFF"
            transform="translate(18.253048, 16.253048) rotate(45.000000) translate(-18.253048, -16.253048) "
          />
        </g>
      </svg>
    )
  }
};

const SuccessIcon = ({ color, type, size, children, ...props }) =>
  successIcons[type][size](color, children, props);

SuccessIcon.displayName = "SuccessIcon";

SuccessIcon.defaultProps = {
  type: types[0],
  size: allSizes[0],
  children: null,
  color: themes.global.success.base
};

SuccessIcon.propTypes = {
  type: PropTypes.oneOf(types),
  size: PropTypes.oneOf(allSizes),
  children: PropTypes.node,
  color: PropTypes.string
};

export default SuccessIcon;
