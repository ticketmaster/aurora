import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Track from "./Track";
import Handle from "./Handle";
import * as utils from "./utils";
import { SliderContainer, SliderRail } from "./RangeSlider.styles";

const noop = () => {};

class RangeSlider extends React.Component {
  static displayName = "RangeSlider";

  static propTypes = {
    defaultValue: PropTypes.arrayOf(PropTypes.number),
    value: PropTypes.arrayOf(PropTypes.number),
    disabled: PropTypes.bool,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    onChange: PropTypes.func,
    onBeforeChange: PropTypes.func,
    onAfterChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    className: PropTypes.string,
    threshold: PropTypes.number
  };

  static defaultProps = {
    defaultValue: [0, 100],
    value: null,
    min: 0,
    max: 100,
    step: 1,
    onChange: noop,
    onBeforeChange: noop,
    onAfterChange: noop,
    onFocus: null,
    onBlur: null,
    className: "",
    disabled: false,
    threshold: 0
  };

  constructor(props) {
    super(props);

    const { value: currentValue, defaultValue, max } = props;
    const value = currentValue || defaultValue;
    const bounds = value.map((v, i) => utils.trimAlignValue(v, i, props));
    const recent = bounds[0] === max ? 0 : bounds.length - 1;

    this.state = {
      handle: null,
      recent,
      bounds
    };

    this.handlesRefs = [];
  }

  componentWillUnmount() {
    this.removeDocumentEvents();
  }

  static getDerivedStateFromProps(props, state) {
    const { value: propsValue, min, max, threshold } = props;
    if (!(propsValue || (min || min === 0) || max)) {
      return null;
    }

    const { bounds } = state;
    const value = propsValue || bounds;
    const nextBounds = value.map((v, i) =>
      utils.trimAlignValue(v, i, props, value, threshold)
    );
    if (
      nextBounds.length === bounds.length &&
      nextBounds.every((v, i) => v === bounds[i])
    ) {
      return null;
    }

    return {
      ...state,
      bounds: nextBounds
    };
  }

  onMouseDown = e => {
    let position = e.pageX;
    if (!utils.isEventFromHandle(e, this.handlesRefs)) {
      this.dragOffset = 0;
    } else {
      position = this.getHandlePosition(e, position);
    }
    this.removeDocumentEvents();
    this.onStart(position);
    this.addDocumentMouseEvents();
  };

  onMouseMove = e => {
    if (!this.sliderRef) {
      this.onEnd();
      return;
    }
    const position = e.pageX;
    this.onMove(e, position - this.dragOffset);
  };

  onTouchStart = e => {
    if (utils.isNotTouchEvent(e)) {
      return;
    }

    let position = e.touches[0].pageX;
    if (!utils.isEventFromHandle(e, this.handlesRefs)) {
      this.dragOffset = 0;
    } else {
      position = this.getHandlePosition(e, position);
    }
    this.onStart(position);
    this.addDocumentTouchEvents();
    utils.pauseEvent(e);
  };

  onTouchMove = e => {
    if (utils.isNotTouchEvent(e) || !this.sliderRef) {
      this.onEnd();
      return;
    }

    const position = e.touches[0].pageX;
    this.onMove(e, position - this.dragOffset);
  };

  onFocus = e => {
    const { onFocus } = this.props;
    if (utils.isEventFromHandle(e, this.handlesRefs)) {
      const handlePosition = utils.getHandleCenterPosition(e.target);
      this.dragOffset = 0;
      this.onStart(handlePosition);
      utils.pauseEvent(e);
      onFocus(e);
    }
  };

  onBlur = e => {
    const { onBlur } = this.props;
    this.onEnd(e);
    onBlur(e);
  };

  onChange(state) {
    const { value, onChange } = this.props;
    const isNotControlled = !value;
    if (isNotControlled) {
      this.setState(state);
    } else if (state.handle !== undefined) {
      this.setState({ handle: state.handle });
    }

    const data = { ...this.state, ...state };
    const changedValue = data.bounds;
    onChange(changedValue);
  }

  onStart(position) {
    const { onBeforeChange } = this.props;
    const { bounds: stateBounds } = this.state;
    const bounds = this.getValue();
    onBeforeChange(bounds);

    const value = this.calcValueByPos(position);
    this.startValue = value;
    this.startPosition = position;

    const closestBound = this.getClosestBound(value);
    this.prevMovedHandleIndex = this.getBoundNeedMoving(value, closestBound);

    this.setState({
      handle: this.prevMovedHandleIndex,
      recent: this.prevMovedHandleIndex
    });

    const prevValue = bounds[this.prevMovedHandleIndex];

    if (value === prevValue) {
      return;
    }

    const nextBounds = [...stateBounds];
    nextBounds[this.prevMovedHandleIndex] = value;
    this.onChange({ bounds: nextBounds });
  }

  onEnd = () => {
    const { onAfterChange } = this.props;
    this.setState({
      handle: null
    });
    this.removeDocumentEvents();
    onAfterChange(this.getValue());
  };

  onMove(e, position) {
    utils.pauseEvent(e);
    const { bounds, handle } = this.state;

    const value = this.calcValueByPos(position);
    const oldValue = bounds[handle];

    if (value === oldValue) {
      return;
    }

    this.moveTo(value);
  }

