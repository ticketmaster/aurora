import React from "react";
import PropTypes from "prop-types";
import CheckBoxInput from "./CheckBoxInput.styles";

class CheckBoxInputComponent extends React.Component {
  static propTypes = {
    size: PropTypes.oneOf(["large", "small"]),
    disabled: PropTypes.bool,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    onChange: PropTypes.func,
    isFocused: PropTypes.bool
  };

  static defaultProps = {
    size: "small",
    disabled: false,
    isFocused: false,
    onChange: () => null
  };

  constructor(props) {
    super(props);
    this.SelectedElement = React.createRef();
  }

  componentDidUpdate() {
    this.props.isFocused && this.SelectedElement.current.focus(); // eslint-disable-line
  }

  render() {
    const { name, value, size, disabled, isChecked, ...props } = this.props;
    return (
      <CheckBoxInput
        {...props}
        value={value}
        name={name}
        id={`${name + value}input`}
        disabled={disabled}
        checked={isChecked}
        innerRef={this.SelectedElement}
      />
    );
  }
}
export default CheckBoxInputComponent;
