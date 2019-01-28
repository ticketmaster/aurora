import React from "react";
import { PropTypes } from "prop-types";
import { smallLarge } from "./iconConstants";
import { themes } from "../../theme";

const editIcons = {
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
        <g transform="translate(0.000000, -1.000000)">
          <rect id="Bounds" x="0" y="1" width="16" height="16" />
          <path
            fill={color}
            {...color !== "currentColor" && { fillOpacity: ".65" }}
            fillRule="nonzero"
            d="M5.05600084,16 L12.5,16 C12.7761424,16 13,16.2238576 13,16.5 C13,16.7761424 12.7761424,17 12.5,17 L3.5,17 C3.22385763,17 3,16.7761424 3,16.5 C3,16.4884881 3.00038904,16.4770671 3.0011547,16.4657494 C2.99963858,16.4437511 2.99951867,16.42123 3.00089827,16.3982456 L3.26824479,11.9441846 C3.2683754,11.9408362 3.26853985,11.937487 3.26873827,11.9341375 C3.27349823,11.8566609 3.29612522,11.7813247 3.33493649,11.7141016 L9.08493649,1.75480947 C9.36107887,1.27651685 9.97266927,1.11264169 10.4509619,1.38878407 L13.0490381,2.88878407 C13.5273307,3.16492644 13.6912059,3.77651685 13.4150635,4.25480947 L7.66506351,14.2141016 C7.62625224,14.2813247 7.57232269,14.3385883 7.50754574,14.3813576 C7.50480442,14.3832955 7.50198615,14.3851125 7.49915163,14.3868998 L5.05600084,16 Z M11.0490381,6.35288568 L8.45096189,4.85288568 L4.45096189,11.7810889 L7.04903811,13.2810889 L11.0490381,6.35288568 Z M11.5490381,5.48686028 L12.5490381,3.75480947 L9.95096189,2.25480947 L8.95096189,3.98686028 L11.5490381,5.48686028 Z M4.21857846,12.8016228 L4.05901699,15.4599574 L6.28142154,13.9926058 L4.21857846,12.8016228 Z"
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
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          fill={color}
          {...color !== "currentColor" && { fillOpacity: ".65" }}
          fillRule="nonzero"
          d="M5.054 22.487l4.854-3.205L18.952 3.62S17.44 2.745 14.418 1L5.375 16.663l-.321 5.824zM4 23.425l.382-6.936a.5.5 0 0 1 .066-.223L13.553.5a1 1 0 0 1 1.365-.365l4.535 2.618c.477.278.64.887.365 1.366l-9.103 15.766a.5.5 0 0 1-.157.168L4.776 23.87A.5.5 0 0 1 4 23.425zm6.031-3.357l-5.4-3.118c-.577-.334-.077-1.2.5-.867l5.4 3.118c.578.334.078 1.2-.5.867zm7.015-12.15l-5.4-3.118c-.577-.334-.077-1.2.5-.866l5.4 3.118c.577.333.077 1.199-.5.866zM4.5 24a.5.5 0 1 1 0-1h15a.5.5 0 1 1 0 1h-15z"
        />
      </g>
    </svg>
  )
};

const EditIcon = ({ size, color, children, ...props }) =>
  editIcons[size](color, children, props);

EditIcon.displayName = "EditIcon";

EditIcon.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(smallLarge),
  color: PropTypes.string
};

EditIcon.defaultProps = {
  children: null,
  size: smallLarge[1],
  color: themes.global.gray01
};

export default EditIcon;
