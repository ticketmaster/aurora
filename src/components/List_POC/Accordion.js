import React, { Component } from "react";
// import PropTypes from "prop-types";

import AccordionItem from "./AccordionItem";

class Accordion extends Component {
  // static propTypes = {
  //   allowMultipleOpen: PropTypes.bool,
  //   children: PropTypes.any.isRequired
  // };

  static defaultProps = {
    allowMultipleOpen: false
  };

  constructor(props) {
    super(props);

    const openSections = {};

    this.state = { openSections };
  }

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

  toggle = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  };

  onClick = label => {
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

  // render = () => {
  //   const {openSections} = this.state;
  //   return this.props.children(this.state, this.onClick )
  // }

  render() {
    const {
      onClick,
      props: { children },
      state: { openSections }
    } = this;

    return (
      <div style={{ border: "2px solid #008f68" }}>
        {this.props.children.map(child => (
          <AccordionItem
            isOpen={!!openSections[child.props.label]}
            label={child.props.label}
            onClick={onClick}
          >
            {child.props.children}
          </AccordionItem>
        ))}
      </div>
    );
  }
}

export default Accordion;
