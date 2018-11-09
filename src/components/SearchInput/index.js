import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { searchVariants } from "./constants";
import {
  SearchContainer,
  StyledSearchIcon,
  StyledInput,
  Icon,
  XButton,
  Cancel,
  Clear
} from "./Search.styles";

class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFocused: !props.hasBackround
    };

    this.inputRef = React.createRef();
    this.inputBlur = this.inputBlur.bind(this);
    this.inputFocused = this.inputFocused.bind(this);
  }

  inputBlur() {
    const { hasBackround, onBlur } = this.props;

    if (hasBackround) {
      this.setState({
        isFocused: false
      });
    }

    onBlur();
  }

  inputFocused() {
    const { onFocus, hasBackround } = this.props;

    if (hasBackround) {
      this.setState({
        isFocused: true
      });
    }

    onFocus();
  }

  render() {
    const {
      variant,
      placeholder,
      value,
      onChange,
      clearText,
      cancelCallback,
      searchIconSelect,
      className,
      isInputVisible,
      ...rest
    } = this.props;
    const { isFocused } = this.state;

    return (
      <SearchContainer
        variant={variant}
        isFocused={isFocused}
        {...rest}
        className={classNames(className, { hidden: !isInputVisible })}
      >
        <StyledSearchIcon
          variant={variant}
          isFocused={isFocused}
          onClick={searchIconSelect}
          aria-label="Search button"
        >
          <Icon size={variant} color="currentColor" />
        </StyledSearchIcon>
        <StyledInput
          variant={variant}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={this.inputFocused}
          onBlur={this.inputBlur}
          isFocused={isFocused}
          innerRef={this.inputRef}
          aria-label="Search input"
        />
        <Clear onClick={clearText} value={value} aria-label="Clear button">
          <XButton isFocused={isFocused}>x</XButton>
        </Clear>
        <Cancel
          isFocused={isFocused}
          onClick={cancelCallback}
          aria-label="Cancel button"
        >
          Cancel
        </Cancel>
      </SearchContainer>
    );
  }
}

SearchInput.propTypes = {
  variant: PropTypes.oneOf(Object.values(searchVariants)),
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  searchIconSelect: PropTypes.func,
  clearText: PropTypes.func,
  cancelCallback: PropTypes.func,
  hasBackround: PropTypes.bool,
  isInputVisible: PropTypes.bool
};

SearchInput.defaultProps = {
  variant: searchVariants.large,
  placeholder: "",
  onFocus: () => {},
  onBlur: () => {},
  clearText: () => {},
  searchIconSelect: () => {},
  cancelCallback: () => {},
  hasBackround: false,
  isInputVisible: true
};

SearchInput.displayName = "SearcnInput";

export default SearchInput;
