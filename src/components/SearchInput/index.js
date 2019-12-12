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
      isFocused: false
    };

    this.inputRef = React.createRef();
    this.inputClicked = false;
  }

  componentWillUnmount() {
    global.window.removeEventListener("click", this.windowClick);
  }

  containerClick = () => {
    this.inputClicked = true;
    global.window.removeEventListener("click", this.windowClick);
    global.window.addEventListener("click", this.windowClick);
  };

  windowClick = () => {
    if (!this.inputClicked) {
      this.blurInput();
    }

    this.inputClicked = false;
  };

  blurInput = () => {
    global.window.removeEventListener("click", this.windowClick);
    const { onBlur } = this.props;
    const { isFocused } = this.state;

    if (isFocused) {
      this.setState({
        isFocused: false
      });

      onBlur();
    }
  };

  focusInput = () => {
    const { onFocus } = this.props;
    const { isFocused } = this.state;

    if (!isFocused) {
      this.setState(
        {
          isFocused: true
        },
        () => this.inputRef.current.focus()
      );

      onFocus();
    }

    this.inputRef.current.focus();
  };

  searchIconClick = () => {
    const { searchIconSelect } = this.props;
    this.focusInput();
    searchIconSelect();
  };

  clearTextClick = () => {
    const { clearText, isMobile } = this.props;
    if (!isMobile) {
      this.focusInput();
    }
    clearText();
  };

  cancelClick = () => {
    const { cancelCallback } = this.props;
    this.setState({
      isFocused: false
    });
    cancelCallback();
  };

  render() {
    const {
      variant,
      placeholder,
      value,
      onChange,
      className,
      iconOnly,
      searchBtnAreaLabel,
      clearBtnAreaLabel,
      cancelBtnAreaLabel,
      inputAreaLabel,
      isSuggestOpened,
      hasBackground,
      isMobile,
      onFocus,
      onBlur,
      name,
      ...rest
    } = this.props;
    const { isFocused } = this.state;
    const isStyleForFocusedUsed = !hasBackground || isFocused;
    const showCancelButton = isFocused && isMobile;
    return (
      <SearchContainer
        variant={variant}
        isFocused={isStyleForFocusedUsed}
        isSuggestOpened={isSuggestOpened}
        {...rest}
        onClick={this.containerClick}
        className={classNames("search--container", className, {
          "search--container-has-value": value,
          "search--container-icon-only": iconOnly,
          "search--container-focused": isFocused
        })}
      >
        <StyledSearchIcon
          type="button"
          variant={variant}
          isFocused={isStyleForFocusedUsed}
          onClick={this.searchIconClick}
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
          onFocus={this.focusInput}
          isFocused={isStyleForFocusedUsed}
          ref={this.inputRef}
          aria-label={inputAreaLabel}
          className={classNames("search--input", {
            "search--input-focused": isFocused
          })}
          name={name}
        />
        <Clear
          type="button"
          onClick={this.clearTextClick}
          value={value}
          aria-label={clearBtnAreaLabel}
          className="search--clear-icon"
          isFocused={isStyleForFocusedUsed}
          variant={variant}
        >
          <ClearIcon size={variant} color="currentColor" />
        </Clear>
        <Cancel
          type="button"
          isFocused={isStyleForFocusedUsed}
          showElement={showCancelButton}
          onClick={this.cancelClick}
          aria-label={cancelBtnAreaLabel}
          className="search--cancel-icon"
          iconOnly={iconOnly}
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
  iconOnly: PropTypes.bool,
  isSuggestOpened: PropTypes.bool,
  isMobile: PropTypes.bool,
  name: PropTypes.string
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
  iconOnly: false,
  className: "",
  searchBtnAreaLabel: "Search button",
  clearBtnAreaLabel: "Clear button",
  cancelBtnAreaLabel: "Cancel button",
  inputAreaLabel: "Search input",
  isSuggestOpened: false,
  isMobile: false,
  name: undefined
};

SearchInput.displayName = "SearchComponent";

export default SearchInput;
