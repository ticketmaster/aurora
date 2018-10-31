import React from "react";
import PropTypes from "prop-types";

import LazyLoaderProvider from "./Provider";
import { LazyLoaderConsumer } from "./Context";
import { resize } from "./helpers";
import { PLACEHOLDER_IMAGE } from "./constants";

export const LazyLoader = ({
  src,
  height,
  width,
  style,
  resizeFn,
  children
}) => (
  <LazyLoaderProvider
    src={src}
    height={height}
    width={width}
    style={style}
    resizeFn={resizeFn}
  >
    <LazyLoaderConsumer>{value => children(value)}</LazyLoaderConsumer>
  </LazyLoaderProvider>
);

LazyLoader.propTypes = {
  children: PropTypes.func.isRequired,
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  resizeFn: PropTypes.func,
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  )
};

LazyLoader.defaultProps = {
  src: PLACEHOLDER_IMAGE,
  width: null,
  height: null,
  resizeFn: resize,
  style: {}
};

export { LazyLoaderProvider, LazyLoaderConsumer };
