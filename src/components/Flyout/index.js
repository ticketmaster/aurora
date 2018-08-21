import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import colors from "../../theme/colors";
import spacing from "../../theme/spacing";
import constants from "../../theme/constants";
import { FlyoutProvider } from "./Context";

const FlyoutContainer = styled.div`
  display: ${props => (props.isOpen ? "block" : "none")};
  flex-direction: column;
  position: absolute;
  top: auto;
  bottom: 90%;
  right: 0;
  width: 205px;
  overflow: hidden;
  background-color: ${colors.white.base};
  padding: ${spacing.cozy};
  border-radius: ${constants.borderRadius.small};
`;

class Flyout extends Component {
  state = {
    onItemClick: () => {}, // eslint-disable-line
    selectedIndex: this.props.selectedIndex // eslint-disable-line
  };

  componentWillMount() {
    this.setState({
      onItemClick: this.onItemClick // eslint-disable-line
    });
  }

  onItemClick = ({ index }) => {
    this.setState({ selectedIndex: index }); // eslint-disable-line
    this.props.onFlyoutOptionSelected({ selectedIndex: index });
  };

  render() {
    const { isOpen, children } = this.props;

    return (
      <FlyoutProvider value={this.state}>
        <FlyoutContainer isOpen={isOpen}>{children}</FlyoutContainer>
      </FlyoutProvider>
    );
  }
}

Flyout.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onFlyoutOptionSelected: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number.isRequired
};

export default Flyout;
