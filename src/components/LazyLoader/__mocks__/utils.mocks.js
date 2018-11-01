import React from "react";

import { LazyLoader, LazyLoaderProvider, LazyLoaderConsumer } from "../";
import {
  ImgClass,
  resizeFn as testResizeFn
} from "../../../../catalog/pages/images/LazyImageExample";

const PROPS = {
  src: "http://placekitten.com/g",
  alt: "Test Kitten",
  height: 400,
  width: 400,
  resizeFn: testResizeFn
};

export const renderComponent = (props = {}, renderFn, ref) =>
  renderFn(
    <LazyLoader {...PROPS} {...props}>
      {val => <ImgClass key="test" {...PROPS} {...val} />}
    </LazyLoader>,
    ref
  );

export const renderProviderComponent = (props = {}, renderFn, ref) =>
  renderFn(
    <LazyLoaderProvider {...PROPS} {...props}>
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
