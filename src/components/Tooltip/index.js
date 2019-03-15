import React, { Component } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import Portal from "../PopOver/PopOverPortal";
import PopOver from "../PopOver/index";
import { StyledTooltip } from "./Tooltip.styles";
import SPACE_FROM_MOUSE from "./constants";
import {
  DIRECTIONS,
  TOP,
  LEFT,
  RIGHT,
  BOTTOM,
  VARIANTS,
  LIGHT,
  AUTO,
  ARROW_WIDTH
} from "../constants";
import { constants } from "../../theme";

class Tooltip extends Component {
  constructor(props) {
    super(props);

    this.myRef = React.createRef();
    this.dimensions = {
      width: 0,
      height: 0,
      windowScroll: 0,
      windowWidth: 0,
      windowHeight: 0
    };

    this.pos = {
      x: 0,
      y: 0
    };

    this.actualDirection = props.direction;

    this.state = {
      actualDirection: props.direction,
      arrowAdjustment: 0
    };
  }

  /*
   * Static function that needs to be called from the parent -> Tooltip.getDimensionsFromEvent
   * The parent should pass the click event which will trigger showing the Tooltip.
   * By default the Tooltip is shown withing the view port. If we need to show it inside
   * certain element we should pass the html element as second parameter.
   * The function will return an object that should be provided to the Tooltip as props.
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
      elRight: elLeft + elWidth,
      offsetTop,
      clientHeight,
      offsetLeft,
      clientWidth,
      elHorizontalCenter: elLeft + elWidth / 2,
      elVerticalCenter: elTop + elHeight / 2
    };
  }

  getPositionAndUpdateDirection = ({
    position,
    dimensions,
    spaceFromMouse,
    reduce
  }) => {
    const result = PopOver.calculatePosition({
      position,
      dimensions,
      spaceFromMouse,
      reduce
    });
    const { actualDirection, arrowAdjustment } = this.state;

    const adjustment = this.adjustArrow({
      coords: { x: result.x, width: dimensions.width },
      position
    });

    if (
      result.y < position.elTop + dimensions.windowScroll &&
      (actualDirection !== TOP || arrowAdjustment !== adjustment)
    ) {
      this.actualDirection = TOP;
      this.setState({ actualDirection: TOP, arrowAdjustment: adjustment });
    } else if (
      result.y > position.elTop + dimensions.windowScroll &&
      (actualDirection !== BOTTOM || arrowAdjustment !== adjustment)
    ) {
      this.actualDirection = BOTTOM;
      this.setState({ actualDirection: BOTTOM, arrowAdjustment: adjustment });
    }

    return result;
  };

  getTranslateByDirection = direction => {
    switch (direction) {
      case TOP:
        return "translate(0, 10px)";
      case BOTTOM:
        return "translate(0, -10px)";
      case LEFT:
        return "translate(10px, 0)";
      case RIGHT:
      default:
        return "translate(-10px, 0)";
    }
  };

  adjustArrow = ({ coords, position }) => {
    const reqCenter = position.elHorizontalCenter;
    const currentCenter = coords.x + coords.width / 2;
    const mostLeft = coords.x + ARROW_WIDTH / 2;
    const mostRight = coords.x + coords.width + ARROW_WIDTH / 2;
    const center = Math.min(Math.max(mostLeft, reqCenter), mostRight);

    return center - currentCenter;
  };

  /*
   * Function that determines Tooltip position.
   * @position(object) - top and bottom position of the elemt that triggers showing Tooltip;
   * Mouse horizontal position on the sreen - so we can center the Tooltip;
   * Additional container position and size
   * @size(object) - Tooltip width and height;
   */
  calculatePosition = ({
    direction,
    position,
    dimensions,
    spaceFromMouse,
    reduce
  }) => {
    const { width, height, windowScroll } = dimensions;
    const { elBottom, elTop, elLeft, elRight, elHorizontalCenter } = position;

    const bottomPosition = elBottom + SPACE_FROM_MOUSE;
    const topPosition = elTop - SPACE_FROM_MOUSE - height + windowScroll;

    switch (direction) {
      case TOP:
        return {
          x: elHorizontalCenter - width / 2,
          y: topPosition
        };
      case BOTTOM:
        return {
          x: elHorizontalCenter - width / 2,
          y: bottomPosition + windowScroll
        };
      case LEFT:
        return {
          x: elLeft - width - SPACE_FROM_MOUSE,
          y: elTop + windowScroll
        };
      case RIGHT:
        return {
          x: elRight + SPACE_FROM_MOUSE,
          y: elTop + windowScroll
        };
      default:
        return this.getPositionAndUpdateDirection({
          direction,
          position,
          dimensions,
          spaceFromMouse,
          reduce
        });
    }
  };

