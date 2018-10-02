import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import classNames from "classnames";
import ChevronIcon from "../../Icons/Chevron";
import colors from "../../../theme/colors";
import KeyBoardProvider from "../../KeyboardNavigation/Provider";
import { Provider as DropDownProvider } from "./Context";
import SelectionProvider from "../../SelectionProvider/Provider";
import { Consumer as SelectionConsumer } from "../../SelectionProvider/Context";
import { ARROWUP, ARROWDOWN, SPACEBAR } from "../../../utils/keyCharCodes";

const StyledGroup = styled.label`
  color: ${colors.onyx.light};
  width: 100%;
  height: 44px;
  background-color: white;

  border-radius: 2px;
  position: relative;
  padding: 0px;
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &.dropdown--border {
    border: solid 1px ${colors.onyx.muted};
    text-align: left;
    &:hover {
      margin: -1px;
      border: solid 2px ${colors.azure.base};
    }
  }

  &.dropdown--no-border {
    border: solid 1px ${colors.white.base};
    text-align: right;
    justify-content: flex-end;
  }

  &:focus {
    margin: -1px;
    border: solid 2px ${colors.azure.base};
  }

  &.dropdown--active {
    margin: 0;
    border: solid 1px ${colors.onyx.muted};
    border-radius: 2px 2px 0px 0px;
    &:hover {
      margin: 0;
      border: solid 1px ${colors.onyx.muted};
    }
  }
`;

const StyledChildWrapper = styled.div`
  display: none;
  background-color: white;
  border-radius: 0 0 2px 2px;
  border: solid 1px ${colors.onyx.muted};
  padding-top: 4px;
  padding-bottom: 8px;
  white-space: nowrap;
  margin-top: -1px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  min-width: 100%;
  box-sizing: content-box;

  &.dropdown--clicked {
    flex-direction: column;
    position: absolute;
    overflow-y: auto;
    flex: 1;
    display: flex;
    overflow: auto;
    width: 100%;
    overflow-x: hidden;
    z-index: 10;
    height: auto;
    max-height: 300px;
  }
`;

const StyledGroupWrapper = styled.div`
  position: relative;
  color: grey;
  width: 100%;
  outline: none;
`;

const StyledChevron = styled(ChevronIcon)`
  margin-right: 12px;

  &.dropdown__icon--hide {
    display: none;
  }
`;

const StyledSelectedText = styled.div`
  font-size: 16px;
  white-space: nowrap;

  &.dropdown--border {
    margin-left: 15px;
    width: 60%;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &.dropdown--no-border {
    margin-right: 8px;
    width: 60%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &.dropdown--alignment {
    margin-right: 32px;
  }
`;

const StyledKeyboardProvider = styled(KeyBoardProvider)`
  min-height: min-content;
  flex-direction: column;
  display: flex;
`;

class DropDownGroup extends React.Component {
  componentDidMount() {
    document.addEventListener("click", this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleOutsideClick);
  }

  onClick = () => {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  };

  onKeyDown = e => {
    if (e.keyCode === ARROWUP || e.keyCode === ARROWDOWN) {
      e.preventDefault();
      this.setState({ isOpen: true });
    }
    if (e.keyCode === SPACEBAR) {
      this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
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

  handleOutsideClick = e => {
    if (!this.thisComponent.current.contains(e.target)) {
      this.setState(() => ({ isOpen: false }));
    }
  };

  displayLabel = (selected, variant) => {
    const { placeholder } = this.props;

    if (variant === 0 && selected.length === 0) return placeholder;

    if (variant === 0 && selected.length > 0)
      return this.getCurrentSelection(selected[0]);

    return `${this.props.label} ${this.getCurrentSelection(selected[0])}`;
  };

  /* eslint-disable */
  state = {
    isOpen: false,
    onClose: this.onClick
  };
  /* eslint-enable */

  thisComponent = React.createRef();

  render() {
    const {
      children,
      value,
      onChange,
      variant,
      isOpen: isOpenProp,
      keywordSearch,
      ...props
    } = this.props;
    const { isOpen: isOpenState } = this.state;
    const isOpen = isOpenProp || isOpenState;

    return (
      <SelectionProvider
        onChange={onChange}
        isMultiSelect={false}
        value={value}
      >
        <SelectionConsumer>
          {({ selected }) => (
            <StyledGroupWrapper
              {...props}
              tabIndex="0"
              aria-haspopup="listbox"
              onKeyDown={this.onKeyDown}
              innerRef={this.thisComponent}
            >
              <StyledGroup
                onClick={this.onClick}
                className={classNames({
                  "dropdown--active": isOpen,
                  "dropdown--border": variant === 0,
                  "dropdown--no-border": variant === 1
                })}
              >
                <StyledSelectedText
                  className={classNames({
                    "dropdown--selected": true,
                    "dropdown--border": variant === 0,
                    "dropdown--no-border": variant === 1,
                    "dropdown--alignment": variant === 1 && isOpen
                  })}
                >
                  {this.displayLabel(selected, variant)}
                </StyledSelectedText>

                <StyledChevron
                  className={classNames({
                    "dropdown__icon--hide": isOpen,
                    "dropdown--no-border": variant === 1
                  })}
                  direction="down"
                  size={12}
                />
              </StyledGroup>

              <StyledChildWrapper
                className={classNames({
                  dropdown__items: true,
                  "dropdown--clicked": isOpen
                })}
              >
                <DropDownProvider value={{ ...this.state, isOpen }}>
                  <StyledKeyboardProvider
                    role="listbox"
                    keywordSearch={keywordSearch}
                    selected={selected}
                  >
                    {children}
                  </StyledKeyboardProvider>
                </DropDownProvider>
              </StyledChildWrapper>
            </StyledGroupWrapper>
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
  keywordSearch: PropTypes.bool
};

DropDownGroup.defaultProps = {
  value: [],
  onChange: null,
  placeholder: "",
  variant: 0,
  label: "Sort By:",
  isOpen: false,
  keywordSearch: true
};
export default DropDownGroup;
