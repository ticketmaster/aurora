import React, { Component } from "react";
import PropTypes from "prop-types";

// import composeEventHandlers from "../../../utils/composeEventHandlers";
import {
  Container,
  Button,
  InputField,
  InputFieldContainer
} from "./Stepper.styles";

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

class Stepper extends Component {
  static MAX_LENGTH_VAL = 2;
  static isNumber = str => {
    const numValue = parseInt(str, 10);
    const strValue = numValue.toString();
    // proper number should have the same length as its string representation
    // except the case when it evaluates to NaN
    return !Number.isNaN(numValue) && strValue.length === str.length;
  };
  static propTypes = {
    disabled: PropTypes.bool
  };
  static defaultProps = {
    disabled: false
  };

  state = {
    value: ""
  };

  handleChange = e => {
    const { value } = e.target;

    if (Stepper.isNumber(value) && value.length <= Stepper.MAX_LENGTH_VAL) {
      this.setState(() => ({ value }));
    } else if (value === "") {
      // delete input case
      this.setState(() => ({ value: "" }));
    }
  };

  increment = () =>
    this.setState(state => {
      if (state.value === "") {
        return { value: 0 };
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

  render() {
    const { disabled } = this.props;

    return (
      <Container>
        <Button onClick={this.decrement} disabled={disabled}>
          {minusIcon}
        </Button>
        <InputFieldContainer className={disabled ? "disabled" : ""}>
          {[...Array(100)].map(() => (
            <InputField
              value={this.state.value}
              onChange={this.handleChange}
              disabled={disabled}
              style={{
                top: `-${this.state.value * 27}px`
              }}
            />
          ))}
        </InputFieldContainer>
        <Button onClick={this.increment} disabled={disabled}>
          {plusIcon}
        </Button>
      </Container>
    );
  }
}

export default Stepper;
