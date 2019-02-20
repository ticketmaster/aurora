import { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

class Portal extends Component {
  componentDidMount() {
    if (global.window.document.body) {
      this.rootEl = global.window.document.createElement("div");
      this.rootEl.id = `popover-root-${new Date().getTime()}`;
      global.window.document.body.appendChild(this.rootEl);
    }
  }

  componentWillUnmount() {
    global.window.document.body.removeChild(this.rootEl);
  }

  rootEl = null;

  render() {
    const { children } = this.props;

    return this.rootEl ? ReactDOM.createPortal(children, this.rootEl) : null;
  }
}

Portal.propTypes = {
  children: PropTypes.node
};

Portal.defaultProps = {
  children: null
};

export default Portal;
