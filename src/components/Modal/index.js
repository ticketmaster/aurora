import React from "react";
import PropTypes from "prop-types";

import {
  ModalContainer,
  ModalContent,
  ActionBar,
  BottomActionBar
} from "./index.styles";

import Backdrop from "../Backdrop";

import { ModalProvider } from "./context";
import {
  MODAL_SIZE_SMALL,
  MODAL_SIZE_MEDIUM,
  MODAL_SIZE_LARGE,
  getModalSize
} from "./size";
import { withDeviceSize } from "../DeviceSize/Context";
import {
  getContentHeight,
  getBottomActionBarShadow,
  getActionBarShadow,
  isRequestCloseApproved
} from "./helper";

class Modal extends React.Component {
  static propTypes = {
    actionBar: PropTypes.node,
    bottomActionBar: PropTypes.node,
    children: PropTypes.node.isRequired,
    deviceSize: PropTypes.shape({
      isXSmall: PropTypes.bool,
      isSmall: PropTypes.bool,
      isMedium: PropTypes.bool,
      isLarge: PropTypes.bool,
      isXLarge: PropTypes.bool
    }).isRequired,
    gutters: PropTypes.bool,
    // This is used inside the `getDerivedStateFromProps`
    // eslint-disable-next-line react/no-unused-prop-types
    isOpened: PropTypes.bool,
    size: PropTypes.oneOf([
      MODAL_SIZE_SMALL,
      MODAL_SIZE_MEDIUM,
      MODAL_SIZE_LARGE
    ]),
    onRequestClose: PropTypes.func,
    onScroll: PropTypes.func,
    /* eslint-disable react/forbid-prop-types */
    containerProps: PropTypes.object,
    actionBarProps: PropTypes.object,
    contentProps: PropTypes.object,
    bottomActionBarProps: PropTypes.object
    /* eslint-enable react/forbid-prop-types */
  };

  static defaultProps = {
    actionBar: null,
    bottomActionBar: null,
    gutters: true,
    isOpened: true,
    size: MODAL_SIZE_MEDIUM,
    onRequestClose: null,
    onScroll: null,
    containerProps: {},
    actionBarProps: {},
    contentProps: {},
    bottomActionBarProps: {}
  };

  static getDerivedStateFromProps(props, state) {
    if (props.isOpened !== state.isOpened) {
      return {
        isOpened: props.isOpened
      };
    }

    return null;
  }

  state = {
    isOpened: true,
    actionBarShadow: false,
    bottomActionBarShadow: false
  };

  componentDidMount() {
    if (this.props.isOpened) {
      this.updateModalHeight();
      this.updateShadows();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.isOpened && !prevProps.isOpened) {
      this.updateModalHeight();
      this.updateShadows();
    }
  }

  actionBarRef = React.createRef();
  containerRef = React.createRef();
  contentRef = React.createRef();
  bottomActionBarRef = React.createRef();

  closeModal = () => {
    const { onRequestClose } = this.props;

    isRequestCloseApproved({ onRequestClose }).then(requestApproved => {
      if (requestApproved) {
        this.setState({ isOpened: false });
      }
    });
  };

  handleScroll = e => {
    const { onScroll } = this.props;

    if (onScroll) {
      onScroll(e);
    }

    this.updateShadows();
  };

  updateModalHeight = () => {
    const {
      deviceSize: { isSmall }
    } = this.props;

    const actionBar = this.actionBarRef.current;
    const bottomActionBar = this.bottomActionBarRef.current;
    const content = this.contentRef.current;
    const container = this.containerRef.current;

    const contentHeight = getContentHeight({
      actionBar,
      bottomActionBar,
      container
    });

    if (isSmall) {
      content.style.minHeight = contentHeight;
    }

    content.style.maxHeight = contentHeight;
  };

  updateShadows = () => {
    this.updateActionBarShadow();

    const bottomActionBar = this.bottomActionBarRef.current;

    if (bottomActionBar) {
      this.updateBottomActionBarShadow();
    }
  };

  updateActionBarShadow = () => {
    const content = this.contentRef.current;

    const actionBarShadow = getActionBarShadow({ content });

    if (actionBarShadow !== this.state.actionBarShadow) {
      this.setState({
        actionBarShadow
      });
    }
  };

  updateBottomActionBarShadow = () => {
    const content = this.contentRef.current;

    const bottomActionBarShadow = getBottomActionBarShadow({ content });

    if (bottomActionBarShadow !== this.state.bottomActionBarShadow) {
      this.setState({
        bottomActionBarShadow
      });
    }
  };

  render() {
    const {
      actionBar,
      bottomActionBar,
      children,
      gutters,
      size,
      deviceSize,
      containerProps,
      actionBarProps,
      contentProps,
      bottomActionBarProps
    } = this.props;
    const { isOpened, actionBarShadow, bottomActionBarShadow } = this.state;
    const { closeModal } = this;

    if (!isOpened) {
      return null;
    }

    return (
      <ModalProvider value={{ closeModal }}>
        <Backdrop childRef={this.containerRef} onRequestClose={this.closeModal}>
          <ModalContainer
            small={getModalSize({ deviceSize, preferredSize: size })}
            innerRef={this.containerRef}
            {...containerProps}
          >
            {actionBar && (
              <ActionBar
                shadow={actionBarShadow}
                innerRef={this.actionBarRef}
                gutters={gutters}
                {...actionBarProps}
              >
                {actionBar}
              </ActionBar>
            )}
            <ModalContent
              innerRef={this.contentRef}
              onScroll={this.handleScroll}
              gutters={gutters}
              {...contentProps}
            >
              {children}
            </ModalContent>
            {bottomActionBar && (
              <BottomActionBar
                shadow={bottomActionBarShadow}
                innerRef={this.bottomActionBarRef}
                gutters={gutters}
                {...bottomActionBarProps}
              >
                {bottomActionBar}
              </BottomActionBar>
            )}
          </ModalContainer>
        </Backdrop>
      </ModalProvider>
    );
  }
}

export default withDeviceSize(Modal);
