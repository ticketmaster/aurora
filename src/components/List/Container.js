import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import { ContainerProvider } from "./Context";
import DeviceSizeProvider from "../DeviceSize/Provider";
import DisplayFor from "../DeviceSize";
import Portal from "../Portal";
import Backdrop from "../Backdrop";
import BottomSheet from "../BottomSheet";
import spacing from "../../theme/spacing";

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  padding-left: ${spacing.cozy};
  padding-right: ${spacing.cozy};
`;

class ListContainer extends Component {
  state = {
    openIndex: -1,
    portalContent: null,
    renderIntoPortal: () => {} // eslint-disable-line
  };

  componentWillMount() {
    this.setState({ renderIntoPortal: this.renderIntoPortal }); // eslint-disable-line
  }

  onExpandOrCollapse = event => {
    event.preventDefault();
    const {
      target: {
        dataset: { index }
      },
      target
    } = event;

    const { onRowCollapse } = this.props;

    if (
      target.className.includes("container--overlay") ||
      target.className.includes("button--cancel")
    ) {
      onRowCollapse();
    }

    const dataIndex = target.className.includes("container--overlay")
      ? this.state.openIndex
      : parseInt(index, 10);

    if (dataIndex > -1) {
      return this.state.openIndex === dataIndex
        ? this.setState({ openIndex: -1, portalContent: null })
        : this.setState({ openIndex: dataIndex });
    }
    return null;
  };

  renderIntoPortal = ({ children }) => {
    this.setState({ portalContent: children });
  };

  render() {
    return (
      <DeviceSizeProvider>
        <Container onClick={this.onExpandOrCollapse}>
          <ContainerProvider value={this.state}>
            {this.props.children}
          </ContainerProvider>

          <DisplayFor small>
            <Portal>
              <ReactCSSTransitionGroup
                transitionName="modal"
                component={this.state.openIndex !== -1 ? Backdrop : "span"}
                transitionAppear
                transitionAppearTimeout={300}
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
              >
                {this.state.openIndex !== -1 &&
                  this.state.portalContent && (
                    <BottomSheet index={this.state.openIndex}>
                      {this.state.portalContent}
                    </BottomSheet>
                  )}
              </ReactCSSTransitionGroup>
            </Portal>
          </DisplayFor>
        </Container>
      </DeviceSizeProvider>
    );
  }
}

ListContainer.defaultProps = {
  onRowCollapse: () => {}
};

ListContainer.propTypes = {
  children: PropTypes.node.isRequired,
  onRowCollapse: PropTypes.func
};

export default ListContainer;
