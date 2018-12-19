import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import colors from "../../theme/colors";
import { mediumAndUp, largeAndUp } from "../../theme/mediaQueries";
import SpotLight from "./SpotLight";
import Angle from "./Angle";
import StyledImageSeo from "../Image/Seo.styles";

const SPOTLIGHT_STOPS = [
  "rgb(0, 45, 161)",
  `${colors.azure.base} 55%`,
  "rgb(0, 45, 161)"
];

const SPOTLIGHT_DEG = {
  small: "256deg",
  medium: "260deg",
  large: "262deg"
};

const GradientStyles = styled.span`
  z-index: 1;
  width: 100%;

  background-image: ${props =>
    `linear-gradient(${props.deg.small}, ${props.stops.join(",")})`};
  ${mediumAndUp`
    background-image: ${props =>
      `linear-gradient(${props.deg.medium}, ${props.stops.join(",")})`};
  `} ${largeAndUp`
    background-image: ${props =>
      `linear-gradient(${props.deg.large}, ${props.stops.join(",")})`};
  `};

  &.gradient--overlay:after,
  &.gradient--underlay:after {
    height: 100%;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
  }

  &.gradient--spotlight {
    ${largeAndUp`box-shadow: inset 0 1px 40px 10px rgba(0, 0, 0, 0.15);`};
  }

  &.gradient--underlay.gradient--spotlight:after {
    z-index: -1;
    opacity: 0.8;
    background-image: ${props =>
      `linear-gradient(${props.deg.small}, ${props.stops.join(",")})`};
    ${mediumAndUp`
      background-image: ${props =>
        `linear-gradient(${props.deg.medium}, ${props.stops.join(",")})`};
    `} ${largeAndUp`
      background-image: ${props =>
        `linear-gradient(${props.deg.large}, ${props.stops.join(",")})`};
    `};
  }

  &:not(.gradient--spotlight).gradient--overlay:after {
    z-index: 2;
    opacity: 0.4;
    background-image: linear-gradient(77deg, rgba(0, 0, 0, 0), #000000);
    ${mediumAndUp`
        background-image: linear-gradient(82deg, rgba(0, 0, 0, 0), #000000);
      `};

    ${largeAndUp`
      background-image: linear-gradient(86deg, rgba(0, 0, 0, 0), #000000);
      `};
  }

  &:not(.gradient--spotlight).gradient--underlay:after {
    z-index: -1;
    opacity: 0.8;
    background-image: ${props =>
      `linear-gradient(${props.deg.small}, ${props.stops.join(",")})`};
    ${mediumAndUp`
      background-image: ${props =>
        `linear-gradient(${props.deg.medium}, ${props.stops.join(",")})`};
    `} ${largeAndUp`
      background-image: ${props =>
        `linear-gradient(${props.deg.large}, ${props.stops.join(",")})`};
    `};
  }
`;

const SpotLightWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
`;

class Gradient extends PureComponent {
  render() {
    const {
      src,
      children,
      className,
      stops,
      deg,
      imageRef,
      backgroundRef,
      ...props
    } = this.props;

    const hasSpotLight = className.includes("gradient--spotlight");
    const gradientStops = hasSpotLight ? SPOTLIGHT_STOPS : stops;
    const gradientDeg = hasSpotLight ? SPOTLIGHT_DEG : deg;
    return (
      <GradientStyles
        {...props}
        stops={gradientStops}
        deg={gradientDeg}
        className={className}
        ref={backgroundRef}
      >
        {src && imageRef && <StyledImageSeo src={src} ref={imageRef} />}
        {hasSpotLight && (
          <SpotLightWrapper>
            <SpotLight />
            <Angle />
          </SpotLightWrapper>
        )}
        {children}
      </GradientStyles>
    );
  }
}

Gradient.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  deg: PropTypes.shape({
    small: PropTypes.string.isRequired,
    medium: PropTypes.string.isRequired,
    large: PropTypes.string.isRequired
  }),
  stops: PropTypes.arrayOf(PropTypes.string),
  imageRef: PropTypes.shape({
    current: PropTypes.object
  }),
  backgroundRef: PropTypes.shape({
    current: PropTypes.object
  }),
  src: PropTypes.string
};

Gradient.defaultProps = {
  children: null,
  className: "",
  deg: {
    small: "76deg",
    medium: "80deg",
    large: "81deg"
  },
  stops: [colors.defaultGradient.from, colors.defaultGradient.to],
  imageRef: { current: null },
  backgroundRef: { current: null },
  src: ""
};

export default Gradient;
