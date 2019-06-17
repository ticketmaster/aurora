import { PureComponent, createRef } from "react";
import PropTypes from "prop-types";

import {
  PLACEHOLDER_IMAGE,
  BLUR_STYLES,
  DEFAULT_DEVICE_PIXEL_RATIOS,
  DEFAULT_TARGET_DENSITY
} from "./constants";
import {
  resize,
  createGetSrcByDensity,
  getSrcAttr,
  getSrcVariantByAttr
} from "./helpers";

// eslint-disable-next-line import/prefer-default-export
export class LazyLoader extends PureComponent {
  static propTypes = {
    children: PropTypes.func.isRequired,
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
    const { tag, style } = props;

    /* eslint-disable */
    this.state = {
      src: PLACEHOLDER_IMAGE,
      style: { ...style, ...BLUR_STYLES },
      imageRef: createRef(),
      backgroundRef: tag === "img" ? null : createRef(),
      load: this.load,
      isLoaded: false
    };
    /* eslint-enable */
  }

  componentDidUpdate(prevProps = {}) {
    const { src, style } = this.props;
    const { src: prevSrc } = prevProps;

    if (src !== prevSrc) {
      this.applyBlurs();

      /* eslint-disable-next-line react/no-did-update-set-state */
      this.setState(
        () => ({
          imageRef: null,
          backgroundRef: null,
          /* eslint-disable-next-line react/no-unused-state */
          src: PLACEHOLDER_IMAGE,
          /* eslint-disable-next-line react/no-unused-state */
          style: { ...style, ...BLUR_STYLES },
          isLoaded: false
        }),
        () => {
          this.setState({
            imageRef: createRef(),
            backgroundRef: createRef()
          });
        }
      );
    }
  }

  onLoad = () => {
    const { imageRef, backgroundRef } = this.state;

    if (imageRef && imageRef.current) {
      imageRef.current.style.filter = "none";

      if (!backgroundRef) {
        this.setState(() => ({
          isLoaded: true
        }));
      }
    }
  };

  onLoadBg = srcVariant => {
    const { backgroundRef } = this.state;

    if (backgroundRef && backgroundRef.current) {
      backgroundRef.current.style.backgroundImage = `url(${srcVariant})`;
      backgroundRef.current.style.filter = "none";

      this.setState(() => ({
        isLoaded: true
      }));
    }
  };

  onLoadBoth = srcVariant => () => {
    this.onLoad();
    this.onLoadBg(srcVariant);
  };

  applyBlurs = () => {
    const { imageRef, backgroundRef } = this.state;

    if (imageRef && imageRef.current) {
      imageRef.current.style.filter = "blur(10px)";
      imageRef.current.src = "";
      imageRef.current.srcset = "";
    }

    if (backgroundRef && backgroundRef.current)
      backgroundRef.current.style.filter = "blur(10px)";
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
    return children(this.state);
  }
}
