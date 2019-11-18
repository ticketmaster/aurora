import * as React from "react";
import * as PropTypes from "prop-types";
import { createPortal } from "react-dom";

const getRootNode = (node: HTMLElement): Node => {
  if (typeof node.getRootNode === "function") {
    const rootNode = node.getRootNode();

    if (rootNode && rootNode !== document) {
      return rootNode;
    }
  }

  return document.body;
};

class Portal extends React.Component<{}, { current?: HTMLElement }> {
  static propTypes = {
    children: PropTypes.node
  };

  static defaultProps = {
    children: null
  };

  state: { current?: HTMLElement } = {};

  componentWillUnmount(): void {
    const { current } = this.state;

    if (current && current.parentNode) {
      current.parentNode.removeChild(current);
    }
  }

  private refCallback = (ref: HTMLDivElement | null) => {
    if (ref) {
      const rootNode = getRootNode(ref);
      const current = document.createElement("div");

      current.id = `popover-root-${new Date().getTime()}`;

      rootNode.appendChild(current);

      this.setState({ current });
    }
  };

  render(): React.ReactNode {
    const { children } = this.props;
    const { current } = this.state;

    if (current) {
      return createPortal(children, current);
    }

    return <div ref={this.refCallback} style={{ display: "none" }} />;
  }
}

export default Portal;
