import React from "react";
import PropTypes from "prop-types";

import { LazyLoader, ResponsiveImage, Column, Button } from "../../../src";

export const resizeFn = ({ src, width, height }) => `${src}/${width}/${height}`;

const LazyResponsiveImageExample = ({ src, alt, height, width, style }) => (
  <LazyLoader
    src={src}
    height={height}
    width={width}
    style={style}
    resizeFn={resizeFn}
  >
    {({ src: lazySrc, style: lazyStyle, imageRef, load }) => (
      <Column style={{ display: "flex", flexDirection: "column" }}>
        <ResponsiveImage
          className="image--lazy"
          src={lazySrc}
          alt={alt}
          height={height}
          width={width}
          style={lazyStyle}
          imageRef={imageRef}
        />
        <Button
          variant="standard"
          style={{ maxWidth: "400px" }}
          onClick={() => load(true)}
        >
          Load image
        </Button>
      </Column>
    )}
  </LazyLoader>
);

LazyResponsiveImageExample.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  )
};

LazyResponsiveImageExample.defaultProps = {
  style: null
};

export default LazyResponsiveImageExample;
