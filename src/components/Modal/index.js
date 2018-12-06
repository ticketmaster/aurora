import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

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
  MODAL_SIZE_XLARGE,
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
      MODAL_SIZE_LARGE,
      MODAL_SIZE_XLARGE
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

  state = {
    isOpened: true,
    actionBarShadow: false,
    bottomActionBarShadow: false
  };

  static getDerivedStateFromProps(props, state) {
    if (props.isOpened !== state.isOpened) {
      return {
        isOpened: props.isOpened
      };
    }

    return null;
  }

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

  closeModal = event => {
    const { onRequestClose } = this.props;

    isRequestCloseApproved({ onRequestClose, event }).then(requestApproved => {
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
      bottomActionBarProps,
      displayTop
    } = this.props;
    const { isOpened, actionBarShadow, bottomActionBarShadow } = this.state;
    const { closeModal } = this;

    return (
      <ModalProvider value={{ closeModal }}>
        <CSSTransition
          in={isOpened}
          key="overlay-animation"
          timeout={300}
          classNames="open"
        >
          <Backdrop
            childRef={this.containerRef}
            onRequestClose={this.closeModal}
            isVisible={isOpened}
            animated
          >
            <CSSTransition
              in={isOpened}
              key="modal-animation"
              timeout={300}
              classNames="open"
            >
              <ModalContainer
                small={getModalSize({ deviceSize, preferredSize: size })}
                ref={this.containerRef}
                isOpened={isOpened}
                size={size}
                displayTop={displayTop}
                {...containerProps}
              >
                {actionBar && (
                  <ActionBar
                    shadow={actionBarShadow}
                    ref={this.actionBarRef}
                    gutters={gutters}
                    {...actionBarProps}
                  >
                    {actionBar}
                  </ActionBar>
                )}
                <ModalContent
                  ref={this.contentRef}
                  onScroll={this.handleScroll}
                  gutters={gutters}
                  {...contentProps}
                >
                  {children}
                </ModalContent>
                {bottomActionBar && (
                  <BottomActionBar
                    shadow={bottomActionBarShadow}
                    ref={this.bottomActionBarRef}
                    gutters={gutters}
                    {...bottomActionBarProps}
                  >
                    {bottomActionBar}
                  </BottomActionBar>
                )}
              </ModalContainer>
            </CSSTransition>
          </Backdrop>
        </CSSTransition>
      </ModalProvider>
    );
  }
}

export default withDeviceSize(Modal);
