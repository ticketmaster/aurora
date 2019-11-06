import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import classNames from "classnames";
import { typography, constants } from "../../../theme";
import getThemeValue from "../../../utils/getThemeValue";

const StyledDropDownItem = styled.span`
  cursor: pointer;
  box-sizing: border-box;

  .dropdown__items & {
    appearance: none;
    height: 36px;
    margin: 4px 8px 0 8px;
    padding: 7px 10px;
    font-size: ${typography.size.hecto};
    text-align: left;
    border: none;
    background-color: ${getThemeValue("white", "base")};
    align-items: center;
    overflow-x: hidden;
    text-overflow: ellipsis;
    color: ${getThemeValue("gray01")};
    line-height: 1.25;

    &:focus {
      background-color: ${getThemeValue("primary", "base")};
      color: ${getThemeValue("white", "base")};
      outline: none;
      border-radius: ${constants.borderRadius.small};
    }
    &.dropdown__selected {
      color: ${getThemeValue("gray01")};
      background-color: ${getThemeValue("gray04")};
      border-radius: ${constants.borderRadius.small};
    }
  }
  .dropdown__items.dropdown__items--small & {
    height: 32px;
    font-size: ${typography.size.hecto};
    line-height: 1.3;
  }
  .dropdown__items.dropdown__items--large & {
    font-size: ${typography.size.kilo};
  }
`;

class DropDownInput extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired,
    isFocused: PropTypes.bool.isRequired,
    isSelected: PropTypes.bool.isRequired,
    className: PropTypes.string
  };

  static defaultProps = {
    className: ""
  };

  componentDidUpdate() {
    if (this.props.isOpen && this.props.isFocused) {
      this.focus();
    }
  }

  focus = () => {
    if (this.SelectedElement && this.SelectedElement.current) {
      this.SelectedElement.current.focus();
    }
  };

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
        ref={this.SelectedElement}
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
