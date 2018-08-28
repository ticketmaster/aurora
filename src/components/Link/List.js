import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import constants from "../../theme/constants";
import colors from "../../theme/colors";
import spacing from "../../theme/spacing";

import { LinkListProvider } from "./Context";

const Container = styled.div.attrs({
  className: "links links__list"
})`
  display: none;
  flex-direction: column;
  position: absolute;
  width: 205px;
  overflow: hidden;
  background-color: ${colors.white.base};
  padding: ${spacing.cozy};
  border-radius: ${constants.borderRadius.small};

  .list-container--open & {
    display: block;
  }

  &.links__list--open {
    display: block;
  }
`;

class LinkList extends Component {
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
    this.props.onItemClick({ selectedIndex: index });
  };

  render() {
    const { children, ...rest } = this.props;

    return (
      <LinkListProvider value={this.state}>
        <Container {...rest}>{children}</Container>
      </LinkListProvider>
    );
  }
}

LinkList.defaultProps = {
  selectedIndex: -1,
  onItemClick: () => {}
};

LinkList.propTypes = {
  children: PropTypes.node.isRequired,
  onItemClick: PropTypes.func,
  selectedIndex: PropTypes.number
};

export default LinkList;
