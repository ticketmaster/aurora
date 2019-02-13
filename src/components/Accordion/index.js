import React, { PureComponent } from "react";
import { bool, node } from "prop-types";
import styled from "styled-components";

import Section from "./Section";
import Panel from "./Panel";

// import { mediumAndUp } from "../../theme/mediaQueries";

const Wrapper = styled.div`
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

  onClick = e => {
    e.stopPropagation();
    const id = e.target.getAttribute("id");

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

  render() {
    const {
      state: { openSections }
    } = this;

    const clonedChildren = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        ...child.props,
        isOpen: !!openSections[child.props.id],
        toggle: e => this.onClick(e)
      })
    );
    return <Wrapper className="accordion-wrapper">{clonedChildren}</Wrapper>;
  }
}

Accordion.Item = Section;
Accordion.Panel = Panel;
export default Accordion;
