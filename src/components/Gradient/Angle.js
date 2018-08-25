import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Angle = ({ className }) => (
  <svg
    viewBox="0 0 476 218"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    preserveAspectRatio="xMaxYMid meet"
    className={className}
  >
    <defs>
      <linearGradient
        x1="21.6784013%"
        y1="112.586732%"
        x2="53.474493%"
        y2="23.9282924%"
        id="Angle-linearGradient-1"
      >
        <stop stopColor="#000000" stopOpacity="0" offset="0%" />
        <stop stopColor="#000000" offset="100%" />
        <stop stopColor="#000000" offset="100%" />
      </linearGradient>
    </defs>
    <g
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
      opacity="0.0490513393"
    >
      <g
        transform="translate(-1016.000000, -184.000000)"
        fill="url(#Angle-linearGradient-1)"
        fillRule="nonzero"
      >
        <g transform="translate(52.000000, 184.000000)">
          <g transform="translate(-20.000000, 0.000000)">
            <polygon
              transform="translate(1222.334169, 109.000000) scale(-1, 1) translate(-1222.334169, -109.000000) "
              points="984.668337 0 1460 218 984.668337 218"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

Angle.propTypes = {
  className: PropTypes.string
};

Angle.defaultProps = {
  className: ""
};

export default styled(Angle)`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 100%;
  width: auto;
`;
