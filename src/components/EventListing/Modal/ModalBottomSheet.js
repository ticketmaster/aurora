import React from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import { constants, spacing } from "../../../theme";

import Flex from "../../Flex";
import Backdrop from "./Backdrop";

const ModalBottomSheet = ({
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
        classNames="bottom-sheet"
        timeout={300}
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

export default ModalBottomSheet;


const Content = styled.div`
  background-color: white;
  width: 100%;
  z-index: 8;
  max-height: calc(100% - 60px);
  border-top-left-radius: ${constants.borderRadius.large};
  border-top-right-radius: ${constants.borderRadius.large};
  position: fixed;
  bottom: 0;
  left: 0;
  padding-right: ${spacing.cozy};
  padding-left: ${spacing.cozy};

  .bottom-sheet-enter & {
    transform: translateY(100%);
  }

  .bottom-sheet-leave &,
  .bottom-sheet-exit & {
    transform: translateY(0);
  }

  .bottom-sheet-appear & {
    transform: translateY(100%);
  }

  .bottom-sheet-enter.bottom-sheet-enter-active & {
    transform: translateY(0);
    transition: transform 300ms ease-in-out;
  }

  .bottom-sheet-leave.bottom-sheet-leave-active &,
  .bottom-sheet-exit.bottom-sheet-exit-active & {
    transform: translateY(100%);
    transition: transform 300ms ease-in-out;
  }

  .bottom-sheet-appear.bottom-sheet-appear-active & {
    transform: translateY(0);
    transition: transform 300ms ease-in-out;
  }
`;



