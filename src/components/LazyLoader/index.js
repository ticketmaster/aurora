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
  children,
  tag
}) => (
  <LazyLoaderProvider
    src={src}
    height={height}
    width={width}
    style={style}
    resizeFn={resizeFn}
    tag={tag}
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
  ),
  tag: PropTypes.string
};

LazyLoader.defaultProps = {
  src: PLACEHOLDER_IMAGE,
  width: null,
  height: null,
  resizeFn: resize,
  style: {},
  tag: "img"
};

export { LazyLoaderProvider, LazyLoaderConsumer };
