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
  ESCAPE
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

  componentWillUnmount() {
    document.removeEventListener("click", this.handleOutsideClick);
  }

  onClick = () => {
    this.setState(({ isOpen }) => ({
      // set openUpward to false when closing the dropdown, otherwise check position
      openUpward: isOpen ? false : this.checkPosition(),
      isOpen: !isOpen
    }));
  };

  onKeyDown = e => {
    const { keyCode } = e;
    e.preventDefault();
    if (keyCode === ESCAPE) {
      this.setState({ isOpen: false });
      return;
    }
    if (keyCode === ARROWUP || keyCode === ARROWDOWN) {
      this.setState({ isOpen: true });
      return;
    }
    if (keyCode === SPACEBAR) {
      this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
    }
  };

  onMouseDown = e => {
    e.preventDefault();
    if (this.props.disabled) {
      e.stopPropagation();
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

  checkPosition = () => {
    // check if dropdown height is higher than the space underneath it
    const viewPortHeight = document.documentElement.clientHeight;
    const { bottom } = this.styledGroup.current.getBoundingClientRect();
    const spaceToBottom = viewPortHeight - bottom;
    const ADDITIONAL_SPACE = 54; // according to requirements
    const optionsHeight = this.optionsContainer.current.offsetHeight;
    const optionsMaxHeight = optionsHeight > 413 ? 413 : optionsHeight;

    return spaceToBottom <= optionsMaxHeight + +ADDITIONAL_SPACE;
  };

  handleOutsideClick = e => {
    if (this.state.isOpen && !this.thisComponent.current.contains(e.target)) {
      this.setState(() => ({ isOpen: false, openUpward: false }));
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

  thisComponent = React.createRef();
  optionsContainer = React.createRef();
  styledGroup = React.createRef();
  ANIMATION_TIMEOUT = 300;

  /* eslint-disable */
  state = {
    isOpen: false,
    onClose: this.onClick,
    openUpward: false
  };
  /* eslint-enable */

  render() {
    const {
      children,
      value,
      onChange,
      variant,
      isOpen: isOpenProp,
      keywordSearch,
      withKeyboardProvider,
      placeholder,
      label,
      disabled,
      size,
      ...props
    } = this.props;
    const { isOpen: isOpenState, openUpward } = this.state;
    const isOpen = isOpenProp || isOpenState;
    const hiddenLabelId = `hidden-label__${(placeholder || label).replace(
      / /g,
      "_"
    )}`;
    const onClickListener = disabled ? {} : { onClick: this.onClick };

    return (
      <SelectionProvider
        onChange={onChange}
        isMultiSelect={false}
        value={value}
      >
        <SelectionConsumer>
          {({ selected }) => (
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
                    innerRef={this.thisComponent}
                  >
                    <StyledGroup
                      {...onClickListener}
                      onMouseDown={this.onMouseDown} // disable focus on click
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
                        >
                          <DropDownProvider value={{ ...this.state, isOpen }}>
                            {/* this div is required to decide which way to open a dropdown */}
                            <div ref={this.optionsContainer}>
                              {withKeyboardProvider ? (
                                <StyledKeyboardProvider
                                  role="listbox"
                                  aria-labelledby={hiddenLabelId}
                                  keywordSearch={keywordSearch}
                                  selected={selected}
                                >
                                  {children}
                                </StyledKeyboardProvider>
                              ) : (
                                children
                              )}
                            </div>
                          </DropDownProvider>
                        </StyledChildWrapper>
                      )}
                    </Transition>
                  </StyledGroupWrapper>
                );
              }}
            </Transition>
          )}
        </SelectionConsumer>
      </SelectionProvider>
    );
  }
}

DropDownGroup.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  variant: PropTypes.number,
  label: PropTypes.string,
  isOpen: PropTypes.bool,
  keywordSearch: PropTypes.bool,
  withKeyboardProvider: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(TWO_SIZE_VARIANT)
};

DropDownGroup.defaultProps = {
  value: [],
  onChange: null,
  placeholder: "",
  variant: 0,
  isOpen: false,
  keywordSearch: true,
  withKeyboardProvider: true,
  label: "",
  disabled: false,
  size: TWO_SIZE_VARIANT[1]
};

export default DropDownGroup;
