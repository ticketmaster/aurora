/* eslint-disable react/no-array-index-key */
import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import composeEventHandlers from "../../../utils/composeEventHandlers";
import {
  Container,
  Button,
  InputField,
  InputFieldContainer
} from "./QtySelector.styles";

const minusIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g fill="none" fillRule="nonzero">
      <path d="M0 0h24v24H0z" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 12h16"
      />
    </g>
  </svg>
);

const plusIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g fill="none" fillRule="nonzero">
      <path d="M0 0h24v24H0z" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 12h16M12 4v16"
      />
    </g>
  </svg>
);

class QtySelector extends Component {
  static MAX_LENGTH_VAL = 2;
  static inputHeight = 28;

  static isNumber = str => {
    const numValue = parseInt(str, 10);
    const strValue = numValue.toString();
    // proper number should have the same length as its string representation
    // except the case when it evaluates to NaN
    return !Number.isNaN(numValue) && strValue.length === str.length;
  };

  static propTypes = {
    disabled: PropTypes.bool,
    style: PropTypes.objectOf(PropTypes.string)
  };

  static defaultProps = {
    disabled: false,
    style: {}
  };

  state = {
    value: "",
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
      if (state.value === 99) {
        return { value: 99 };
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

  render() {
    const { disabled, style, ...rest } = this.props;
    const { value, focused } = this.state;

    return (
      <Container>
        <Button onClick={this.decrement} disabled={disabled}>
          {minusIcon}
        </Button>
        <InputFieldContainer
          className={classNames({ InputFieldContainer__disabled: disabled })}
        >
          {!focused ? (
            [...Array(100)].map((_, i) => (
              <InputField
                {...rest}
                key={i}
                value={value}
                onFocus={composeEventHandlers(this.handleFocus, rest.onFocus)}
                onBlur={composeEventHandlers(this.handleBlur, rest.onBlur)}
                onChange={composeEventHandlers(
                  this.handleChange,
                  rest.onChange
                )}
                disabled={disabled}
                style={{
                  ...style,
                  top: `-${value * QtySelector.inputHeight}px`
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
          )}
        </InputFieldContainer>
        <Button onClick={this.increment} disabled={disabled}>
          {plusIcon}
        </Button>
      </Container>
    );
  }
}

export default QtySelector;
