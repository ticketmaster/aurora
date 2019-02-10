import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import AccordionItem from "./AccordionItem";
import AccordionPanel from "./AccordionPanel";

import { mediumAndUp } from "../../theme/mediaQueries";

const StyledAccordion = styled.div`
  > :nth-child(n + 1)::after {
    background: #ebebeb;
    content: " ";
    display: flex;
    height: 1px;
    margin-left: 0px;
    margin-right: 0px;
  }

  > :nth-last-child(1)::after {
    background: none;
    content: " ";
    display: flex;
    height: 1px;
    margin-left: 16px;
    margin-right: 16px;
  }

  ${mediumAndUp`
    > :nth-child(n + 1)::after {
      background: #ebebeb;
      content: " ";
      display: flex;
      height: 1px;
      margin-left: 16px;
      margin-right: 16px;
    }
  `};
`;

class Accordion extends PureComponent {
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
    return (
      <StyledAccordion className="accordion">{clonedChildren}</StyledAccordion>
    );
  }
}

Accordion.Item = AccordionItem;
Accordion.Panel = AccordionPanel;
export default Accordion;
