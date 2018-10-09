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
import { updateOpenIndex, determineIfOpen } from "./helper";

const Container = styled.div`
  width: 100%;
`;

const ITEMS_COLLAPSED = -1;

class ListContainer extends Component {
  state = {
    openIndex: ITEMS_COLLAPSED,
    expandMultiple: this.props.expandMultiple,
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

  // Only used by modal on mobile devices
  onCloseRequest = () => {
    if (this.state.desktopPortalContent) {
      this.setState({ desktopPortalContent: null });
      this.props.onModalClose();
    }
    if (this.state.mobilePortalContent) {
      this.setState({
        mobilePortalContent: null,
        openIndex: ITEMS_COLLAPSED
      });

      this.props.onRowCollapse();
    }
  };

  // Only used on tablet/desktop devices
  onExpandOrCollapse = event => {
    const { className = "", dataset } = event.target || {};
    const { index } = dataset || {};

    if (!className || className.constructor !== String) {
      return null;
    }

    if (
      className.includes("button--expand-or-collapse") ||
      className.includes("button--more-info") ||
      (className.includes("link--row-options") &&
        !determineIfOpen(
          this.state.expandMultiple,
          this.state.openIndex,
          parseInt(index, 10)
        ))
    ) {
      event.preventDefault();

      const { openIndex, expandMultiple } = this.state;
      const dataIndex = parseInt(index, 10);

      if (dataIndex > -1) {
        return this.setState({
          openIndex: updateOpenIndex(expandMultiple, openIndex, dataIndex)
        });
      }
    }
    return null;
  };

  renderIntoPortal = ({ children, contentType }) =>
    contentType === "mobile"
      ? this.setState({ mobilePortalContent: children })
      : this.setState({ desktopPortalContent: children });

  render() {
    const { children, dataTidGroup, ...rest } = this.props;

    return (
      <Container onClick={this.onExpandOrCollapse} {...rest}>
        <ContainerProvider
          value={{
            ...this.state,
            ...dataTidGroup
          }}
        >
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
                {this.state.openIndex !== ITEMS_COLLAPSED &&
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
  onModalClose: () => {},
  expandMultiple: false
};

ListContainer.propTypes = {
  children: PropTypes.node.isRequired,
  onRowCollapse: PropTypes.func,
  onModalClose: PropTypes.func,
  expandMultiple: PropTypes.bool
};

export default ListContainer;
