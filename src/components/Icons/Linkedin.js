import React from "react";
import PropTypes from "prop-types";

import { themes } from "../../theme";

const LinkedinIcon = ({ color, size, children, ...props }) => (
  <svg {...props} viewBox="0 0 19 18" width={size} height={size} fill={color}>
    {children}
    <path d="M14.78 5.917c-3.138 0-3.559 1.887-3.559 1.887l.004-1.874H6.99v11.648h4.236v-6.353s0-2.133 1.8-2.133c1.013 0 1.378.947 1.378 2.133v6.353h4.234v-6.353c0-3.315-1.441-5.308-3.857-5.308zM.637 17.577h4.219V5.918H.636v11.66zM2.747.638c-1.166 0-2.11.949-2.11 2.12 0 1.171.944 2.12 2.11 2.12 1.164 0 2.109-.949 2.109-2.12 0-1.171-.945-2.12-2.11-2.12z" />
  </svg>
);

LinkedinIcon.displayName = "LinkedinIcon";

LinkedinIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number.isRequired,
  children: PropTypes.node
};

LinkedinIcon.defaultProps = {
  color: themes.global.white.base,
  children: null
};

export default LinkedinIcon;
