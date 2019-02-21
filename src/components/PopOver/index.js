import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { themes, constants, spacing, zIndex } from "../../theme";
import {
  popContainersBoxShadow,
  popContainersSharpBoxShadow
} from "../../theme/constants";
import PopOverPortal from "./PopOverPortal";

const StyledPopOver = styled.div`
  background-color: ${themes.global.white.base};
  ${({ noBorders }) =>
    !noBorders && `border: 1px solid ${themes.global.gray02}`};
  border-radius: ${constants.borderRadius.large};
  box-shadow: ${({ noBorders }) =>
    noBorders ? popContainersSharpBoxShadow : popContainersBoxShadow};
  position: absolute;
  max-width: 300px;
  padding: ${spacing.moderate};
  z-index: ${({ zInd }) => zInd};
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  transition: opacity 0.1s ${constants.easing.easeInQuad},
    transform 0.1s ${constants.easing.easeInQuad};

  &.open-enter,
  &.open-appear {
    transition: opacity 0.3s ${constants.easing.easeInOutQuad};
    display: block;
    opacity: 0;
    transform: scale(0.7);
  }

  &.open-enter-active,
  &.open-appear-active {
    transition: opacity 0.3s ${constants.easing.easeInOutQuad},
      transform 0.3s ${constants.easing.easeInOutQuad};
    display: block;
    opacity: 1;
    transform: scale(1);
  }

  &.open-enter-done {
    transition: opacity 0.3s ${constants.easing.easeInOutQuad},
      transform 0.3s ${constants.easing.easeInOutQuad};
    display: block;
    opacity: 1;
    transform: scale(1);
  }

  &.open-exit {
    display: block;
    opacity: 1;
    transform: scale(1);
  }

  &.open-exit-active {
    display: block;
    opacity: 0;
    transform: scale(0.7);
  }
`;

const MIN_SPACE_FROM_EDGE = 24;
const MOBILE_MIN_SPACE_FROM_EDGE = 16;
const MOBILE_MAX_WIDTH = 767;

