import React from "react";
import { PropTypes } from "prop-types";
import { smallLarge } from "./iconConstants";
import { themes } from "../../theme";

const emailIcons = {
  small: (color, children, props) => (
    <svg
      {...props}
      width="16px"
      height="16px"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g>
          <rect id="bounds" x="0" y="0" width="16" height="16" />
          <path
            fill={color}
            {...color !== "currentColor" && { fillOpacity: ".65" }}
            fillRule="nonzero"
            d="M15,4.43425855 L8.2773501,8.91602515 C8.10940039,9.02799162 7.89059961,9.02799162 7.7226499,8.91602515 L1,4.43425855 L1,12.5 C1,12.7761424 1.22385763,13 1.5,13 L14.5,13 C14.7761424,13 15,12.7761424 15,12.5 L15,4.43425855 Z M14.9439568,3.26977022 C14.8606656,3.10948483 14.6931186,3 14.5,3 L1.5,3 C1.30688141,3 1.13933437,3.10948483 1.05604315,3.26977022 L8,7.89907479 L14.9439568,3.26977022 Z M-2.70399954e-14,3.50683619 C-7.96576616e-05,3.50136696 -6.98220838e-05,3.49589325 2.99669269e-05,3.49041737 C0.00518497738,2.66640023 0.674769432,2 1.5,2 L14.5,2 C15.3252306,2 15.994815,2.66640023 15.99997,3.49041737 C16.0000698,3.49589325 16.0000797,3.50136696 16,3.5068362 L16,12.5 C16,13.3284271 15.3284271,14 14.5,14 L1.5,14 C0.671572875,14 -2.64788124e-14,13.3284271 -2.66453458e-14,12.5 L-2.66453458e-14,3.50683619 Z"
            id="Combined-Shape"
          />
        </g>
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
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g>
          <rect id="bounds" x="0" y="0" width="24" height="24" />
          <path
            fill={color}
            {...color !== "currentColor" && { fillOpacity: ".65" }}
            fillRule="nonzero"
            d="M23,6.45690981 L12.2855322,13.9104526 C12.1138997,14.0298491 11.8861003,14.0298491 11.7144678,13.9104526 L1,6.45690981 L1,19.5 C1,19.7761424 1.22385763,20 1.5,20 L22.5,20 C22.7761424,20 23,19.7761424 23,19.5 L23,6.45690981 Z M23,5.23874236 L23,4.5 C23,4.22385763 22.7761424,4 22.5,4 L1.5,4 C1.22385763,4 1,4.22385763 1,4.5 L1,5.23874236 L12,12.8909163 L23,5.23874236 Z M6.65462761e-14,5.50621804 C-5.89125079e-05,5.50178198 -5.89867691e-05,5.49734329 -1.18291725e-09,5.49290319 L9.41469193e-14,4.5 C9.40636525e-14,3.67157288 0.671572875,3 1.5,3 L22.5,3 C23.3284271,3 24,3.67157288 24,4.5 L24,5.4929031 C24.000059,5.49734329 24.0000589,5.50178198 24,5.50621804 L24,19.5 C24,20.3284271 23.3284271,21 22.5,21 L1.5,21 C0.671572875,21 9.43134527e-14,20.3284271 9.41469193e-14,19.5 L9.41469193e-14,5.50621804 Z"
            id="Combined-Shape"
          />
        </g>
      </g>
    </svg>
  )
};

const EmailIcon = ({ size, color, children, ...props }) =>
  emailIcons[size](color, children, props);

EmailIcon.displayName = "EmailIcon";

EmailIcon.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(smallLarge),
  color: PropTypes.string
};

EmailIcon.defaultProps = {
  children: null,
  size: smallLarge[1],
  color: themes.global.gray01
};

export default EmailIcon;
