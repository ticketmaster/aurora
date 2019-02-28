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
    this.openButtonNode.focus();
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

  render() {
    const { isOpen } = this.state;
    const { ariaLabel, children, trigger, role } = this.props;
    return (
      <Fragment>
         <ModalTrigger
          onOpen={this.onOpen}
          buttonRef={n => this.openButtonNode = n}
          // text={trigger}
        >
          foo
          {trigger}
        </ModalTrigger>
        {isOpen &&
          <ModalContent
            ariaLabel={ariaLabel}
            isOpen={isOpen}
            buttonRef={n => this.closeButtonNode = n}
            modalRef={n => this.modalNode = n}
            content={children}
            onClickAway={this.onClickAway}
            onClose={this.onClose}
            role={role}
          /> 
        }
      </Fragment>
    );
  }
}

export default Modal;