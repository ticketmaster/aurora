import React, { Component } from "react";
import PropTypes from "prop-types";

import AccordionItem from "./AccordionItem";
import AccordionPanel from "./AccordionPanel";

class Accordion extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    allowMultipleOpen: PropTypes.bool
  };

  static defaultProps = {
    allowMultipleOpen: false
  };

  constructor(props) {
    super(props);

    const openSections = {};

    this.state = { openSections };
  }

  onClick = e => {
    e.stopPropagation();
    const label = e.target.getAttribute("label");

    const {
      props: { allowMultipleOpen },
      state: { openSections }
    } = this;

    const isOpen = !!openSections[label];

    if (allowMultipleOpen) {
      this.setState({
        openSections: {
          ...openSections,
          [label]: !isOpen
        }
      });
    } else {
      this.setState({
        openSections: {
          [label]: !isOpen
        }
      });
    }
  };

  toggle = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  };

  updateOpenItems = () => {
    const updatedOpenSections = [];
    if (React.children) {
      React.children.forEach(child => {
        if (child.props.isOpen) {
          updatedOpenSections[child.props.label] = true;
        }
      });
    }
    this.setState({ openSections: updatedOpenSections });
  };

  recursiveCloneChildren(children) {
    return React.Children.map(children, child => {
      let childProps = {};
      if (React.isValidElement(child)) {
        childProps = { someNew: "propToAdd" };
      }
      if (child.props) {
        // String has no Prop
        childProps.children = this.recursiveCloneChildren(child.props.children);
        return React.cloneElement(child, childProps);
      }
      return child;
    });
  }

  render() {
    const {
      state: { openSections }
    } = this;

    const clonedChildren = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        ...child.props,
        isOpen: !!openSections[child.props.label],
        toggle: e => this.onClick(e)
      })
    );
    return <div className="accordion">{clonedChildren}</div>;
  }
}

Accordion.Item = AccordionItem;
Accordion.Panel = AccordionPanel;
export default Accordion;
