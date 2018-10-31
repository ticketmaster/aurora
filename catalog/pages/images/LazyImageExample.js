import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import { LazyLoader } from "../../../src/components/LazyLoader";
import { Button } from "../../../src/components/Button";

const resizeFn = ({ src, width, height }) => `${src}/${width}/${height}`;

class ImgClass extends Component {
  static propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    style: PropTypes.objectOf(PropTypes.string),
    imageRef: PropTypes.shape({}).isRequired
  };

  static defaultProps = {
    style: {}
  };

  render() {
    const { src, alt, height, width, style, imageRef } = this.props;
    return (
      <img
        src={src}
        alt={alt}
        height={height}
        width={width}
        style={style}
        ref={imageRef}
      />
    );
  }
}

const LazyImageExample = ({ src, alt, height, width, style }) => (
  <LazyLoader
    src={src}
    height={height}
    width={width}
    style={style}
    resizeFn={resizeFn}
  >
    {({ src: lazySrc, style: lazyStyle, imageRef, load }) => (
      <Fragment>
        <ImgClass
          className="image--lazy"
          src={lazySrc}
          alt={alt}
          height={height}
          width={width}
          style={lazyStyle}
          imageRef={imageRef}
        />
        <Button variant="standard" onClick={() => load(true)}>
          Load image
        </Button>
      </Fragment>
    )}
  </LazyLoader>
);

LazyImageExample.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  )
};

LazyImageExample.defaultProps = {
  style: null
};

export default LazyImageExample;