  updateSize = () => {
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
        clientWidth,
        clientHeight
      } = global.window.document.documentElement;

      const scrollTop = Math.max(
        global.window.pageYOffset,
        global.document.documentElement.scrollTop,
        global.document.body.scrollTop
      );

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

  tooltipEnter = () => {
    const {
      isVisible,
      position,
      direction,
      spaceFromMouse,
      reduceTop,
      reduceBottom
    } = this.props;

    if (isVisible) {
      const reduce = { top: reduceTop, bottom: reduceBottom };
      this.updateSize();
      this.pos = this.calculatePosition({
        direction,
        position,
        dimensions: this.dimensions,
        spaceFromMouse,
        reduce
      });
    }

    this.myRef.current.style.top = `${this.pos.y}px`;
    this.myRef.current.style.left = `${this.pos.x}px`;
    this.myRef.current.style.transition = `opacity 0.3s ${
      constants.easing.easeOutQuad
    }`;
    this.myRef.current.style.transform = this.getTranslateByDirection(
      this.actualDirection
    );
  };

  tooltipEntering = () => {
    this.myRef.current.style.transition = `opacity 0.3s ${
      constants.easing.easeOutQuad
    },
      transform 0.3s ${constants.easing.easeOutQuad}`;
    this.myRef.current.style.transform = "translate(0)";
  };

  tooltipExit = () => {
    this.myRef.current.style.transition = `opacity 0.1s ${
      constants.easing.easeInQuad
    }`;
  };

  render() {
    const { children, isVisible, variant, ...rest } = this.props;
    const { actualDirection, arrowAdjustment } = this.state;

    return (
      <Portal>
        <CSSTransition
          in={isVisible}
          key="tooltip-animation"
          timeout={300}
          classNames="open"
          onEnter={this.tooltipEnter}
          onEntering={this.tooltipEntering}
          onExit={this.tooltipExit}
          appear={isVisible}
          variant={variant}
        >
          <StyledTooltip
            ref={this.myRef}
            isVisible={isVisible}
            {...rest}
            direction={actualDirection}
            arrowAdjustment={`${arrowAdjustment}px`}
          >
            {children}
          </StyledTooltip>
        </CSSTransition>
      </Portal>
    );
  }
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  isVisible: PropTypes.bool,
  direction: PropTypes.oneOf(DIRECTIONS),
  position: PropTypes.shape({
    elHorizontalCenter: PropTypes.number,
    elVerticalCenter: PropTypes.number,
    elTop: PropTypes.number,
    elBottom: PropTypes.number,
    elLeft: PropTypes.number
  }),
  variant: PropTypes.oneOf(VARIANTS),
  spaceFromMouse: PropTypes.number,
  reduceTop: PropTypes.number,
  reduceBottom: PropTypes.number
};

Tooltip.defaultProps = {
  isVisible: false,
  direction: AUTO,
  variant: LIGHT,
  position: {
    mouseX: 0,
    elTop: 0,
    elBottom: 0,
    offsetTop: 0,
    clientHeight: 0,
    offsetLeft: 0,
    clientWidth: 0
  },
  spaceFromMouse: SPACE_FROM_MOUSE,
  reduceTop: 0,
  reduceBottom: 0
};

Tooltip.displayName = "Tooltip";

export default Tooltip;
