import React, { PureComponent } from "react";
import { bool, node } from "prop-types";
import styled from "styled-components";

import AccordionItem from "./AccordionItem";
import AccordionPanel from "./AccordionPanel";

const Wrapper = styled.div`
  display: inherit;
`;

class Accordion extends PureComponent {
  static propTypes = {
    children: node.isRequired,
    multiToggle: bool
  };

  static defaultProps = {
    multiToggle: false
  };

  constructor(props) {
    super(props);
    const openSections = {};

    this.state = { openSections };
  }

  componentDidCatch() {
    this.setState(state => ({...state, hasError: true}))
  }

  onClick = e => {
    const id = e;
    const {
      props: { multiToggle },
      state: { openSections }
    } = this;

    const isOpen = !!openSections[id];

    if (multiToggle) {
      this.setState({
        openSections: {
          ...openSections,
          [id]: !isOpen
        }
      });
    } else {
      this.setState({
        openSections: {
          [id]: !isOpen
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
          updatedOpenSections[child.props.id] = true;
        }
      });
    }
    this.setState({ openSections: updatedOpenSections });
  };

  clonedChildren = () => {
    const {
      state: { openSections }
    } = this;

    return React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        ...child.props,
        isOpen: !!openSections[child.props.id],
        toggle: this.onClick
      })
    );
  };

  render() {
    return (
      <Wrapper className="accordion-wrapper" data-allow-toggle>
        {this.clonedChildren()}
      </Wrapper>
    );
  }
}

Accordion.Item = AccordionItem;
Accordion.Panel = AccordionPanel;
export default Accordion;
