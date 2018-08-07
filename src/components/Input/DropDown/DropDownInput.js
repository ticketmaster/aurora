import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import classNames from "classnames";
import colors from "../../../theme/colors";

const StyledDropDownItem = styled.span`
  .dropdown__items & {
    appearance: none;
    height: 36px;
    margin-left: 8px;
    margin-right: 8px;
    margin-top: 4px;
    padding: 0 12px;
    font-size: 16px;
    text-align: left;
    border: none;
    background-color: ${colors.white.base};
    display: flex;
    align-items: center;
    &:hover,
    &:focus,
    &.dropdown__selected {
      border-radius: 2px;
      color: white;
    }
    &:hover,
    &:focus {
      background-color: ${colors.azure.base};
    }
    &:focus {
      outline: none;
    }
    &.dropdown__selected {
      background-color: ${colors.onyx.muted};
    }
  }
`;

class DropDownInput extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
    isFocused: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired
  };

  componentDidUpdate() {
    if (!this.props.isFocused) return;
    this.SelectedElement.current.focus();
  }

  SelectedElement = React.createRef();

  render() {
    const { value, index, children, isSelected, ...props } = this.props;
    return (
      <StyledDropDownItem
        tabIndex="-1"
        value={value}
        index={index}
        innerRef={this.SelectedElement}
        {...props}
        className={classNames({
          dropdown__selected: isSelected
        })}
      >
        {children}
      </StyledDropDownItem>
    );
  }
}

export default DropDownInput;
