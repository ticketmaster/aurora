import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition, TransitionGroup } from "react-transition-group";

import styled from "styled-components";
import Flex from "../../Flex";
import Backdrop from "./Backdrop";

const ModalContent = ({
  ariaLabel,
  buttonRef,
  content,
  children,
  modalRef,
  onClickAway,
  onClose,
  isOpen,
  role = 'dialog'
}) => ReactDOM.createPortal(
    <TransitionGroup component="div">
      <CSSTransition
        classNames="modal"
        timeout={{
          enter: 300,
          exit: 100
        }}
        in={isOpen}
        appear
        unmountOnExit
        mountOnEnter
      >
        <Backdrop
          column
          className="c-modal-cover"
          role={role}
          aria-label={ariaLabel}
          aria-modal="true"
          onClick={onClickAway}
        > 
          <Content
            column
            className="c-modal"
            ref={modalRef}
          >
            <Flex>
              <button
                aria-labelledby="close-modal"
                className="c-modal__close"
                ref={buttonRef}
                onClick={onClose}
              >
                <span id="close-modal" className="u-hide-visually">Close Modal</span>
                <svg viewBox="0 0 40 40" className="c-modal__close-icon">
                  <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
                </svg>

              </button>
            </Flex>

            <div className="c-modal__body">
              {children}
            </div>
            
          </Content>
        </Backdrop>
      </CSSTransition>
    </TransitionGroup>
    ,
    document.body
  )

export default ModalContent;


const Content = styled(Flex)`
    background-color: rgba(255,255,255,1);
    border-radius: 4px;
    border: solid 1px rgba(0,0,0,0.04);
    box-shadow: 0 16px 16px 0 rgba(0,0,0,0.06), 0 0 16px 0 rgba(0,0,0,0.12);
    max-height: calc(100% - 96px);
    max-width: 640px;
    min-width: 400px;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0;
    position: relative;
    width: fit-content;
    z-index: 100;

    .modal-enter & {
      opacity: 0;
      transform: scale(0.7);
    }

    .modal-leave &,
    .modal-exit & {
      opacity: 1;
      transform: scale(1);
    }
    .modal-appear & {
      opacity: 0;
      transform: scale(0.7);
    }
    .modal-enter.modal-enter-active & {
      opacity: 1;
      transform: scale(1);
      transition: all 0.3s ease-in-out;
    }
    .modal-leave.modal-leave-active &,
    .modal-exit.modal-exit-active & {
      opacity: 0;
      transition: all 0.1s ease-in-out;
      transform: scale(0.7);
    }
    .modal-appear.modal-appear-active & {
      opacity: 1;
      transform: scale(1);
      transition: all 0.3s ease-in-out;
    }

`;


// accessability
{/* <ReactFocusTrap
      tag="aside"
      focusTrapOptions={{ onDeactivate: onClose }}
      className="c-modal-cover"
      role={role}
      aria-label={ariaLabel}
      aria-modal="true"
      onClick={onClickAway}
    >
      <div className="c-modal" ref={modalRef}>
        <button className="c-modal__close" aria-labelledby="close-modal" onClick={onClose} ref={buttonRef}>
          <span id="close-modal" className="u-hide-visually">Close Modal</span>
          <svg viewBox="0 0 40 40" className="c-modal__close-icon">
            <path d="M 10,10 L 30,30 M 30,10 L 10,30"></path>
          </svg>
        </button>
        <div className="c-modal__body">{content}</div>
      </div>
    </ReactFocusTrap>,
    document.body
  ) */}