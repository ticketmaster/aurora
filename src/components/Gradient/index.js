import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import {
  DEFAULT_DEG,
  DEFAULT_STOPS,
  OVERLAY_DEG_NOT_SPOTLIGHT,
  OVERLAY_STOPS_NOT_SPOTLIGHT,
  OVERLAY_SHADOW_DEG,
  OVERLAY_SHADOW_STOPS,
  OVERLAY_SHADOW_TOP_DEG,
  OVERLAY_SHADOW_TOP_HEIGHT,
  OVERLAY_SHADOW_TOP_STOPS,
  SPOTLIGHT_DEG,
  SPOTLIGHT_STOPS
} from "./constants";
import { zIndex } from "../../theme";
import { largeAndUp } from "../../theme/mediaQueries";
import {
  linearGradient,
  responsiveBackgroundImage,
  responsiveLinearGradient
} from "../../mixins";
import SpotLight from "./SpotLight";
import Angle from "./Angle";
import StyledImageSeo from "../Image/Seo.styles";

export const GradientStyles = styled.span`
  z-index: ${zIndex.reset};
  width: 100%;

  &.gradient--overlay:after,
  &.gradient--underlay:after,
  &.gradient--overlay-shadow:after {
    content: "";
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
  }

  &.gradient--overlay:after,
  &.gradient--underlay:after {
    height: 100%;
  }

  &.gradient--overlay-shadow:after {
    height: ${OVERLAY_SHADOW_TOP_HEIGHT};
    ${linearGradient({
      deg: OVERLAY_SHADOW_TOP_DEG,
      stops: OVERLAY_SHADOW_TOP_STOPS
    })};
  }

  &.gradient--spotlight {
    ${largeAndUp`box-shadow: inset 0 1px 40px 10px rgba(0, 0, 0, 0.15);`};
  }

  &:not(.gradient--overlay-shadow),
  &.gradient--underlay.gradient--spotlight:after,
  &:not(.gradient--spotlight).gradient--underlay:after {
    ${responsiveLinearGradient};
  }

  &.gradient--overlay-shadow {
    z-index: ${zIndex.reset};
    ${responsiveBackgroundImage};
  }

  &.gradient--underlay.gradient--spotlight:after,
  &:not(.gradient--spotlight).gradient--underlay:after {
    z-index: ${zIndex.unset};
    opacity: 0.8;
  }

  &:not(.gradient--spotlight).gradient--overlay:after {
    z-index: ${zIndex.layout.ads};
    opacity: 0.4;
    ${responsiveLinearGradient({
      deg: OVERLAY_DEG_NOT_SPOTLIGHT,
      stops: OVERLAY_STOPS_NOT_SPOTLIGHT
    })};
  }
`;

export const SpotLightWrapper = styled.div`
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
      backgroundImage,
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
        backgroundImage={backgroundImage}
        stops={gradientStops}
        deg={gradientDeg}
        className={className}
        ref={backgroundRef}
      >
        {backgroundImage &&
          imageRef && <StyledImageSeo src={backgroundImage} ref={imageRef} />}
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
  backgroundImage: PropTypes.string
};

Gradient.defaultProps = {
  children: null,
  className: "",
  deg: DEFAULT_DEG,
  stops: DEFAULT_STOPS,
  imageRef: { current: null },
  backgroundRef: { current: null },
  backgroundImage: ""
};

export { SpotLight, Angle };
export {
  DEFAULT_DEG,
  DEFAULT_STOPS,
  OVERLAY_DEG_NOT_SPOTLIGHT,
  OVERLAY_STOPS_NOT_SPOTLIGHT,
  OVERLAY_SHADOW_DEG,
  OVERLAY_SHADOW_STOPS,
  SPOTLIGHT_DEG,
  SPOTLIGHT_STOPS
};
export default Gradient;
