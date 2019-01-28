import React from "react";
import { PropTypes } from "prop-types";
import { themes } from "../../theme";

const CheckingAccountIcon = ({ children, color, ...props }) => (
  <svg
    {...props}
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g>
        <rect id="Bounds" x="0" y="0" width="24" height="24" />
        <path
          fill={color}
          {...color !== "currentColor" && { fillOpacity: ".65" }}
          fillRule="nonzero"
          d="M20,16 L20,5 L1,5 L1,16 L20,16 Z M20.5,17 L0.5,17 C0.223857625,17 0,16.7761424 0,16.5 L0,4.5 C0,4.22385763 0.223857625,4 0.5,4 L20.5,4 C20.7761424,4 21,4.22385763 21,4.5 L21,16.5 C21,16.7761424 20.7761424,17 20.5,17 Z M2.5,10 C2.22385763,10 2,9.77614237 2,9.5 C2,9.22385763 2.22385763,9 2.5,9 L9.5,9 C9.77614237,9 10,9.22385763 10,9.5 C10,9.77614237 9.77614237,10 9.5,10 L2.5,10 Z M2.5,14 C2.22385763,14 2,13.7761424 2,13.5 C2,13.2238576 2.22385763,13 2.5,13 L18.5,13 C18.7761424,13 19,13.2238576 19,13.5 C19,13.7761424 18.7761424,14 18.5,14 L2.5,14 Z M18.5,7 C18.7761424,7 19,7.22385763 19,7.5 L19,9.5 C19,9.77614237 18.7761424,10 18.5,10 L12.5,10 C12.2238576,10 12,9.77614237 12,9.5 L12,7.5 C12,7.22385763 12.2238576,7 12.5,7 L18.5,7 Z M18,8 L13,8 L13,9 L18,9 L18,8 Z M22,18 L22,6.5 C22,6.22385763 22.2238576,6 22.5,6 C22.7761424,6 23,6.22385763 23,6.5 L23,18.5 C23,18.7761424 22.7761424,19 22.5,19 L2.5,19 C2.22385763,19 2,18.7761424 2,18.5 C2,18.2238576 2.22385763,18 2.5,18 L22,18 Z"
          id="Combined-Shape"
        />
      </g>
    </g>
  </svg>
);

CheckingAccountIcon.displayName = "CheckingAccountIcon";

CheckingAccountIcon.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string
};

CheckingAccountIcon.defaultProps = {
  children: null,
  color: themes.global.gray01
};

export default CheckingAccountIcon;
