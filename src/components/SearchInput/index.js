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

  componentDidMount() {
    global.window.addEventListener("click", this.windowClick);
  }

  componentWillUnmount() {
    global.window.removeEventListener("click", this.windowClick);
  }

  containerClick = () => {
    this.inputClicked = true;
  };

  windowClick = () => {
    if (!this.inputClicked) {
      this.blurInput();
    }

    this.inputClicked = false;
  };

  blurInput = () => {
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
    const { clearText } = this.props;
    this.focusInput();
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
        onClick={this.containerClick}
        className={classNames("search--container", className, {
          "search--container-has-value": value,
          "search--container-icon-only": iconOnly,
          "search--container-focused": isFocused
        })}
      >
        <StyledSearchIcon
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
        />
        <Clear
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
          isFocused={isStyleForFocusedUsed}
          showElement={isFocused}
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
  iconOnly: false,
  className: "",
  searchBtnAreaLabel: "Search button",
  clearBtnAreaLabel: "Clear button",
  cancelBtnAreaLabel: "Cancel button",
  inputAreaLabel: "Search input",
  isSuggestOpened: false
};

SearchInput.displayName = "SearchComponent";

export default SearchInput;
