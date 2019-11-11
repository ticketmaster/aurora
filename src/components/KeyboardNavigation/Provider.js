import React from "react";
import PropTypes from "prop-types";
import { Provider } from "./Context";
import { ARROWUP, ARROWDOWN, SPACEBAR } from "../../utils/keyCharCodes";

const { forEach } = React.Children;

const getSelectedChild = (children, selectedValue) =>
  React.Children.toArray(children).find(
    thisArg => thisArg.props.value === selectedValue
  );

export default class KeyBoardProvider extends React.Component {
  static propTypes = {
    children(props, propName, componentName) {
      if (props[propName] === null) return new Error("Invalid Child");
      forEach(props[propName], child => {
        if (!child.props.value || !child.props.index) {
          return new Error(
            `Invalid Child \`${child}\` supplied to` +
              ` \`${componentName}\`. Validation failed.`
          );
        }
        return null;
      });
      return null;
    },

    role: PropTypes.string.isRequired,
    className: PropTypes.string,
    keywordSearch: PropTypes.bool,
    keyBoardRef: PropTypes.func,
    navigateOptions: PropTypes.bool,
    ariaLabelledby: PropTypes.string,
  };

  static defaultProps = {
    children: null,
    keyBoardRef: null,
    className: null,
    keywordSearch: false,
    navigateOptions: true,
    ariaLabelledby: null,
  };

  static getDerivedStateFromProps(props, state) {
    const { selected, children } = props;

    if (!selected || !selected.length) return null;

    const selectedValue = selected[selected.length - 1];

    if (state.firstUpdate === true) {
      const selectedChild = getSelectedChild(children, selectedValue);

      return {
        focused: selectedChild ? selectedChild.props.index : 0,
        firstUpdate: false,
        prevSelectedValue: selectedValue
      };
    }

    if (selectedValue !== state.prevSelectedValue) {
      const selectedChild = getSelectedChild(children, selectedValue);

      return {
        focused: selectedChild ? selectedChild.props.index : 0,
        prevSelectedValue: selectedValue
      };
    }

    return null;
  }

  onClick = ({ index }) => {
    this.setState(() => ({ focused: index }));
    this.setState({ word: "" });
  };

  onKeyDown = event => {
    const { keywordSearch } = this.props;

    // heres the logic for looking up words with in the drop down options with the keyboard
    // it currently matches based on the text that has been typed
    if (keywordSearch) {
      const { word } = this.state;
      if (event.keyCode > 48 && event.keyCode < 90) {
        const temp = word + event.key;
        this.setState({ word: temp }, () => this.searchValue(temp));
      }

      if (event.keyCode === SPACEBAR) this.setState({ word: "" });
    }

    if ([ARROWUP, ARROWDOWN].includes(event.keyCode)) {
      event.preventDefault();
      this.cycleSelect(event.keyCode);
    }
  };

  searchValue = string => {
    const { children } = this.props;

    const childrenArray = React.Children.toArray(children);

    const firstMatch = childrenArray.find(thisArg => {
      if (this.isSearchable(thisArg.props.children)) {
        return (
          thisArg.props.children.substring(0, string.length).toLowerCase() ===
          string
        );
      } else if (this.isSearchable(thisArg.props.label)) {
        return (
          thisArg.props.label.substring(0, string.length).toLowerCase() ===
          string
        );
      }

      return false;
    });
    if (firstMatch) this.setState(() => ({ focused: firstMatch.props.index }));
  };

  isSearchable = property => property && property.substring;

  cycleSelect = key => {
    const { focused } = this.state;
    const { children } = this.props;

    if (key === ARROWUP && focused <= 0) {
      this.setState(() => ({ focused: children.length - 1 }));
    }

    if (key === ARROWUP && focused > 0) {
      this.setState(prevState => ({ focused: prevState.focused - 1 }));
    }

    if (key === ARROWDOWN && focused >= children.length - 1) {
      this.setState(() => ({ focused: 0 }));
    }

    if (key === ARROWDOWN && focused < children.length - 1) {
      this.setState(prevState => ({ focused: prevState.focused + 1 }));
    }
  };

  /* eslint-disable */
  state = {
    focused: 0,
    focusSelected: this.onClick,
    word: "",
    firstUpdate: true,
    prevSelectedValue: ""
  };
  /* eslint-enable */

  render() {
    const { role, className, keyBoardRef, ariaLabelledby, navigateOptions } = this.props;
    return (
      <Provider value={{ ...this.state, navigateOptions }}>
        {/* eslint-disable */}
        <div
          aria-labelledby={ariaLabelledby}
          role={role}
          className={className}
          ref={keyBoardRef}
          onKeyDown={this.onKeyDown}
        >
          {this.props.children}
        </div>
        {/* eslint-enable */}
      </Provider>
    );
  }
}
