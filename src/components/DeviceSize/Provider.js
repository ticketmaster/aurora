/* global window */
import React from "react";
import PropTypes from "prop-types";

import { Provider } from "./Context";
import constants from "../../theme/constants";

export default class DeviceSizeProvider extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    // https://github.com/yannickcr/eslint-plugin-react/issues/1751
    // eslint-disable-next-line
    fallbackDetection: PropTypes.func,
    cssOnly: PropTypes.bool
  };

  static defaultProps = { fallbackDetection: null, cssOnly: false };

  static initialState = {
    isInitialized: false,
    isXSmall: false,
    isSmall: true,
    isMedium: false,
    isLarge: false,
    isXLarge: false,
    cssOnly: false
  };

  static getDerivedStateFromProps(props, state) {
    if (!state.isInitialized && typeof props.fallbackDetection === "function") {
      const fallbackDetectionResult = props.fallbackDetection();

      if (
        typeof fallbackDetectionResult === "object" &&
        fallbackDetectionResult !== null
      ) {
        return {
          ...fallbackDetectionResult
        };
      }
    }

    return null;
  }

  state = DeviceSizeProvider.initialState;

  componentDidMount() {
    if (
      typeof window === "undefined" ||
      typeof window.matchMedia !== "function"
    )
      return;

    if (this.props.cssOnly) {
      this.setSize();
      return;
    }

    this.xSmallMedia = window.matchMedia(constants.breakpoints.xSmallAndDown);
    this.smallMedia = window.matchMedia(constants.breakpoints.small);
    this.mediumMedia = window.matchMedia(constants.breakpoints.medium);
    this.largeMedia = window.matchMedia(constants.breakpoints.large);
    this.xLargeMedia = window.matchMedia(constants.breakpoints.xLarge);

    this.xSmallMedia.addListener(this.setSize);
    this.smallMedia.addListener(this.setSize);
    this.mediumMedia.addListener(this.setSize);
    this.largeMedia.addListener(this.setSize);
    this.xLargeMedia.addListener(this.setSize);
    this.setSize();
  }

  componentDidUpdate() {
    if (!this.props.cssOnly) return;

    this.unsubscribe();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  setSize = () => {
    if (this.props.cssOnly) {
      this.setState(() => ({ cssOnly: true }));
      return;
    }

    this.setState(() => ({
      isInitialized: true,
      isXSmall: this.xSmallMedia.matches,
      isSmall: this.smallMedia.matches && !this.mediumMedia.matches,
      isMedium: this.mediumMedia.matches && !this.largeMedia.matches,
      isLarge: this.largeMedia.matches && !this.xLargeMedia.matches,
      isXLarge: this.xLargeMedia.matches,
      cssOnly: false
    }));
  };

  unsubscribe = () => {
    if (this.xSmallMedia) this.xSmallMedia.removeListener(this.setSize);
    if (this.smallMedia) this.smallMedia.removeListener(this.setSize);
    if (this.mediumMedia) this.mediumMedia.removeListener(this.setSize);
    if (this.largeMedia) this.largeMedia.removeListener(this.setSize);
    if (this.xLargeMedia) this.xLargeMedia.removeListener(this.setSize);
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}
