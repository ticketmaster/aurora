/* global window */
import React from "react";
import PropTypes from "prop-types";

import { Provider } from "./Context";
import constants from "../../theme/constants";

export default class DeviceSizeProvider extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    fallbackDetection: PropTypes.func,
    cssOnly: PropTypes.bool
  };

  static defaultProps = { fallbackDetection: null, cssOnly: false };

  initialState = { isSmall: true }; // eslint-disable-line

  state = this.initialState;

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

    this.smallMedia = window.matchMedia(constants.breakpoints.small);
    this.mediumMedia = window.matchMedia(constants.breakpoints.medium);
    this.largeMedia = window.matchMedia(constants.breakpoints.large);
    this.xLargeMedia = window.matchMedia(constants.breakpoints.xLarge);
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
      isSmall: this.smallMedia.matches,
      isMedium: this.mediumMedia.matches && !this.largeMedia.matches,
      isLarge: this.largeMedia.matches && !this.xLargeMedia.matches,
      isXLarge: this.xLargeMedia.matches,
      cssOnly: false
    }));
  };

  unsubscribe = () => {
    if (this.smallMedia) this.smallMedia.removeListener(this.setSize);
    if (this.mediumMedia) this.mediumMedia.removeListener(this.setSize);
    if (this.largeMedia) this.largeMedia.removeListener(this.setSize);
    if (this.xLargeMedia) this.xLargeMedia.removeListener(this.setSize);
  };

  render() {
    const { fallbackDetection } = this.props;
    const val = fallbackDetection ? fallbackDetection() : this.state;
    return (
      <Provider value={val || this.initialState}>
        {this.props.children}
      </Provider>
    );
  }
}
