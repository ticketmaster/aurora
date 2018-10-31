import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

class Portal extends React.Component {
  state = {
    rootSelector: null,
    container: null
  };

  componentDidMount() {
    const rootSelector = document.getElementById("modal-root");
    const container = document.createElement("div");

    rootSelector.appendChild(container);

    // we need to do it in componentDidMount for Portal to work correctly with SSR
    // eslint-disable-next-line
    this.setState({ rootSelector, container });
  }

  componentWillUnmount() {
    if (this.state.rootSelector) {
      this.state.rootSelector.removeChild(this.state.container);
    }
  }

  render() {
    const { rootSelector, container } = this.state;
    if (!rootSelector) {
      return null;
    }
    return ReactDOM.createPortal(this.props.children, container);
  }
}

Portal.propTypes = {
  children: PropTypes.node.isRequired
};

export default Portal;
