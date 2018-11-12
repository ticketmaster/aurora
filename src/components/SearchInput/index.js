import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { searchVariants } from "./constants";
import {
  SearchContainer,
  StyledSearchIcon,
  StyledInput,
  Icon,
  ClearBtn,
  Cancel,
  Clear
} from "./Search.styles";

class SearchInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFocused: !props.hasBackground
    };

    this.inputRef = React.createRef();
    this.inputBlur = this.inputBlur.bind(this);
    this.inputFocused = this.inputFocused.bind(this);
  }

  inputBlur() {
    const { hasBackground, onBlur } = this.props;

    if (hasBackground) {
      this.setState({
        isFocused: false
      });
    }

    onBlur();
  }

  inputFocused() {
    const { onFocus, hasBackground } = this.props;

    if (hasBackground) {
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
      searchBtnAreaLabel,
      clearBtnAreaLabel,
      cancelBtnAreaLabel,
      inputAreaLabel,
      isSuggestOpened,
      ...rest
    } = this.props;
    const { isFocused } = this.state;

    return (
      <SearchContainer
        variant={variant}
        isFocused={isFocused}
        isSuggestOpened={isSuggestOpened}
        {...rest}
        className={classNames("search--container", className, {
          hidden: !isInputVisible,
          "search--container-focused": isFocused
        })}
      >
        <StyledSearchIcon
          variant={variant}
          isFocused={isFocused}
          onClick={searchIconSelect}
          aria-label={searchBtnAreaLabel}
          className="search--search-icon"
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
          aria-label={inputAreaLabel}
          className={classNames("search--input", {
            "search--input-focused": isFocused
          })}
        />
        <Clear
          onClick={clearText}
          value={value}
          aria-label={clearBtnAreaLabel}
          className="search--clear-icon"
        >
          <ClearBtn isFocused={isFocused} color="currentColor" />
        </Clear>
        <Cancel
          isFocused={isFocused}
          onClick={cancelCallback}
          aria-label={cancelBtnAreaLabel}
          className="search--cancel-icon"
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
  className: PropTypes.string,
  searchBtnAreaLabel: PropTypes.string,
  clearBtnAreaLabel: PropTypes.string,
  cancelBtnAreaLabel: PropTypes.string,
  inputAreaLabel: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  searchIconSelect: PropTypes.func,
  clearText: PropTypes.func,
  cancelCallback: PropTypes.func,
  hasBackground: PropTypes.bool,
  isInputVisible: PropTypes.bool,
  isSuggestOpened: PropTypes.bool
};

SearchInput.defaultProps = {
  variant: searchVariants.large,
  placeholder: "",
  onFocus: () => {},
  onBlur: () => {},
  clearText: () => {},
  searchIconSelect: () => {},
  cancelCallback: () => {},
  hasBackground: false,
  isInputVisible: true,
  className: "",
  searchBtnAreaLabel: "Search button",
  clearBtnAreaLabel: "Clear button",
  cancelBtnAreaLabel: "Cancel button",
  inputAreaLabel: "Search input",
  isSuggestOpened: false
};

SearchInput.displayName = "SearcnInput";

export default SearchInput;
