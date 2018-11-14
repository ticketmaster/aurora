import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import GRADIENT_VARIANTS from "./constants";

const styleVariants = {
  standard: {
    width: "auto",
    preserveAspectRatio: "xMinYMid meet"
  },
  special: {
    width: "100%",
    preserveAspectRatio: "none"
  }
};

const SpotLight = ({ className, variant }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 1440 218"
    preserveAspectRatio={styleVariants[variant].preserveAspectRatio}
    className={className}
  >
    <defs>
      <linearGradient id="a" x1="61.654%" x2="3.355%" y1="100%" y2="0%">
        <stop offset="0%" stopColor="#024691" />
        <stop offset="52.996%" stopColor="#BADBFE" />
        <stop offset="100%" stopColor="#C56BFF" />
      </linearGradient>
      <linearGradient
        id="c"
        x1="74.395%"
        x2=".532%"
        y1="129.212%"
        y2="-28.101%"
      >
        <stop offset="0%" stopOpacity="0" />
        <stop offset="100%" stopOpacity=".4" />
        <stop offset="100%" />
        <stop offset="100%" stopOpacity=".4" />
      </linearGradient>
      <path id="b" d="M0 .748h138.365l1325.043 217.52H413.554z" />
    </defs>
    <g fill="none" fillRule="nonzero" opacity=".102" transform="translate(-20)">
      <use fill="url(#a)" xlinkHref="#b" />
      <use fill="url(#c)" xlinkHref="#b" />
    </g>
  </svg>
);

SpotLight.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(Object.values(GRADIENT_VARIANTS))
};

SpotLight.defaultProps = {
  className: "",
  variant: "standard"
};

export default styled(SpotLight)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: ${({ variant }) => styleVariants[variant].width};
  height: 100%;
`;
