import React, { Component, Fragment } from 'react';
import ModalTrigger from './ModalTrigger';
import ModalContent from './ModalContent';

class Modal extends Component {
  state = { isOpen: false };

  onOpen = (e) => {
    console.log('e: ', e);
    this.setState({ isOpen: true }, () => {
      // this.closeButtonNode.focus();
    });
    this.toggleScrollLock();
    this.onOpenSuccess(e)
  };

  onClose = (e) => {
    this.setState({ isOpen: false });
    // this.openButtonNode.focus();
    this.toggleScrollLock();
    this.handleOnCloseSuccess(e);
  };

  onClickAway = (e) => {
    if (this.modalNode && this.modalNode.contains(e.target)) return;
    this.onClose(e);
  };

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
            return React.cloneElement(child, {
                onOpen: (e) => this.onOpen(e),
                onClose: (e) => this.onClose(e),
                onOpenSuccess: this.onOpenSuccess,
                triggerRef: n => {this.openButtonNode = n}
            });

        } else if (
          child.type.name === "ModalContent"
          && isOpen
        ) {
           return React.cloneElement(child, {
              onOpen: (e) => this.onOpen(e),
              buttonRef: n => {this.closeButtonNode = n},
              modalRef: n => {this.modalNode = n},
              onClickAway: (e) => this.onClickAway(e),
              onClose: (e) => this.onClose(e)
           });
        }
        return children;
    });

    return children;
  };

  render() {
    const { isOpen } = this.state;
    const { ariaLabel, children, trigger, role } = this.props;
    return (
      <Fragment>
         {this.clonedChildren()}
      </Fragment>
    );
  }
}

Modal.Trigger = ModalTrigger;
Modal.Content = ModalContent;

export default Modal;