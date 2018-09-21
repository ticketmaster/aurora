import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
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
  border-radius: ${constants.borderRadius.small};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);

  .list-container--open & {
    display: block;
  }

  &.links__list--open {
    display: block;
  }
`;

const Wrapper = styled.div`
  padding: ${spacing.cozy};
  &.wrapper--has-after {
    padding: ${spacing.cozy} ${spacing.cozy} 0 ${spacing.cozy};
  }
`;

const AfterWrapper = styled.div`
  padding: 0 ${spacing.cozy};
  border-top: 1px solid ${colors.diatomite};
  color: ${colors.blackPearl};
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
    const { children, renderAfter, ...rest } = this.props;

    return (
      <LinkListProvider value={this.state}>
        <Container {...rest}>
          <Wrapper
            className={classNames({ "wrapper--has-after": !!renderAfter })}
          >
            {children}
          </Wrapper>
          {renderAfter && <AfterWrapper>{renderAfter}</AfterWrapper>}
        </Container>
      </LinkListProvider>
    );
  }
}

LinkList.defaultProps = {
  selectedIndex: -1,
  onItemClick: () => {},
  renderAfter: null
};

LinkList.propTypes = {
  children: PropTypes.node.isRequired,
  onItemClick: PropTypes.func,
  selectedIndex: PropTypes.number,
  renderAfter: PropTypes.oneOfType([PropTypes.element, PropTypes.node])
};

export default LinkList;
