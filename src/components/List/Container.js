import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import { ContainerProvider } from "./Context";
import DisplayFor from "../DeviceSize";
import Portal from "../Portal";
import Backdrop from "../Backdrop";
import BottomSheet from "../BottomSheet";
import Modal from "../Modal";
import spacing from "../../theme/spacing";

const Container = styled.div`
  width: 100%;
  padding-left: ${spacing.cozy};
  padding-right: ${spacing.cozy};
`;

class ListContainer extends Component {
  state = {
    openIndex: -1,
    mobilePortalContent: null,
    desktopPortalContent: null,
    onCloseRequest: () => {}, // eslint-disable-line
    renderIntoPortal: () => {} // eslint-disable-line
  };

  componentWillMount() {
    this.setState({
      renderIntoPortal: this.renderIntoPortal, // eslint-disable-line
      onCloseRequest: this.onCloseRequest // eslint-disable-line
    });
  }

  onCloseRequest = () => {
    if (this.state.desktopPortalContent) {
      this.setState({ desktopPortalContent: null });
      this.props.onModalClose();
    }
    if (this.state.mobilePortalContent) {
      this.setState({
        mobilePortalContent: null,
        openIndex: -1
      });

      this.props.onRowCollapse();
    }
  };

  onExpandOrCollapse = event => {
    const { className = "", dataset } = event.target || {};
    const { index } = dataset || {};

    if (!className) {
      return null;
    }

    if (
      className.includes("button--expand-or-collapse") ||
      className.includes("button--more-info")
    ) {
      event.preventDefault();

      const dataIndex = parseInt(index, 10);

      if (dataIndex > -1) {
        if (className.includes("button--expand-or-collapse")) {
          return this.state.openIndex === dataIndex
            ? this.setState({ openIndex: -1 })
            : this.setState({ openIndex: dataIndex });
        }
        return this.setState({ openIndex: dataIndex });
      }
    }
    return null;
  };

  renderIntoPortal = ({ children, contentType }) =>
    contentType === "mobile"
      ? this.setState({ mobilePortalContent: children })
      : this.setState({ desktopPortalContent: children });

  render() {
    const { children, ...rest } = this.props;
    return (
      <Container onClick={this.onExpandOrCollapse} {...rest}>
        <ContainerProvider value={this.state}>
          {children}

          <DisplayFor small>
            <Portal>
              <ReactCSSTransitionGroup
                transitionName="bottom-sheet"
                component={this.state.mobilePortalContent ? Backdrop : "span"}
                transitionAppear
                transitionAppearTimeout={300}
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
              >
                {this.state.openIndex !== -1 &&
                  this.state.mobilePortalContent && (
                    <BottomSheet index={this.state.openIndex}>
                      {this.state.mobilePortalContent}
                    </BottomSheet>
                  )}
              </ReactCSSTransitionGroup>
            </Portal>
          </DisplayFor>

          <DisplayFor medium large xLarge>
            <Portal>
              <ReactCSSTransitionGroup
                transitionName="modal"
                component={this.state.desktopPortalContent ? Backdrop : "span"}
                transitionAppear
                transitionAppearTimeout={300}
                transitionEnterTimeout={300}
                transitionLeaveTimeout={100}
              >
                {this.state.desktopPortalContent && (
                  <Modal>{this.state.desktopPortalContent}</Modal>
                )}
              </ReactCSSTransitionGroup>
            </Portal>
          </DisplayFor>
        </ContainerProvider>
      </Container>
    );
  }
}

ListContainer.defaultProps = {
  onRowCollapse: () => {},
  onModalClose: () => {}
};

ListContainer.propTypes = {
  children: PropTypes.node.isRequired,
  onRowCollapse: PropTypes.func,
  onModalClose: PropTypes.func
};

export default ListContainer;