  getHandlePosition = (e, position) => {
    const handlePosition = utils.getHandleCenterPosition(e.target);
    this.dragOffset = position - handlePosition;
    return handlePosition;
  };

  getValue = () => {
    const { bounds } = this.state;
    return bounds;
  };

  getClosestBound(value) {
    const { bounds } = this.state;
    let closestBound = 0;

    if (
      Math.abs(bounds[closestBound + 1] - value) <
      Math.abs(bounds[closestBound] - value)
    ) {
      closestBound += 1;
    }

    return closestBound;
  }

  getBoundNeedMoving(value, closestBound) {
    const { bounds, recent } = this.state;
    let boundNeedMoving = closestBound;
    const isAtTheSamePoint = bounds[closestBound + 1] === bounds[closestBound];

    if (isAtTheSamePoint && bounds[recent] === bounds[closestBound]) {
      boundNeedMoving = recent;
    }

    if (isAtTheSamePoint && value !== bounds[closestBound + 1]) {
      boundNeedMoving =
        value < bounds[closestBound + 1] ? closestBound : closestBound + 1;
    }
    return boundNeedMoving;
  }

  /**
   * Returns an array of possible slider points, taking into account both
   * and `step`. The result is cached.
   */
  getPoints() {
    const { step, min, max } = this.props;
    const cache = this.getPointsCache;
    if (!cache || cache.step !== step) {
      const pointsObject = {};
      for (let point = min; point <= max; point += step) {
        pointsObject[point] = point;
      }
      const points = Object.keys(pointsObject).map(parseFloat);
      points.sort((a, b) => a - b);
      this.getPointsCache = { step, points };
    }
    return this.getPointsCache.points;
  }

  getSliderStart() {
    const slider = this.sliderRef;
    const rect = slider.getBoundingClientRect();

    return rect.left + global.window.pageXOffset;
  }

  getSliderLength() {
    const slider = this.sliderRef;
    if (!slider) {
      return 0;
    }

    const coords = slider.getBoundingClientRect();
    return coords.width;
  }

  moveTo(value) {
    const { handle, bounds } = this.state;
    const nextBounds = [...bounds];
    nextBounds[handle] = value;

    this.onChange({
      handle,
      bounds: nextBounds
    });
  }

  calcValue(offset) {
    const { min, max } = this.props;
    const ratio = Math.max(offset, 0) / this.getSliderLength();
    const value = ratio * (max - min) + min;
    return value;
  }

  calcValueByPos(position) {
    const { threshold } = this.props;
    const { handle, bounds } = this.state;
    const pixelOffset = position - this.getSliderStart();
    const nextValue = utils.trimAlignValue(
      this.calcValue(pixelOffset),
      handle,
      this.props,
      bounds,
      threshold
    );
    return nextValue;
  }

  addDocumentTouchEvents() {
    global.window.addEventListener("touchmove", this.onTouchMove);
    global.window.addEventListener("touchend", this.onEnd);
  }

  addDocumentMouseEvents() {
    global.window.addEventListener("mousemove", this.onMouseMove);
    global.window.addEventListener("mouseup", this.onEnd);
  }

  removeDocumentEvents() {
    global.window.removeEventListener("touchmove", this.onTouchMove);
    global.window.removeEventListener("touchend", this.onEnd);

    global.window.removeEventListener("mousemove", this.onMouseMove);
    global.window.removeEventListener("mouseup", this.onEnd);
  }

  calcOffset(value) {
    const { min, max } = this.props;
    const ratio = (value - min) / (max - min);
    return ratio * 100;
  }

  saveHandle(index, handle) {
    this.handlesRefs[index] = handle;
  }

  renderHandles = () => {
    const { bounds } = this.state;
    const { disabled, min, max } = this.props;
    const offsets = bounds.map(v => this.calcOffset(v));

    return bounds.map((v, i) => {
      const key = i + 1;
      const classes = classNames("slider__handle", {
        [`slider__handle-${i + 1}`]: true,
        "slider__handle--disbaled": disabled
      });

      return (
        <Handle
          key={key}
          className={classes}
          offset={offsets[i]}
          value={v}
          min={min}
          max={max}
          disabled={disabled}
          ref={h => this.saveHandle(i, h)}
        />
      );
    });
  };

  renderTrack = () => {
    const { bounds } = this.state;
    const { disabled } = this.props;
    const offsets = bounds.map(v => this.calcOffset(v));

    return bounds.slice(0, -1).map((_, index) => {
      const i = index + 1;

      return (
        <Track
          className="slider__track"
          offset={offsets[i - 1]}
          length={offsets[i] - offsets[i - 1]}
          key={i}
          disabled={disabled}
        />
      );
    });
  };

  render() {
    const { disabled, className } = this.props;
    const handles = this.renderHandles();
    const track = this.renderTrack();
    const sliderClassName = classNames("slider", {
      [`slider--disabled`]: disabled,
      disabled,
      [className]: className
    });

    return (
      <SliderContainer
        ref={slider => {
          this.sliderRef = slider;
        }}
        className={sliderClassName}
        onTouchStart={disabled ? noop : this.onTouchStart}
        onMouseDown={disabled ? noop : this.onMouseDown}
        onFocus={disabled ? noop : this.onFocus}
        onBlur={disabled ? noop : this.onBlur}
      >
        <SliderRail className="slider__rail" />
        {track}
        {handles}
      </SliderContainer>
    );
  }
}

export default RangeSlider;
