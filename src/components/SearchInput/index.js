import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ClearIcon } from "../Icons";

import { SIZES_SL, LARGE } from "../constants";
import {
  SearchContainer,
  StyledSearchIcon,
  StyledInput,
  Icon,
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
      hasBackground,
      ...rest
    } = this.props;
    const { isFocused } = this.state;
    const isStyleForFocusedUsed = !hasBackground || isFocused;
    return (
      <SearchContainer
        variant={variant}
        isFocused={isStyleForFocusedUsed}
        isSuggestOpened={isSuggestOpened}
        {...rest}
        className={classNames("search--container", className, {
          hidden: !isInputVisible,
          "search--container-focused": isStyleForFocusedUsed
        })}
      >
        <StyledSearchIcon
          variant={variant}
          isFocused={isStyleForFocusedUsed}
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
          isFocused={isStyleForFocusedUsed}
          ref={this.inputRef}
          aria-label={inputAreaLabel}
          className={classNames("search--input", {
            "search--input-focused": isStyleForFocusedUsed
          })}
        />
        <Clear
          onClick={clearText}
          value={value}
          aria-label={clearBtnAreaLabel}
          className="search--clear-icon"
          isFocused={isStyleForFocusedUsed}
        >
          <ClearIcon color="currentColor" />
        </Clear>
        <Cancel
          isFocused={isStyleForFocusedUsed}
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
  variant: PropTypes.oneOf(SIZES_SL),
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
  variant: LARGE,
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

SearchInput.displayName = "SearcnComponent";

export default SearchInput;
