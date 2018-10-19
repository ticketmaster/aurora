import React, { Component } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import StyledTooltip from "./Tooltip.styles";
import { directions, SPACE_FROM_MOUSE, variants } from "./constants";

class Tooltip extends Component {
  /*
   * Static function that needs to be called from the parent -> Tooltip.getDimensionsFromEvent
   * The parent should pass the click event which will trigger showing the Tooltip.
   * By default the Tooltip is shown withing the view port. If we need to show it inside
   * certain element we should pass the html element as second parameter.
   * The function will return an object that should be provided to the Tooltip as props.
   */
  static getDimensionsFromEvent(e) {
    const {
      offsetTop: elTop,
      clientHeight: elHeight,
      clientWidth: elWidth,
      offsetLeft: elLeft
    } = e.currentTarget;

    return {
      elHorizontalCenter: elLeft + elWidth / 2,
      elVerticalCenter: elTop + elHeight / 2,
      elTop,
      elBottom: elTop + elHeight,
      elLeft,
      elRight: elLeft + elWidth
    };
  }

  /*
   * Function that determines Tooltip position.
   * @position(object) - top and bottom position of the elemt that triggers showing Tooltip;
   * Mouse horizontal position on the sreen - so we can center the Tooltip;
   * Additional container position and size
   * @size(object) - Tooltip width and height;
   */
  static calculatePosition(direction, position, size) {
    const { width, height } = size;
    const { elBottom, elTop, elLeft, elRight, elHorizontalCenter } = position;

    const bottomPosition = elBottom + SPACE_FROM_MOUSE;
    const topPosition = elTop - SPACE_FROM_MOUSE - height;

    switch (direction) {
      case directions.top:
        return {
          x: elHorizontalCenter - width / 2,
          y: topPosition
        };
      case directions.bottom:
        return {
          x: elHorizontalCenter - width / 2,
          y: bottomPosition
        };
      case directions.left:
        return {
          x: elLeft - width - SPACE_FROM_MOUSE,
          y: elTop
        };
      case directions.right:
        return {
          x: elRight + SPACE_FROM_MOUSE,
          y: elTop
        };
      default:
        return {
          x: elHorizontalCenter - width / 2,
          y: topPosition
        };
    }
  }

  constructor(props) {
    super(props);

    this.myRef = React.createRef();
    this.size = {};

    this.pos = {
      x: 0,
      y: 0
    };
  }

  componentDidUpdate(prevProps) {
    /*
     * This causes force update of the tooltip position if we use only one tooltip and we transiotion from
     * one zone that triggers the tooltip to another that triggers the same tooltip but with different place to display
     */
    const {
      position: { elHorizontalCenter, elVerticalCenter },
      isVisible,
      direction,
      position
    } = this.props;
    if (
      (prevProps.position.elHorizontalCenter !== elHorizontalCenter ||
        prevProps.position.elVerticalCenter !== elVerticalCenter) &&
      isVisible &&
      prevProps.isVisible === isVisible
    ) {
      this.updateSize();
      this.pos = Tooltip.calculatePosition(direction, position, this.size);

      this.myRef.current.style.top = `${this.pos.y}px`;
      this.myRef.current.style.left = `${this.pos.x}px`;
    }
  }

  updateSize = () => {
    const { width, height } = this.size;
    const size = {};

    if (this.myRef.current) {
      const { clientWidth, clientHeight } = this.myRef.current;

      if (width !== clientWidth && clientWidth) {
        size.width = clientWidth;
      }

      if (height !== clientHeight && clientHeight) {
        size.height = clientHeight;
      }
    }

    if (size.width || size.height) {
      this.size = {
        ...this.size,
        ...size
      };
      return true;
    }

    return false;
  };

  tooltipEnter = () => {
    const { isVisible, position, direction } = this.props;

    if (isVisible) {
      this.updateSize();
      this.pos = Tooltip.calculatePosition(direction, position, this.size);
    }

    this.myRef.current.style.top = `${this.pos.y}px`;
    this.myRef.current.style.left = `${this.pos.x}px`;
  };

  render() {
    const { children, isVisible, direction, variant } = this.props;

    return (
      <CSSTransition
        in={isVisible}
        key="tooltip-animation"
        timeout={300}
        classNames="open"
        onEnter={this.tooltipEnter}
        variant={variant}
      >
        <StyledTooltip
          innerRef={this.myRef}
          isVisible={isVisible}
          direction={direction}
        >
          {children}
        </StyledTooltip>
      </CSSTransition>
    );
  }
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  isVisible: PropTypes.bool,
  direction: PropTypes.oneOf(Object.values(directions)),
  position: PropTypes.shape({
    elHorizontalCenter: PropTypes.number,
    elVerticalCenter: PropTypes.number,
    elTop: PropTypes.number,
    elBottom: PropTypes.number,
    elLeft: PropTypes.number
  }),
  variant: PropTypes.oneOf(Object.values(variants))
};

Tooltip.defaultProps = {
  isVisible: false,
  direction: "bottom",
  variant: "light",
  position: {
    elHorizontalCenter: 0,
    elVerticalCenter: 0,
    elTop: 0,
    elBottom: 0,
    elLeft: 0
  }
};

Tooltip.displayName = "Tooltip";

export default Tooltip;
