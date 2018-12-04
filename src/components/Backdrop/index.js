import React, { Component } from "react";
import PropTypes from "prop-types";

import { ESCAPE } from "../../utils/keyCharCodes";

import { Overlay } from "./index.styles";

export default class Backdrop extends Component {
  static propTypes = {
    /* eslint-disable-next-line react/forbid-prop-types */
    childRef: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
    overlay: PropTypes.bool,
    isVisible: PropTypes.bool,
    animated: PropTypes.bool,
    /* eslint-disable-next-line react/forbid-prop-types */
    overlayProps: PropTypes.object,
    onRequestClose: PropTypes.func
  };

  static defaultProps = {
    overlay: true,
    overlayProps: {},
    onRequestClose: null,
    isVisible: true,
    animated: false
  };

  constructor(props) {
    super(props);

    this.hasListeners = false;
  }

  componentDidMount() {
    if (this.props.isVisible && !this.hasListeners) {
      this.attachListeners();
    }
  }

  componentDidUpdate() {
    const { isVisible } = this.props;

    if (isVisible && !this.hasListeners) {
      this.attachListeners();
    } else if (!isVisible && this.hasListeners) {
      this.detachListeners();
    }
  }

  componentWillUnmount() {
    if (this.hasListeners) {
      this.detachListeners();
    }
  }

  onKeyPress = e => {
    const { onRequestClose } = this.props;

    if (e.keyCode === ESCAPE && onRequestClose) {
      onRequestClose(e);
    }
  };

  attachListeners = () => {
    if (process.browser) {
      document.addEventListener("click", this.handleOutsideClick);
      document.addEventListener("keydown", this.onKeyPress);
      this.hasListeners = true;
    }
  };

  detachListeners = () => {
    if (process.browser) {
      document.removeEventListener("click", this.handleOutsideClick);
      document.removeEventListener("keydown", this.onKeyPress);
      this.hasListeners = false;
    }
  };

  handleOutsideClick = e => {
    const { childRef, onRequestClose } = this.props;

    if (
      onRequestClose &&
      childRef.current &&
      !childRef.current.contains(e.target)
    ) {
      onRequestClose(e);
    }
  };

  render() {
    const { children, overlay, overlayProps, isVisible, animated } = this.props;

    if (overlay) {
      return (
        <Overlay isVisible={isVisible} animated={animated} {...overlayProps}>
          {children}
        </Overlay>
      );
    }

    return children;
  }
}
