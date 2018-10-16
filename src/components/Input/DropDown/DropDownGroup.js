import React from "react";
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
  SPACEBAR,
  ESCAPE,
  TAB
} from "../../../utils/keyCharCodes";
import {
  StyledGroup,
  StyledChildWrapper,
  StyledGroupWrapper,
  StyledChevron,
  StyledSelectedText,
  StyledKeyboardProvider,
  HiddenLabel
} from "./DropDownGroup.styles";

class DropDownGroup extends React.Component {
  componentDidMount() {
    document.addEventListener("click", this.handleOutsideClick);
  }

  componentDidUpdate(prevProps, prevState) {
    const { isOpen } = this.state;
    // disables scroll when dropdown is open
    document.addEventListener("wheel", this.disableScroll);
    // scroll dropdown to top after opening
    if (isOpen && isOpen !== prevState.isOpen) {
      this.styledChildWrapper.current.scrollTop = 0;
    }
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleOutsideClick);
    document.removeEventListener("wheel", this.disableScroll);
  }

  onClick = () => {
    this.toggleDropdown();
  };

  onKeyDown = e => {
    const { keyCode } = e;
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
        this.openDropdown();
        break;
      case SPACEBAR:
        e.preventDefault();
        this.toggleDropdown();
        break;
      default:
        break;
    }
  };

  getCurrentSelection = value => {
    const [label = ""] = React.Children.toArray(this.props.children).filter(
      c => c.props.value === value
    );

    if (label) {
      return label.props.children;
    }
    return label;
  };
  closeDropdown = () => {
    this.setState(() => ({
      // set openUpward to false when closing the dropdown, otherwise check position
      openUpward: false,
      isOpen: false,
      maxDropdownHeight: 0
    }));
  };

  openDropdown = () => {
    this.setState(() => {
      const { shouldOpenDownward } = this.props;
      const openUpward = this.shouldOpenUpward();

      return {
        // set openUpward to false when closing the dropdown, otherwise check position
        openUpward: shouldOpenDownward ? false : openUpward,
        isOpen: true,
        maxDropdownHeight:
          (openUpward
            ? this.calculateSpaceToTop()
            : this.calculateSpaceToBottom()) - this.ADDITIONAL_SPACE
      };
    });
  };

  toggleDropdown = () => {
    if (this.state.isOpen) {
      this.closeDropdown();
    } else {
      this.openDropdown();
    }
  };

  disableScroll = e => {
    if (this.state.isOpen && !this.groupWrapper.current.contains(e.target)) {
      this.stopInteraction(e);
    }
  };

  stopInteraction = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  calculateSpaceToTop = () => {
    const { top } = this.styledGroup.current.getBoundingClientRect();
    return top;
  };

  calculateSpaceToBottom = () => {
    const viewPortHeight = document.documentElement.clientHeight;
    const { bottom } = this.styledGroup.current.getBoundingClientRect();
    return viewPortHeight - bottom;
  };

  // check if dropdown height is higher than the space underneath it
  shouldOpenUpward = () =>
    this.calculateSpaceToBottom() <
    this.DROPDOWN_MIN_HEIGHT + this.ADDITIONAL_SPACE;

  handleOutsideClick = e => {
    if (this.state.isOpen && !this.groupWrapper.current.contains(e.target)) {
      this.closeDropdown();
    }
  };

  displayLabel = (selected, variant) => {
    const { placeholder, label } = this.props;

    if (placeholder.length > 0 && selected.length === 0) {
      return placeholder;
    }

    if (variant === 0 && selected.length > 0) {
      return this.getCurrentSelection(selected[0]);
    }

    if (variant === 1 && label.length > 0) {
      return `${label} ${this.getCurrentSelection(selected[0])}`;
    }

    return this.getCurrentSelection(selected[0]);
  };

  groupWrapper = React.createRef();
  optionsContainer = React.createRef();
  styledGroup = React.createRef();
  styledChildWrapper = React.createRef();
  ANIMATION_TIMEOUT = 300;
  ADDITIONAL_SPACE = 44;
  DROPDOWN_MIN_HEIGHT = this.props.size === "small" ? 120 : 135;

  /* eslint-disable */
  state = {
    isOpen: false,
    onClose: this.onClick,
    openUpward: false,
    maxDropdownHeight: 0
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
      disabled,
      size,
      shouldOpenDownward,
      ...props
    } = this.props;
    const { isOpen: isOpenState, openUpward, maxDropdownHeight } = this.state;
    const isOpen = isOpenProp || isOpenState;
    const hiddenLabelId = `hidden-label__${(placeholder || label).replace(
      / /g,
      "_"
    )}`;
    const onClickListener = disabled
      ? { onMouseDown: this.stopInteraction }
      : { onClick: this.onClick };
    const ChildrenWrapper = withKeyboardProvider
      ? StyledKeyboardProvider
      : StyledKeyboardProvider.withComponent("div");
    const childWrapperStyles = shouldOpenDownward
      ? {}
      : { maxHeight: maxDropdownHeight };

    return (
      <SelectionProvider
        onChange={onChange}
        isMultiSelect={false}
        value={value}
        valueOverride={valueOverride}
      >
        <SelectionConsumer>
          {({ selected }) => {
            const keyboardProviderProps = withKeyboardProvider
              ? { keywordSearch, selected }
              : {};

            return (
              <Transition in={openUpward} timeout={this.ANIMATION_TIMEOUT}>
                {state => {
                  // keep dropdown--open-upward className until collapse animation is finished (.3s)
                  const hasOpenUpwardClass = state !== "exited";

                  return (
                    <StyledGroupWrapper
                      {...props}
                      className={classNames({
                        "dropdown--open-upward": hasOpenUpwardClass,
                        "dropdown--disabled": disabled
                      })}
                      tabIndex={disabled ? -1 : 0}
                      aria-haspopup="listbox"
                      aria-labelledby={hiddenLabelId}
                      onKeyDown={this.onKeyDown}
                      innerRef={this.groupWrapper}
                    >
                      <StyledGroup
                        {...onClickListener}
                        className={classNames(`dropdown--${size}`, {
                          "dropdown--active": isOpen,
                          "dropdown--border": variant === 0,
                          "dropdown--no-border": variant === 1,
                          "dropdown__label--disabled": disabled
                        })}
                        innerRef={this.styledGroup}
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
                          {this.displayLabel(selected, variant)}
                        </StyledSelectedText>

                        <StyledChevron
                          className={classNames({
                            "dropdown__icon--hide": isOpen,
                            "dropdown--no-border": variant === 1,
                            "dropdown__chevron--disabled": disabled
                          })}
                          direction="down"
                          size={12}
                        />
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
                            style={childWrapperStyles}
                            innerRef={this.styledChildWrapper}
                          >
                            <DropDownProvider value={{ ...this.state, isOpen }}>
                              {/* this div is required to decide which way to open a dropdown */}
                              <div ref={this.optionsContainer}>
                                <ChildrenWrapper
                                  role="listbox"
                                  aria-labelledby={hiddenLabelId}
                                  {...keyboardProviderProps}
                                >
                                  {children}
                                </ChildrenWrapper>
                              </div>
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
  variant: PropTypes.number,
  label: PropTypes.string,
  isOpen: PropTypes.bool,
  keywordSearch: PropTypes.bool,
  withKeyboardProvider: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(TWO_SIZE_VARIANT),
  shouldOpenDownward: PropTypes.bool
};

DropDownGroup.defaultProps = {
  value: [],
  valueOverride: null,
  onChange: null,
  placeholder: "",
  variant: 0,
  isOpen: false,
  keywordSearch: true,
  withKeyboardProvider: true,
  label: "",
  disabled: false,
  size: TWO_SIZE_VARIANT[1],
  shouldOpenDownward: false
};

export default DropDownGroup;
