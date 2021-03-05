/* eslint-disable react/no-array-index-key */
import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import QtySelectorMinusIcon from "../../Icons/QtySelectorMinus";
import QtySelectorPlusIcon from "../../Icons/QtySelectorPlus";
import composeEventHandlers from "../../../utils/composeEventHandlers";
import {
  Container,
  Button,
  InputField,
  InputFieldContainer,
  INPUT_HEIGHT
} from "./QtySelector.styles";

class QtySelector extends Component {
  static MAX_LENGTH_VAL = 2;
  static INPUT_HEIGHT = INPUT_HEIGHT;
  static MIN_INPUT_VALUE = 0;
  static MAX_INPUT_VALUE = 99;

  static isNumber = str => {
    const numValue = parseInt(str, 10);
    const strValue = numValue.toString();
    // proper number should have the same length as its string representation
    // except the case when it evaluates to NaN
    return !Number.isNaN(numValue) && strValue.length === str.length;
  };

  static propTypes = {
    disabled: PropTypes.bool,
    value: PropTypes.number,
    style: PropTypes.objectOf(PropTypes.string),
    min: PropTypes.number,
    max: PropTypes.number,
    checkValue: PropTypes.func,
    handleValueUpdate: PropTypes.func,
    incrementBtnLabel: PropTypes.string,
    decrementBtnLabel: PropTypes.string
  };

  static defaultProps = {
    disabled: false,
    style: {},
    value: 0,
    min: QtySelector.MIN_INPUT_VALUE,
    max: QtySelector.MAX_INPUT_VALUE,
    checkValue: () => true,
    handleValueUpdate: () => {},
    incrementBtnLabel: "Increase Quantity",
    decrementBtnLabel: "Decrease Quantity"
  };

  state = {
    value: this.props.value,
    focused: false
  };

  handleChange = e => {
    const { value } = e.target;
    const { max, min, checkValue } = this.props;

    if (
      QtySelector.isNumber(value) &&
      value.length <= QtySelector.MAX_LENGTH_VAL &&
      value <= max &&
      value >= min &&
      checkValue(value)
    ) {
      this.setState(
        () => ({ value: Number.parseInt(value, 10) }),
        () => this.handleValueUpdated()
      );
    } else if (value === "") {
      // delete input value case
      this.setState(() => ({ value: "" }), () => this.handleValueUpdated());
    }
  };

  increment = () => {
    const { checkValue, max, min } = this.props;
    this.setState(
      state => {
        if (state.value === "") {
          return { value: min + 1 };
        }
        if (state.value === max) {
          return {};
        }
        if (checkValue(state.value + 1)) {
          return { value: state.value + 1 };
        }
        return {};
      },
      () => this.handleValueUpdated()
    );
  };

  decrement = () => {
    const { checkValue, min } = this.props;
    this.setState(
      state => {
        if (state.value === "") {
          return { value: min };
        }
        if (state.value === min) {
          return {};
        }
        if (checkValue(state.value - 1)) {
          return { value: state.value - 1 };
        }
        return {};
      },
      () => this.handleValueUpdated()
    );
  };

  handleValueUpdated = () => {
    const { handleValueUpdate } = this.props;
    const { value } = this.state;
    handleValueUpdate(value);
  };

  handleFocus = () => {
    this.setState(() => ({
      focused: true
    }));
  };

  handleBlur = () => {
    this.setState(() => ({
      focused: false
    }));
  };

  renderInput = () => {
    const { disabled, style, min, max, ...rest } = this.props;
    const { value, focused } = this.state;
    // rendering multiple inputs is required for animation
    return !focused ? (
      [...Array(max + 1)].map((_, i) => (
        <InputField
          {...rest}
          key={i}
          value={value}
          onFocus={composeEventHandlers(this.handleFocus, rest.onFocus)}
          onBlur={composeEventHandlers(this.handleBlur, rest.onBlur)}
          onChange={composeEventHandlers(this.handleChange, rest.onChange)}
          disabled={disabled}
          style={{
            ...style,
            top: `-${value * QtySelector.INPUT_HEIGHT}px`
          }}
        />
      ))
    ) : (
      <InputField
        {...rest}
        value={value}
        onFocus={composeEventHandlers(this.handleFocus, rest.onFocus)}
        onBlur={composeEventHandlers(this.handleBlur, rest.onBlur)}
        onChange={composeEventHandlers(this.handleChange, rest.onChange)}
        disabled={disabled}
        style={style}
        autoFocus
      />
    );
  };

  render() {
    const {
      disabled,
      min,
      max,
      decrementBtnLabel,
      incrementBtnLabel
    } = this.props;
    const { value } = this.state;

    return (
      <Container>
        <Button
          onClick={this.decrement}
          disabled={disabled || min === value}
          aria-label={decrementBtnLabel}
        >
          <QtySelectorMinusIcon />
        </Button>
        <InputFieldContainer
          className={classNames({
            InputFieldContainer__disabled: disabled
          })}
        >
          {this.renderInput()}
        </InputFieldContainer>
        <Button
          onClick={this.increment}
          disabled={disabled || max === value}
          aria-label={incrementBtnLabel}
        >
          <QtySelectorPlusIcon />
        </Button>
      </Container>
    );
  }
}

export default QtySelector;
