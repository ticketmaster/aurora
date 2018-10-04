import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import classNames from "classnames";
import { typography, constants } from "../../../theme";
import getThemeValue from "../../../utils/getThemeValue";

const StyledDropDownItem = styled.span`
  cursor: pointer;

  .dropdown__items & {
    appearance: none;
    height: 36px;
    margin: 4px 8px 0 8px;
    padding: 7px 12px;
    font-size: ${typography.size.kilo};
    text-align: left;
    border: none;
    background-color: ${getThemeValue("white", "base")};
    align-items: center;
    overflow-x: hidden;
    text-overflow: ellipsis;
    color: ${getThemeValue("gray01")};

    &:hover,
    &:focus,
    &.dropdown__selected {
      border-radius: ${constants.borderRadius.small};
      color: ${getThemeValue("white", "base")};
    }
    &:hover,
    &:focus {
      background-color: ${getThemeValue("primary", "base")};
    }
    &:focus {
      outline: none;
    }
    &.dropdown__selected {
      color: ${getThemeValue("gray01")};
      background-color: ${getThemeValue("gray04")};
    }
  }
  .dropdown__items.dropdown__items--small & {
    height: 32px;
  }
`;

class DropDownInput extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
    isFocused: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    className: PropTypes.string
  };

  static defaultProps = {
    className: ""
  };

  componentDidUpdate() {
    if (!this.props.isFocused) return;
    this.SelectedElement.current.focus();
  }

  SelectedElement = React.createRef();

  render() {
    const {
      value,
      index,
      children,
      isSelected,
      className,
      ...props
    } = this.props;
    return (
      <StyledDropDownItem
        role="option"
        tabIndex="-1"
        value={value}
        index={index}
        innerRef={this.SelectedElement}
        {...props}
        className={classNames({
          dropdown__selected: isSelected,
          [className]: !!className
        })}
      >
        {children}
      </StyledDropDownItem>
    );
  }
}

export default DropDownInput;
