import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Transition } from "react-transition-group";

import { TWO_SIZE_VARIANT } from "../../../utils/sizes";
import { Provider as DropDownProvider } from "./Context";
import SelectionProvider from "../../SelectionProvider/Provider";
import { Consumer as SelectionConsumer } from "../../SelectionProvider/Context";
import {
  ARROWUP,
  ARROWDOWN,
  ENTER,
  SPACEBAR,
  ESCAPE,
  TAB
} from "../../../utils/keyCharCodes";
import { VARIANTS_WITH_BORDER, LAYOUT_VARIANTS } from "./constants";
import {
  StyledGroup,
  StyledChildWrapper,
  StyledGroupWrapper,
  StyledChevron,
  StyledSelectedText,
  StyledKeyboardProvider,
  HiddenLabel
} from "./DropDownGroup.styles";
import { throttle } from "../../../utils";

class DropDownGroup extends React.Component {
  static LAYOUT_VARIANTS = LAYOUT_VARIANTS;

  componentDidMount() {
    const container = this.props.containerOverride || document;
    container.addEventListener("click", this.handleOutsideClick);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.isOpen !== state.isOpenPrevProp) {
      return {
        isOpen: props.isOpen,
        isOpenPrevProp: props.isOpen
      };
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    const { isOpen } = this.state;
    // scroll dropdown to top after opening
    if (!this.props.isOpen && isOpen && isOpen !== prevState.isOpen) {
      this.styledChildWrapper.current.scrollTop = 0;
    }
    const { value, valueOverride } = this.props;
    const selected = Array.isArray(valueOverride) ? valueOverride : value;
    if (selected && selected.length > 0) {
      this.enableNavigation();
    }
  }

  componentWillUnmount() {
    const container = this.props.containerOverride || document;
    container.removeEventListener("click", this.handleOutsideClick);
  }

  onClick = () => {
    this.toggleDropdown();
  };

  onKeyDown = e => {
    const { keyCode } = e;
    const { keywordSearch } = this.props;
    const { isOpen } = this.state;

    switch (keyCode) {
      case ESCAPE:
        this.closeDropdown();
        break;
      case TAB:
        if (isOpen) {
          e.preventDefault();
        }
        break;
      case ARROWUP:
      case ARROWDOWN:
        e.preventDefault();
        if (this.state.isOpen) {
          this.enableNavigation();
        } else {
          this.openDropdown();
        }
        break;
      case ENTER:
      case SPACEBAR:
        e.preventDefault();
        this.toggleDropdown();
        break;
      default:
        if (keywordSearch) {
          this.searchKeyWord(e);
        }
        break;
    }
  };

  getCurrentSelection = value => {
    const selectedItem = React.Children.toArray(this.props.children).find(
      c => c.props.value === value
    );

    return selectedItem && selectedItem.props.children;
  };

  searchKeyWord(e) {
    const { keyCode } = e;
    const { word } = this.state;
    if (keyCode >= 48 && keyCode <= 90) {
      const temp = word + e.key;
      this.setState({ word: temp }, () => this.searchValue(temp));
      this.cleanWord();
    }
  }

  cleanWord = throttle(() => {
    this.setState({ word: "", selected: null });
  }, 1000);

  searchValue = string => {
    const { children, onChange } = this.props;

    const childrenArray = React.Children.toArray(children);

    const firstMatch = childrenArray.find(
      thisArg =>
        thisArg.props.children.substring(0, string.length).toLowerCase() ===
        string
    );
    if (firstMatch) {
      this.setState(() => ({ selected: [firstMatch.props.value] }));
      if (onChange) onChange([firstMatch.props.value]);
    }
  };

  closeDropdown = () => {
    const { dropdownMenuClose } = this.props;
    this.groupWrapper.current.focus();
    this.setState({
      isOpen: false,
      selected: null,
      word: ""
    });
    if (dropdownMenuClose) {
      dropdownMenuClose();
    }
  };

  openDropdown = () => {
    const { dropdownMenuOpen } = this.props;
    this.setState({ isOpen: true });
    if (dropdownMenuOpen) {
      dropdownMenuOpen();
    }
  };

  enableNavigation = () => {
    if (!this.state.navigateOptions) {
      this.setState({ navigateOptions: true });
    }
  };

  toggleDropdown = () => {
    const { onDropDownToggle } = this.props;
    const { isOpen } = this.state;

    if (isOpen) {
      this.closeDropdown();
    } else {
      this.openDropdown();
    }

    if (onDropDownToggle) {
      onDropDownToggle(!isOpen);
    }
  };

  stopInteraction = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  handleOutsideClick = e => {
    if (this.state.isOpen && !this.groupWrapper.current.contains(e.target)) {
      this.closeDropdown();
    }
  };

  displayLabel = selected => {
    const { placeholder, label, hiddenLabel } = this.props;

    if (placeholder.length > 0 && selected.length === 0) {
      return placeholder;
    }

    if (!hiddenLabel && selected.length > 0 && label.length > 0) {
      return (
        <Fragment>
          {label} {this.getCurrentSelection(selected[0])}
        </Fragment>
      );
    }

    return this.getCurrentSelection(selected[0]);
  };

  groupWrapper = React.createRef();
  styledChildWrapper = React.createRef();
  ANIMATION_TIMEOUT = 300;

  /* eslint-disable */
  state = {
    selected: null,
    isOpen: false,
    isOpenPrevProp: false,
    onClose: this.onClick,
    navigateOptions: false,
    word: ""
  };

  /* eslint-enable */