class PopOver extends Component {
  /*
   * Static function that determines PopOver position.
   * @position(object) - top and bottom position of the elemt that triggers showing PopOver;
   * Mouse horizontal position on the sreen - so we can center the PopOver;
   * Additional container position and size
   * @dimensions(object) - PopOver width and height;
   * Page scroll position
   * Viewport size
   * @reduce(object) - additional top/bottom screen reduction cause by sticky header/footer
   * @inlineWithTarget(boolean) - an optional prop that allows to align PopOver with toggle
   */
  static calculatePosition({
    position,
    dimensions,
    reduce,
    inlineWithTarget,
    spaceFromMouse
  }) {
    const {
      width,
      windowScroll,
      height,
      windowWidth,
      windowHeight
    } = dimensions;
    const { top: reduceTop, bottom: reduceBottom } = reduce;
    const {
      elBottom,
      elTop,
      elLeft,
      elWidth,
      offsetTop,
      clientHeight,
      offsetLeft,
      clientWidth
    } = position;

    if (inlineWithTarget) {
      return {
        x:
          elLeft + width + MIN_SPACE_FROM_EDGE * 2 >= clientWidth
            ? elLeft - width - spacing.gutters.tiny
            : elLeft + elWidth + spacing.gutters.tiny,
        y: windowScroll + elTop
      };
    }

    const viewportTop = windowScroll + reduceTop;
    const viewportBottom = windowScroll + windowHeight - reduceBottom;
    const bottomPosition = windowScroll + elBottom + spaceFromMouse;
    const topPosition = windowScroll + elTop - spaceFromMouse - height;

    const spaceFromEdge =
      windowWidth > MOBILE_MAX_WIDTH
        ? MIN_SPACE_FROM_EDGE
        : MOBILE_MIN_SPACE_FROM_EDGE;

    const containerTop = offsetTop + spaceFromEdge;
    const containerBottom =
      windowScroll + offsetTop + clientHeight - spaceFromEdge;
    const containerLeft = offsetLeft + spaceFromEdge;
    const containerRight = offsetLeft + clientWidth - spaceFromEdge - width;

    const topPositionWithFallback =
      topPosition - spaceFromEdge >= Math.max(viewportTop, containerTop)
        ? topPosition
        : bottomPosition;

    return {
      x: Math.min(
        Math.max(elLeft + elWidth / 2 - width / 2, containerLeft),
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

  constructor(props) {
    super(props);

    this.dimensions = {
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

  componentDidUpdate(prevProps) {
    /*
     * This causes force update of the popover position if we use only one popover and we transiotion from
     * one zone that triggers the popover to another that triggers the same popover but with different place to display
     */
    const {
      position: { elTop, elBottom },
      isVisible,
      inlineWithTarget,
      position,
      reduceTop,
      reduceBottom,
      spaceFromMouse
    } = this.props;

    if (
      (prevProps.position.elTop !== elTop ||
        prevProps.position.elBottom !== elBottom) &&
      isVisible &&
      prevProps.isVisible === isVisible
    ) {
      this.setDimensions();

      const reduce = { top: reduceTop, bottom: reduceBottom };
      this.pos = PopOver.calculatePosition({
        position,
        dimensions: this.dimensions,
        reduce,
        inlineWithTarget,
        spaceFromMouse
      });

      this.myRef.current.style.top = `${this.pos.y}px`;
      this.myRef.current.style.left = `${this.pos.x}px`;
    }
  }

  /*
   * Static function that needs to be called from the parent -> PopOver.getDimensionsFromEvent
   * The parent should pass the click event which will trigger showing the PopOver.
   * By default the PopOver is shown withing the view port. If we need to show it inside
   * certain element we should pass the html element as second parameter.
   * The function will return an object that should be provided to the PopOver as props.
   */
  static getDimensionsFromEvent(e, parent) {
    const {
      y: elTop,
      height: elHeight,
      x: elLeft,
      width: elWidth
    } = e.target.getBoundingClientRect();
    const {
      y: offsetTop = 0,
      height: clientHeight = 100000,
      x: offsetLeft = 0,
      width: clientWidth = 100000
    } =
      parent && parent.getBoundingClientRect
        ? parent.getBoundingClientRect()
        : {};

    return {
      elTop,
      elLeft,
      elWidth,
      elBottom: elTop + elHeight,
      offsetTop,
      clientHeight,
      offsetLeft,
      clientWidth
    };
  }

  setDimensions = () => {
    const { isVisible } = this.props;
    const {
      windowScroll,
      windowWidth,
      windowHeight,
      width,
      height
    } = this.dimensions;
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

    if (Object.keys(dimensions).length) {
      this.dimensions = {
        ...this.dimensions,
        ...dimensions
      };
      return true;
    }

    return false;
  };

  popoverEnter = () => {
    const {
      isVisible,
      inlineWithTarget,
      position,
      reduceTop,
      reduceBottom,
      spaceFromMouse
    } = this.props;

    if (isVisible) {
      this.setDimensions();

      const reduce = { top: reduceTop, bottom: reduceBottom };
      this.pos = PopOver.calculatePosition({
        position,
        dimensions: this.dimensions,
        reduce,
        inlineWithTarget,
        spaceFromMouse
      });
    }

    this.myRef.current.style.top = `${this.pos.y}px`;
    this.myRef.current.style.left = `${this.pos.x}px`;
  };

  render() {
    const { children, isVisible, noBorders, zInd } = this.props;

    return (
      <PopOverPortal>
        <CSSTransition
          in={isVisible}
          key="popover-animation"
          timeout={300}
          classNames="open"
          appear={isVisible}
          onEnter={this.popoverEnter}
        >
          <StyledPopOver
            ref={this.myRef}
            isVisible={isVisible}
            noBorders={noBorders}
            zInd={zInd}
          >
            {children}
          </StyledPopOver>
        </CSSTransition>
      </PopOverPortal>
    );
  }
}

PopOver.propTypes = {
  children: PropTypes.node.isRequired,
  isVisible: PropTypes.bool,
  inlineWithTarget: PropTypes.bool,
  noBorders: PropTypes.bool,
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
  }),
  zInd: PropTypes.number,
  spaceFromMouse: PropTypes.number
};

PopOver.defaultProps = {
  isVisible: false,
  inlineWithTarget: false,
  noBorders: false,
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
  },
  zInd: zIndex.layout.overlay,
  spaceFromMouse: 4
};

PopOver.displayName = "PopOver";

export default PopOver;
