import React from "react";
import PropTypes from "prop-types";
import { Provider } from "./Context";

const ARROWUP = 38;
const ARROWDOWN = 40;
const SPACEBAR = 32;
const TABKEY = 9;
const ENTERKEY = 13;

const WHITELIST = [ARROWUP, ARROWDOWN, SPACEBAR, TABKEY, ENTERKEY];

export default class KeyBoardProvider extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    role: PropTypes.string.isRequired
  };
  onClick = ({ index }) => {
    this.setState(() => ({ focused: index }));
  };

  onKeyDown = event => {
    if (!WHITELIST.includes(event.keyCode)) return;

    /* eslint-disable */
    ![TABKEY, ENTERKEY, SPACEBAR].includes(event.keyCode) &&
      event.preventDefault();
    /* eslint-enable */

    this.cycleSelect(event.keyCode);
  };

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
    focused: null,
    focusSelected: this.onClick
  };
  /* eslint-enable */

  render() {
    const { role } = this.props;
    return (
      <Provider value={this.state}>
        {/* eslint-disable */}
        <div role={role} onKeyDown={this.onKeyDown}>
          {this.props.children}
        </div>
        {/* eslint-enable */}
      </Provider>
    );
  }
}
