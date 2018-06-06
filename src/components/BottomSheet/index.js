import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import colors from "../../theme/colors";

import { Row } from "../Grid";
import CrossIcon from "../Icons/Cross";

const Backdrop = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1300;
  left: 0;
  right: 0;
  top: 0;
  display: ${({ visible }) => (visible ? "flex" : "none")};
  background-color: rgba(0, 0, 0, 0.2);
  transition: opacity 5s ease-in-out, display 0.5s ease-in-out;
  opacity: ${({ visible }) => (visible ? "1" : "0")};
`;

const BottomSheetContent = styled.div`
  width: 100%;
  max-height: ${({ visible }) => (visible ? "calc(100% - 60px)" : "0")};
  position: fixed;
  bottom: 0;
  top: 60px;
  background-color: ${colors.white.base};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  overflow-y: scroll;
`;

const ClickableButton = styled.button.attrs({
  className: "cancel"
})`
  background: none;
  border: none;
  cursor: pointer;
  justify-content: flex-end;
  align-items: flex-end;
  text-align: end;
  padding: 18px 18px 0 18px;
`;

const CancelButtonRow = styled(Row)`
  justify-content: flex-end;
  align-items: flex-end;
`;

class BottomSheet extends Component {
  componentDidMount() {
    document.addEventListener("click", this.handleOutsideClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleOutsideClick, false);
  }

  handleOutsideClick = e => {
    const { onCloseRequest, visible } = this.props;

    if (this.modal) {
      if (!this.modal.contains(e.target) && visible) {
        onCloseRequest();
        document.removeEventListener("click", this.handleOutsideClick, false);
      }
    }
  };

  render() {
    const { children, visible, onCloseRequest } = this.props;
    return (
      <Backdrop onClick={this.handleOutsideClick} visible={visible}>
        {visible ? (
          <BottomSheetContent
            innerRef={node => {
              this.modal = node;
            }}
            visible={visible}
            role="dialog"
            aria-modal
          >
            <CancelButtonRow>
              <ClickableButton
                aria-label="Close BottomSheet"
                role="button"
                onClick={onCloseRequest}
              >
                <CrossIcon size={12} color={colors.onyx.base} />
              </ClickableButton>
            </CancelButtonRow>
            {children}
          </BottomSheetContent>
        ) : null}
      </Backdrop>
    );
  }
}

BottomSheet.propTypes = {
  children: PropTypes.node.isRequired,
  visible: PropTypes.bool.isRequired,
  onCloseRequest: PropTypes.func.isRequired
};

export default BottomSheet;
