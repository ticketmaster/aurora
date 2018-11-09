import React, { Component, createContext } from "react";
import PropTypes from "prop-types";

const { Provider, Consumer } = createContext();

export class TabsProvider extends Component {
  static propTypes = {
    tabIndex: PropTypes.number,
    children: PropTypes.node.isRequired,
    onChangeTabIndex: PropTypes.func
  };

  static defaultProps = {
    tabIndex: 0,
    onChangeTabIndex: null
  };

  constructor(props) {
    super(props);
    const { tabIndex } = props;
    this.state = {
      tabIndex
    };
  }

  onChangeTabIndex = callback => e => {
    const tabIndex =
      e.constructor === Number ? e : parseInt(e.target.dataset.index, 10);
    const { tabIndex: currentTabIndex } = this.state;

    if (tabIndex === currentTabIndex) {
      return;
    }
    if (typeof callback === "function") {
      callback(tabIndex);
    }
    this.setState({ tabIndex });
  };

  render() {
    const { children, onChangeTabIndex } = this.props;
    const tabsAssets = {
      tabIndex: this.state.tabIndex,
      onChangeTabIndex: onChangeTabIndex || this.onChangeTabIndex
    };
    return <Provider value={tabsAssets}>{children}</Provider>;
  }
}

export { Consumer as TabsConsumer };
