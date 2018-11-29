import React from "react";

import { LazyLoader, LazyLoaderProvider, LazyLoaderConsumer } from "../";
import {
  ImgClass,
  resizeFn as testResizeFn
} from "../../../../catalog/pages/images/LazyImageExample";

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

export const renderProviderComponent = (props = {}, renderFn, ref) =>
  renderFn(
    <LazyLoaderProvider {...mergeProps(props)}>
      <LazyLoaderConsumer>
        {val => <ImgClass key="test" {...PROPS} {...val} />}
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

export const createDiv = () => ({
  style: {}
});
