import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

class Portal extends React.Component {
  componentDidMount() {
    this.rootSelector = document.getElementById("modal-root");
    this.container = document.createElement("div");
    this.rootSelector.appendChild(this.container);
  }

  componentWillUnmount() {
    this.rootSelector.removeChild(this.container);
  }

  render() {
    return this.container
      ? ReactDOM.createPortal(this.props.children, this.container)
      : null;
  }
}

Portal.propTypes = {
  children: PropTypes.node.isRequired
};

export default Portal;
