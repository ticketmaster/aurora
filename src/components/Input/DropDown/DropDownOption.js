import React from "react";
import PropTypes from "prop-types";
import { Consumer as SelectionConsumer } from "../../SelectionProvider/Context";
import { Consumer as KeyBoardConsumer } from "../../KeyboardNavigation/Context";
import { Consumer as DropDownConsumer } from "./Context";

import composeEventHandlers from "../../../utils/composeEventHandlers";
import DropDownInput from "./DropDownInput";

const SPACEBAR = 32;

const DropDownOption = ({ value, index, children, ...props }) => (
  <KeyBoardConsumer>
    {({ focused, focusSelected }) => (
      <SelectionConsumer>
        {({ selected, onClick }) => {
          const isChecked = selected.includes(value);
          return (
            <DropDownConsumer>
              {({ isOpen, onClose }) => (
                <DropDownInput
                  {...props}
                  isOpen={isOpen}
                  value={value}
                  index={index}
                  selected={selected}
                  isSelected={isChecked}
                  isFocused={focused === index}
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

DropDownOption.propTypes = {
  value: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
};

DropDownOption.defaultProps = {
  onClick: null
};

export default DropDownOption;
