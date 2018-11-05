import React, { PureComponent, createRef } from "react";
import PropTypes from "prop-types";

import { Provider } from "./Context";
import { PLACEHOLDER_IMAGE, BLUR_STYLES } from "./constants";
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
    style: PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    )
  };

  static defaultProps = {
    src: PLACEHOLDER_IMAGE,
    width: null,
    height: null,
    resizeFn: resize,
    style: {}
  };

  constructor(props) {
    super(props);
    const { src, width, height, resizeFn, style } = props;

    /* eslint-disable */
    this.state = {
      src: getLowDefSrc({ src, width, height, resizeFn }),
      style: { ...style, ...BLUR_STYLES },
      imageRef: createRef(),
      load: this.load
    };
    /* eslint-enable */
  }

  componentDidUpdate(prevProps = {}) {
    const { src, style, width, height, resizeFn } = this.props;
    const { src: prevSrc } = prevProps;

    if (src !== prevSrc) {
      /* eslint-disable */
      this.setState({
        src: getLowDefSrc({ src, width, height, resizeFn }),
        style: { ...style, ...BLUR_STYLES }
      });
      /* eslint-enable */
    }
  }

  onload = () => {
    const { imageRef } = this.state;
    if (imageRef && imageRef.current) {
      imageRef.current.style.filter = "none";
    }
  };

  load = ready => {
    const { imageRef } = this.state;
    const { src, width, height, resizeFn } = this.props;

    if (ready && imageRef && imageRef.current) {
      imageRef.current.onload = this.onload;

      const getSrcByDensity = createGetSrcByDensity({
        src,
        width,
        height,
        resizeFn
      });

      const srcAttr = getSrcAttr(imageRef.current);
      const srcVariant = getSrcVariantByAttr(
        imageRef.current,
        srcAttr,
        getSrcByDensity
      );

      if (srcAttr[0] === "s") {
        imageRef.current[srcAttr] = srcVariant;
        return;
      }

      imageRef.current.style.backgroundImage = `url(${srcVariant})`;
      this.onload();
    }
  };

  render() {
    const { children } = this.props;
    return <Provider value={this.state}>{children}</Provider>;
  }
}

export default LazyLoaderProvider;
