import React, { PureComponent, Fragment } from 'react';

import ModalTrigger from './ModalTrigger';
import ModalContent from './ModalContent';
import ModalBottomSheet from "./ModalBottomSheet";

class Modal extends PureComponent {
  state = { isOpen: this.props.isOpen || false };

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   console.log("getDerivedStateFromProps", nextProps);
  //   if (prevState.isOpen !== nextProps.isOpen) {
  //     return {
  //       isOpen: nextProps.isOpen
  //     };
  //   }

  //   return null;
  // }

  onOpen = (e) => {
    this.setState({ isOpen: true }, () => {
      this.closeButtonNode.focus(); // removes focus for screen readers
    });
    this.setState({ isOpen: true });
    this.toggleScrollLock();
    this.onOpenSuccess(e)
  };

  onClose = (e) => {
    this.setState({ isOpen: false });
    this.toggleScrollLock();
    this.handleOnCloseSuccess(e);
  };

  onClickAway = (e) => {
    if (this.modalNode && this.modalNode.contains(e.target)) return;
    this.onClose(e);
  };

  componentDidCatch() {
    this.setState(state => ({...state, hasError: true}))
  }

  onOpenSuccess = e => {
    const { onOpenSuccess } = this.props;
    if (onOpenSuccess) {
      onOpenSuccess(e);
    }
  }

  handleOnCloseSuccess = (e) => {
    const { onCloseSuccess } = this.props;
    if (onCloseSuccess){
      onCloseSuccess(e);
    }
  }

  toggleScrollLock = () => document.querySelector('html').classList.toggle('u-lock-scroll');
  
   clonedChildren = () => {
    const { state: { isOpen } } = this;

    const children = React.Children.map(this.props.children, (child) => {
        if (child && child.type.name === "ModalTrigger") {
            return React.cloneElement(
              child,
              {
                onOpen: (e) => this.onOpen(e),
                onClose: (e) => this.onClose(e),
                onOpenSuccess: this.onOpenSuccess,
                triggerRef: n => {this.openButtonNode = n}
              }
            );

        } else if (
          child.type.name === "ModalContent" ||
          child.type.name === "ModalBottomSheet"
          && isOpen
        ) {
           return ( 
            React.cloneElement(
              child,
              {
                  onOpen: (e) => this.onOpen(e),
                  buttonRef: node => {this.closeButtonNode = node},
                  modalRef: node => {this.modalNode = node},
                  onClickAway: (e) => this.onClickAway(e),
                  onClose: (e) => this.onClose(e)
              }
            )
           )
        }
        return children;
    });
    return children;
  };

  render() {
    const { isOpen, hasError } = this.state;
    const { ariaLabel, children, trigger, role } = this.props;

    if (hasError){
      return <p>Uh oh Something went wrong</p>
    } 
    return (
      <Fragment>
          {this.clonedChildren()}
      </Fragment>
    )
    
  }
}

Modal.Trigger = ModalTrigger;
Modal.BottomSheet = ModalBottomSheet;
Modal.Content = ModalContent;

export default Modal;