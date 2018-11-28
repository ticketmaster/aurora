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

  componentDidMount() {
    document.addEventListener("click", this.handleOutsideClick);
    document.addEventListener("keydown", this.onKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleOutsideClick);
    document.removeEventListener("keydown", this.onKeyPress);
  }

  onKeyPress = e => {
    const { onRequestClose } = this.props;

    if (e.keyCode === ESCAPE && onRequestClose) {
      onRequestClose(e);
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
