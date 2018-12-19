import React, { PureComponent, createRef } from "react";
import PropTypes from "prop-types";

import { Provider } from "./Context";
import {
  PLACEHOLDER_IMAGE,
  BLUR_STYLES,
  DEFAULT_DEVICE_PIXEL_RATIOS,
  DEFAULT_TARGET_DENSITY
} from "./constants";
import {
  resize,
  getLowDefSrc,
  createGetSrcByDensity,
  getSrcAttr,
  getSrcVariantByAttr
} from "./helpers";

class LazyLoaderProvider extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    src: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    resizeFn: PropTypes.func,
    targetDensity: PropTypes.number,
    devicePixelRatios: PropTypes.arrayOf(PropTypes.number),
    style: PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
    tag: PropTypes.string
  };

  static defaultProps = {
    src: PLACEHOLDER_IMAGE,
    width: null,
    height: null,
    resizeFn: resize,
    targetDensity: DEFAULT_TARGET_DENSITY,
    devicePixelRatios: DEFAULT_DEVICE_PIXEL_RATIOS,
    style: {},
    tag: "img"
  };

  constructor(props) {
    super(props);
    const { src, width, height, tag, resizeFn, style } = props;

    /* eslint-disable */
    this.state = {
      src: getLowDefSrc({ src, width, height, resizeFn }),
      style: { ...style, ...BLUR_STYLES },
      imageRef: createRef(),
      backgroundRef: tag === "img" ? null : createRef(),
      load: this.load
    };
    /* eslint-enable */
  }

  componentDidUpdate(prevProps = {}) {
    const { src, style, width, height, resizeFn } = this.props;
    const { src: prevSrc } = prevProps;

    if (src !== prevSrc) {
      /* eslint-disable-next-line react/no-did-update-set-state */
      this.setState({
        /* eslint-disable-next-line react/no-unused-state */
        src: getLowDefSrc({ src, width, height, resizeFn }),
        /* eslint-disable-next-line react/no-unused-state */
        style: { ...style, ...BLUR_STYLES }
      });
    }
  }

  onLoad = () => {
    const { imageRef } = this.state;

    if (imageRef && imageRef.current) {
      imageRef.current.style.filter = "none";
    }
  };

  onLoadBg = srcVariant => {
    const { backgroundRef } = this.state;

    if (backgroundRef && backgroundRef.current) {
      backgroundRef.current.style.backgroundImage = `url(${srcVariant})`;
      backgroundRef.current.style.filter = "none";
    }
  };

  onLoadBoth = srcVariant => () => {
    this.onLoad();
    this.onLoadBg(srcVariant);
  };

  load = ready => {
    const { imageRef, backgroundRef } = this.state;
    const {
      src,
      width,
      height,
      resizeFn,
      targetDensity,
      devicePixelRatios
    } = this.props;

    if (ready && imageRef && imageRef.current) {
      if (!backgroundRef) imageRef.current.onload = this.onLoad;

      const getSrcByDensity = createGetSrcByDensity({
        src,
        width,
        height,
        resizeFn
      });

      const srcAttr = backgroundRef ? "src" : getSrcAttr(imageRef.current);
      const srcVariant = getSrcVariantByAttr(
        imageRef.current,
        srcAttr,
        devicePixelRatios,
        targetDensity,
        getSrcByDensity
      );

      if (backgroundRef) imageRef.current.onload = this.onLoadBoth(srcVariant);
      imageRef.current[srcAttr] = srcVariant;
    }
  };

  render() {
    const { children } = this.props;
    return <Provider value={this.state}>{children}</Provider>;
  }
}

export default LazyLoaderProvider;
