import React from "react";
import PropTypes from "prop-types";

const CampsiteIcon = ({ size, color, children, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 26 27" {...props}>
    {children}
    <g fill="none" fillRule="evenodd" transform="translate(1 1.85)">
      <circle cx="12" cy="12" r="12.5" fill="#FAFAFA" stroke="#E0E0E0" />
      <path
        fill={color}
        stroke="#262626"
        strokeWidth=".25"
        d="M15.788 17.398l-3.721-6.058-3.737 6.058h7.458zm-10.347.01c.706 0 1.362-.004 2.019.004.141.001.218-.046.291-.165 1.323-2.152 2.65-4.301 3.977-6.45.2-.324.482-.32.682.006 1.325 2.157 2.65 4.314 3.973 6.473.059.095.12.136.237.135.621-.006 1.243-.003 1.865-.003.05 0 .1-.007.184-.012L12.06 6.65 5.441 17.408zM4.026 18c-.064-.392-.01-.59.162-.591.387-.004.002-.007.389.003.14.003.218-.044.292-.164 2.253-3.67 4.51-7.338 6.769-11.003.069-.113.06-.19-.007-.298-.496-.795-.986-1.594-1.476-2.393-.167-.272-.145-.374.109-.554h.14c.086.093.187.176.253.281.41.656.813 1.317 1.22 1.975.053.088.11.175.18.288.053-.08.088-.13.12-.183.427-.694.852-1.39 1.284-2.08.066-.106.168-.188.253-.281h.14c.255.182.275.282.108.553-.49.8-.98 1.599-1.475 2.395-.067.107-.076.183-.006.297 2.265 3.675 4.527 7.353 6.787 11.032.06.097.122.136.237.134.37-.008.01 0 .379-.004.116-.002.145.196.087.593H4.026z"
      />
    </g>
  </svg>
);

CampsiteIcon.displayName = "CampsiteIcon";

CampsiteIcon.defaultProps = {
  color: "currentColor",
  children: null
};

CampsiteIcon.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string,
  children: PropTypes.node
};

export default CampsiteIcon;
