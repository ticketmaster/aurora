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
    style: PropTypes.objectOf(PropTypes.string)
  };

  static defaultProps = {
    disabled: false,
    style: {},
    value: null
  };

  state = {
    value: this.props.value || "",
    focused: false
  };

  handleChange = e => {
    const { value } = e.target;

    if (
      QtySelector.isNumber(value) &&
      value.length <= QtySelector.MAX_LENGTH_VAL
    ) {
      this.setState(() => ({ value: Number.parseInt(value, 10) }));
    } else if (value === "") {
      // delete input value case
      this.setState(() => ({ value: "" }));
    }
  };

  increment = () =>
    this.setState(state => {
      if (state.value === "") {
        return { value: 0 };
      }
      if (state.value === QtySelector.MAX_INPUT_VALUE) {
        return { value: QtySelector.MAX_INPUT_VALUE };
      }
      return { value: state.value + 1 };
    });

  decrement = () =>
    this.setState(state => {
      if (state.value === "" || state.value === 0) {
        return { value: 0 };
      }
      return { value: state.value - 1 };
    });

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
    const { disabled, style, ...rest } = this.props;
    const { value, focused } = this.state;
    // rendering multiple inputs is required for animation
    return !focused ? (
      [...Array(100)].map((_, i) => (
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
    const { disabled } = this.props;

    return (
      <Container>
        <Button onClick={this.decrement} disabled={disabled}>
          <QtySelectorMinusIcon />
        </Button>
        <InputFieldContainer
          className={classNames({ InputFieldContainer__disabled: disabled })}
        >
          {this.renderInput()}
        </InputFieldContainer>
        <Button onClick={this.increment} disabled={disabled}>
          <QtySelectorPlusIcon />
        </Button>
      </Container>
    );
  }
}

export default QtySelector;
