import React from "react";
import PropTypes from "prop-types";
import { Consumer as SelectionConsumer } from "../../SelectionProvider/Context";
import { Consumer as KeyBoardConsumer } from "../../KeyboardNavigation/Context";
import { Consumer as DropDownConsumer } from "./Context";
import { SPACEBAR } from "../../../utils/keyCharCodes";

import composeEventHandlers from "../../../utils/composeEventHandlers";
import DropDownInput from "./DropDownInput";

class DropDownOption extends React.PureComponent {
  focusInput = () => {
    if (this.input && this.input.current) {
      this.input.current.focus();
    }
  };

  input = React.createRef();

  render() {
    const { value, index, children, className, ...props } = this.props;

    return (
      <KeyBoardConsumer>
        {({ focused, focusSelected, navigateOptions }) => (
          <SelectionConsumer>
            {({ selected, onClick }) => {
              const isChecked = selected.includes(value);
              return (
                <DropDownConsumer>
                  {({ isOpen, onClose }) => (
                    <DropDownInput
                      {...props}
                      ref={this.input}
                      className={className}
                      isOpen={isOpen}
                      value={value}
                      index={index}
                      selected={selected}
                      isSelected={isChecked}
                      isFocused={focused === index && navigateOptions}
                      onMouseMove={() => {
                        focusSelected({ index });
                        this.focusInput();
                      }}
                      onKeyDown={e => {
                        if (e.keyCode === SPACEBAR) {
                          onClick({ value });
                          e.preventDefault();
                        }
                      }}
                      onClick={composeEventHandlers(
                        () => onClose(),
                        () => onClick({ value }),
                        () => focusSelected({ index }),
                        props.onClick
                      )}
                    >
                      {children}
                    </DropDownInput>
                  )}
                </DropDownConsumer>
              );
            }}
          </SelectionConsumer>
        )}
      </KeyBoardConsumer>
    );
  }
}

DropDownOption.propTypes = {
  value: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
};

DropDownOption.defaultProps = {
  onClick: null,
  className: ""
};

export default DropDownOption;