  render() {
    const {
      children,
      value,
      valueOverride,
      onChange,
      variant,
      isOpen: isOpenProp,
      keywordSearch,
      withKeyboardProvider,
      placeholder,
      label,
      hiddenLabel, // using hiddenLabel prop to avail proper screen readers reading when no placeholder is provided - using label as hidden placeholder
      disabled,
      size,
      shouldOpenDownward,
      icon,
      chevronVisible,
      fullWidth,
      onDropDownToggle,
      hybrid,
      ...props
    } = this.props;
    const {
      selected: selectedValue,
      isOpen: isOpenState,
      navigateOptions
    } = this.state;
    const isOpen = isOpenProp || isOpenState;
    const hiddenLabelId = `hidden-label__${(placeholder || label).replace(
      / /g,
      "_"
    )}`;
    const onClickListener = disabled
      ? { onMouseDown: this.stopInteraction }
      : { onClick: this.onClick };
    const isBorderAround = VARIANTS_WITH_BORDER.includes(variant);

    return (
      <SelectionProvider
        onChange={onChange}
        isMultiSelect={false}
        value={value}
        valueOverride={valueOverride || selectedValue}
      >
        <SelectionConsumer>
          {({ selected }) => {
            const keyboardProviderProps = withKeyboardProvider
              ? { keywordSearch, selected }
              : { as: "div" };

            return (
              <Transition in={isOpen} timeout={this.ANIMATION_TIMEOUT}>
                {state => {
                  // keep dropdown--open-upward className until collapse animation is finished (.3s)
                  const hasOpenUpwardClass =
                    state !== "exited" && !shouldOpenDownward;

                  return (
                    <StyledGroupWrapper
                      {...props}
                      className={classNames(props.className, {
                        "dropdown--open-upward": hasOpenUpwardClass,
                        "dropdown--disabled": disabled,
                        "full-width": fullWidth,
                        [`hybrid-margin-${size}`]: hybrid,
                        hybrid
                      })}
                      tabIndex={disabled || hybrid ? -1 : 0}
                      aria-haspopup="listbox"
                      aria-labelledby={hiddenLabelId}
                      onKeyDown={this.onKeyDown}
                      ref={this.groupWrapper}
                    >
                      <StyledGroup
                        {...onClickListener}
                        className={classNames(
                          `dropdown__label dropdown--${size}`,
                          {
                            "dropdown--active": isOpen,
                            "dropdown--border": isBorderAround,
                            "dropdown--no-border": !isBorderAround,
                            "dropdown__label--disabled": disabled,
                            "full-width": fullWidth
                          }
                        )}
                      >
                        {/* HiddenLabel is required for correct screen readers
                        readings when an option is selected */}
                        <HiddenLabel id={hiddenLabelId}>
                          {placeholder || label}
                        </HiddenLabel>
                        <StyledSelectedText
                          className={classNames({
                            "dropdown__text--disabled": disabled
                          })}
                        >
                          {icon}
                          {this.displayLabel(selected)}
                        </StyledSelectedText>

                        {chevronVisible && (
                          <StyledChevron
                            className={classNames({
                              "dropdown__icon--hide": isOpen,
                              "dropdown--no-border": !isBorderAround,
                              "dropdown__chevron--disabled": disabled
                            })}
                          />
                        )}
                      </StyledGroup>
                      <Transition in={isOpen} timeout={this.ANIMATION_TIMEOUT}>
                        {wrapperState => (
                          <StyledChildWrapper
                            className={classNames(
                              "dropdown__items",
                              `dropdown__items--${size}`,
                              {
                                "dropdown--clicked": isOpen,
                                "dropdown--overflow": wrapperState === "entered"
                              }
                            )}
                            ref={this.styledChildWrapper}
                          >
                            <DropDownProvider value={{ ...this.state, isOpen }}>
                              <StyledKeyboardProvider
                                role="listbox"
                                ariaLabelledby={hiddenLabelId}
                                {...keyboardProviderProps}
                                navigateOptions={navigateOptions}
                              >
                                {children}
                              </StyledKeyboardProvider>
                            </DropDownProvider>
                          </StyledChildWrapper>
                        )}
                      </Transition>
                    </StyledGroupWrapper>
                  );
                }}
              </Transition>
            );
          }}
        </SelectionConsumer>
      </SelectionProvider>
    );
  }
}

DropDownGroup.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string),
  valueOverride: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  variant: PropTypes.oneOf(Object.values(LAYOUT_VARIANTS)),
  label: PropTypes.string,
  hiddenLabel: PropTypes.bool,
  isOpen: PropTypes.bool,
  keywordSearch: PropTypes.bool,
  withKeyboardProvider: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(TWO_SIZE_VARIANT),
  fullWidth: PropTypes.bool,
  shouldOpenDownward: PropTypes.bool,
  icon: PropTypes.node,
  chevronVisible: PropTypes.bool,
  onDropDownToggle: PropTypes.func,
  hybrid: PropTypes.bool,
  dropdownMenuOpen: PropTypes.func,
  dropdownMenuClose: PropTypes.func,
  containerOverride: PropTypes.node
};

DropDownGroup.defaultProps = {
  value: [],
  valueOverride: null,
  onChange: null,
  placeholder: "",
  variant: LAYOUT_VARIANTS.BORDERED_INNER_LABEL,
  isOpen: false,
  keywordSearch: true,
  withKeyboardProvider: true,
  label: "",
  hiddenLabel: false,
  disabled: false,
  size: TWO_SIZE_VARIANT[1],
  shouldOpenDownward: true,
  icon: null,
  chevronVisible: true,
  fullWidth: false,
  onDropDownToggle: null,
  hybrid: false,
  dropdownMenuOpen: null,
  dropdownMenuClose: null,
  containerOverride: null
};

export default DropDownGroup;
