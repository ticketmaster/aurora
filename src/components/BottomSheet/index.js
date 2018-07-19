import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import colors from "../../theme/colors";

import { Row } from "../Grid";
import CrossIcon from "../Icons/Cross";
import IconButton from "../Button/IconButton";
import constants from "../../theme/constants";

const BottomSheetContent = styled.div`
  background-color: white;
  width: 100%;
  z-index: 8;
  max-height: calc(100% - 60px);
  border-top-left-radius: ${constants.borderRadius.large};
  border-top-right-radius: ${constants.borderRadius.large};
  position: fixed;
  overflow-y: scroll;
  overflow-x: hidden;
  bottom: 0;
  left: 0;

  &.modal-enter {
    transform: translateY(100%);
  }

  &.modal-enter.modal-enter-active {
    transform: translateY(0);
    transition: transform 300ms ease-in-out;
  }

  &.modal-leave {
    transform: translateY(0);
  }

  &.modal-leave.modal-leave-active {
    transform: translateY(100%);
    transition: transform 300ms ease-in-out;
  }

  &.modal-appear {
    transform: translateY(100%);
  }

  &.modal-appear.modal-appear-active {
    transform: translateY(0);
    transition: transform 300ms ease-in-out;
  }
`;

const CancelButtonRow = styled(Row)`
  justify-content: flex-end;
  align-items: flex-end;
`;

const BottomSheet = ({ children, index }) => (
  <BottomSheetContent role="dialog" aria-modal>
    <CancelButtonRow>
      <IconButton
        className="button--cancel"
        size={45}
        aria-label="Close BottomSheet"
        role="button"
        data-index={index}
      >
        <CrossIcon
          size={12}
          style={{ pointerEvent: "none" }}
          color={colors.onyx.base}
        />
      </IconButton>
    </CancelButtonRow>
    {children}
  </BottomSheetContent>
);

BottomSheet.defaultProps = {
  children: null,
  index: -1
};

BottomSheet.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number
};

export default BottomSheet;
