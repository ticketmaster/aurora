import React from "react";
import PropTypes from "prop-types";
import { SliderHandle } from "./RangeSlider.styles";

export default class Handle extends React.Component {
  render() {
    const {
      offset,
      disabled,
      min,
      max,
      value,
      className,
      ...restProps
    } = this.props;

    const postionStyle = { left: `${offset}%` };

    return (
      <SliderHandle
        ref={this.setHandleRef}
        {...restProps}
        className={className}
        style={postionStyle}
        // aria attribute
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-disabled={!!disabled}
      />
    );
  }
}

Handle.propTypes = {
  className: PropTypes.string,
  offset: PropTypes.number.isRequired,
  disabled: PropTypes.bool,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

Handle.defaultProps = {
  disabled: false,
  className: ""
};
