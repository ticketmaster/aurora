import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { themes, constants, spacing } from "../../theme";

const StyledPopOver = styled.div`
  background-color: ${themes.global.white.base};
  border: 1px solid ${themes.global.gray02};
  border-radius: ${constants.borderRadius.large};
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.12);
  position: absolute;
  max-width: 260px;
  padding: ${spacing.moderate};
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
`;

const MIN_SPACE_FROM_EDGE = 24;
const MOBILE_MIN_SPACE_FROM_EDGE = 16;
const MOBILE_MAX_WIDTH = 767;
const SPACE_FROM_MOUSE = 10;

class PopOver extends Component {
  static getDimensionsFromEvent(e, parent = {}) {
    const { clientX: mouseX } = e;
    const { offsetTop: elTop, clientHeight: elHeight } = e.currentTarget;
    const {
      offsetTop: offsetTop = 0,
      clientHeight: clientHeight = 100000,
      offsetLeft: offsetLeft = 0,
      clientWidth: clientWidth = 100000
    } = parent;

    return {
      mouseX,
      elTop,
      elBottom: elTop + elHeight,
      offsetTop,
      clientHeight,
      offsetLeft,
      clientWidth
    };
  }

  static calculatePosition(position, state, reduce) {
    const { width, windowScroll, height, windowWidth, windowHeight } = state;
    const { top: reduceTop, bottom: reduceBottom } = reduce;
    const {
      elBottom,
      elTop,
      mouseX,
      offsetTop,
      clientHeight,
      offsetLeft,
      clientWidth
    } = position;

    const viewportTop = windowScroll + reduceTop;
    const viewportBottom = windowScroll + windowHeight - reduceBottom;
    const bottomPosition = elBottom + SPACE_FROM_MOUSE;
    const topPosition = elTop - SPACE_FROM_MOUSE - height;

    const spaceFromEdge =
      windowWidth > MOBILE_MAX_WIDTH
        ? MIN_SPACE_FROM_EDGE
        : MOBILE_MIN_SPACE_FROM_EDGE;

    const containerTop = offsetTop + spaceFromEdge;
    const containerBottom = offsetTop + clientHeight - spaceFromEdge;
    const containerLeft = offsetLeft + spaceFromEdge;
    const containerRight = offsetLeft + clientWidth - spaceFromEdge - width;

    const topPositionWithFallback =
      topPosition - spaceFromEdge >= Math.max(viewportTop, containerTop)
        ? topPosition
        : bottomPosition;

    return {
      x: Math.min(
        Math.max(0 + spaceFromEdge, mouseX - width / 2, containerLeft),
        windowWidth - spaceFromEdge - width,
        containerRight
      ),
      y:
        bottomPosition + height + spaceFromEdge <=
        Math.min(viewportBottom, containerBottom)
          ? bottomPosition
          : topPositionWithFallback
    };
  }

  static getDerivedStateFromProps(props) {
    if (!props.isVisible) {
      return {
        width: 0,
        height: 0
      };
    }

    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      height: 0,
      windowScroll: 0,
      windowWidth: 0,
      windowHeight: 0
    };

    this.myRef = React.createRef();

    this.pos = {
      x: 0,
      y: 0
    };
  }

  componentDidUpdate() {
    if (this.myRef.current) {
      this.setDimensions();
    }
  }

  setDimensions = () => {
    const { isVisible } = this.props;
    const {
      windowScroll,
      windowWidth,
      windowHeight,
      width,
      height
    } = this.state;
    const dimensions = {};
    if (global.window && isVisible) {
      const {
        scrollTop,
        clientWidth,
        clientHeight
      } = global.window.document.documentElement;

      if (scrollTop !== windowScroll) {
        dimensions.windowScroll = scrollTop;
      }

      if (clientWidth !== windowWidth) {
        dimensions.windowWidth = clientWidth;
      }

      if (clientHeight !== windowHeight) {
        dimensions.windowHeight = clientHeight;
      }
    }

    if (this.myRef.current) {
      const { clientWidth, clientHeight } = this.myRef.current;

      if (width !== clientWidth && clientWidth) {
        dimensions.width = clientWidth;
      }

      if (height !== clientHeight && clientHeight) {
        dimensions.height = clientHeight;
      }
    }

    if (
      Object.keys(dimensions).length &&
      dimensions.width &&
      dimensions.height
    ) {
      this.setState(dimensions);
      return true;
    }

    return false;
  };

  render() {
    const {
      children,
      isVisible,
      position,
      reduceTop,
      reduceBottom
    } = this.props;
    if (isVisible && !this.setDimensions()) {
      this.pos = PopOver.calculatePosition(position, this.state, {
        top: reduceTop,
        bottom: reduceBottom
      });
    }

    return (
      <StyledPopOver
        innerRef={this.myRef}
        isVisible={isVisible}
        left={this.pos.x}
        top={this.pos.y}
      >
        {children}
      </StyledPopOver>
    );
  }
}

PopOver.propTypes = {
  children: PropTypes.node.isRequired,
  isVisible: PropTypes.bool,
  reduceTop: PropTypes.number,
  reduceBottom: PropTypes.number,
  position: PropTypes.shape({
    mouseX: PropTypes.number,
    elTop: PropTypes.number,
    elBottom: PropTypes.number,
    offsetTop: PropTypes.number,
    clientHeight: PropTypes.number,
    offsetLeft: PropTypes.number,
    clientWidth: PropTypes.number
  })
};

PopOver.defaultProps = {
  isVisible: false,
  reduceTop: 0,
  reduceBottom: 0,
  position: {
    mouseX: 0,
    elTop: 0,
    elBottom: 0,
    offsetTop: 0,
    clientHeight: 0,
    offsetLeft: 0,
    clientWidth: 0
  }
};

PopOver.displayName = "PopOver";

export default PopOver;
