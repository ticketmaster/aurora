import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { HeaderWithImage, LazyLoader, Button } from "../../../src";

const LazyHeaderWithImageExample = ({
  backgroundImage,
  backgroundImageProps,
  withUnderlay,
  withOverlay,
  withSpotLight,
  children,
  height,
  width
}) => (
  <LazyLoader
    src={backgroundImage}
    height={height}
    width={width}
    style={backgroundImageProps.style || {}}
  >
    {({ src: lazySrc, style: lazyStyle, imageRef, load }) => (
      <Fragment>
        <HeaderWithImage
          withUnderlay={withUnderlay}
          withOverlay={withOverlay}
          withSpotLight={withSpotLight}
          backgroundImage={lazySrc}
          backgroundImageProps={{
            ...backgroundImageProps,
            ref: imageRef,
            style: { ...lazyStyle, ...(backgroundImageProps.style || {}) }
          }}
        >
          {children}
        </HeaderWithImage>
        <Button
          variant="standard"
          style={{ position: "absolute", bottom: "0px", maxWidth: "400px" }}
          onClick={() => load(true)}
        >
          Load image
        </Button>
      </Fragment>
    )}
  </LazyLoader>
);

LazyHeaderWithImageExample.propTypes = {
  backgroundImage: PropTypes.string,
  backgroundImageProps: PropTypes.objectOf(PropTypes.any),
  withOverlay: PropTypes.bool,
  withUnderlay: PropTypes.bool,
  withSpotLight: PropTypes.bool,
  children: PropTypes.node,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
};

LazyHeaderWithImageExample.defaultProps = {
  backgroundImage: null,
  backgroundImageProps: {},
  withOverlay: false,
  withUnderlay: false,
  withSpotLight: false,
  children: null
};

export default LazyHeaderWithImageExample;
