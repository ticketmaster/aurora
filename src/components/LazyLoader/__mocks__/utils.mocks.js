import React, { Component } from "react";
import PropTypes from "prop-types";

import { LazyLoader, LazyLoaderProvider, LazyLoaderConsumer } from "../";

export const testResizeFn = ({ src, width, height }) =>
  `${src}/${width}/${height}`;

export class ImgClass extends Component {
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

export const PROPS = {
  src: "https://placekitten.com/g",
  alt: "Test Kitten",
  height: 400,
  width: 400,
  resizeFn: testResizeFn
};

const mergeProps = props => ({ ...PROPS, ...props });

export const renderComponent = (props = {}, renderFn, ref) =>
  renderFn(
    <LazyLoader {...mergeProps(props)}>
      {val => <ImgClass key="test" {...PROPS} {...val} />}
    </LazyLoader>,
    ref
  );

export const renderProviderComponentWithImg = (props = {}, renderFn, ref) =>
  renderFn(
    <LazyLoaderProvider {...mergeProps(props)}>
      <LazyLoaderConsumer>
        {val => <ImgClass key="test" {...PROPS} {...val} />}
      </LazyLoaderConsumer>
    </LazyLoaderProvider>,
    ref
  );

export const renderProviderComponentWithImgAndDiv = (
  props = {},
  renderFn,
  ref
) =>
  renderFn(
    <LazyLoaderProvider {...mergeProps(props)}>
      <LazyLoaderConsumer>
        {val => {
          const { imageRef, backgroundRef, ...rest } = val;
          return (
            <div {...rest} ref={backgroundRef}>
              <ImgClass key="test" {...PROPS} {...rest} imageRef={imageRef} />
            </div>
          );
        }}
      </LazyLoaderConsumer>
    </LazyLoaderProvider>,
    ref
  );

export const createImgWithSrcset = () => ({
  srcset: "",
  src: "",
  style: {}
});

export const createImgWithSrc = () => ({
  src: "",
  style: {}
});

export const createElemByType = elem =>
  elem.type === "img"
    ? {
        srcset: "",
        src: "",
        style: {}
      }
    : {
        style: {}
      };
