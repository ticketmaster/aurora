import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import CrossIcon from "../Icons/Cross";
import IconButton from "../Button/IconButton";
import { spacing, colors, constants } from "../../theme/index";
import { ItemContainerConsumer } from "../List/Context";
import { BackdropConsumer } from "../Backdrop/Context";
import Column from "../Grid/Column";
import Row from "../Grid/Row";

const ModalContainer = styled(Column)`
  background-color: ${colors.white.base};
  border-radius: ${constants.borderRadius.large};
  box-shadow: 0 16px 16px 0 rgba(0, 0, 0, 0.06), 0 0 16px 0 rgba(0, 0, 0, 0.12);
  border: solid 1px rgba(0, 0, 0, 0.04);
  padding: 0;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: calc(100% - 96px);
  z-index: 100;

  &.modal-enter {
    opacity: 0;
    transform: scale(0.7);
  }

  &.modal-enter.modal-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: all 0.3s ease-in-out;
  }

  &.modal-leave,
  &.modal-exit {
    opacity: 1;
    transform: scale(1);
  }

  &.modal-leave.modal-leave-active,
  &.modal-exit.modal-exit-active {
    opacity: 0;
    transition: all 0.1s ease-in-out;
    transform: scale(0.7);
  }

  &.modal-appear {
    opacity: 0;
    transform: scale(0.7);
  }

  &.modal-appear.modal-appear-active {
    opacity: 1;
    transform: scale(1);
    transition: all 0.3s ease-in-out;
  }
`;

const ModalContent = styled.div`
  padding: ${props =>
    props.padding ? props.padding : `0 ${spacing.comfy} ${spacing.comfy}`};
`;

const CancelButtonContainer = styled(Row)`
  justify-content: flex-end;
  align-items: flex-end;
  padding-right: ${spacing.moderate};
`;

const Modal = ({ children, containerProps, contentProps, ...props }) => (
  <BackdropConsumer>
    {backdropValue => (
      <ModalContainer
        small={4}
        role="dialog"
        aria-modal
        innerRef={backdropValue ? backdropValue.childRef : null}
        {...containerProps}
      >
        {props.withCloseIcon && (
          <CancelButtonContainer>
            <ItemContainerConsumer>
              {value => (
                <IconButton
                  className="button--close"
                  size={45}
                  aria-label="Close Modal"
                  role="button"
                  onClick={value ? value.onCloseRequest : () => {}}
                >
                  <CrossIcon
                    size={12}
                    style={{ pointerEvent: "none" }}
                    color={colors.onyx.base}
                  />
                </IconButton>
              )}
            </ItemContainerConsumer>
          </CancelButtonContainer>
        )}
        <ModalContent {...contentProps}>{children}</ModalContent>
      </ModalContainer>
    )}
  </BackdropConsumer>
);

Modal.defaultProps = {
  children: null,
  withCloseIcon: true,
  containerProps: null,
  contentProps: null
};

Modal.propTypes = {
  children: PropTypes.node,
  withCloseIcon: PropTypes.bool,
  containerProps: PropTypes.shape({}),
  contentProps: PropTypes.shape({})
};

export default Modal;
