import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import colors from "../../theme/colors";

import { ItemContainerConsumer } from "../List/Context";
import { Row } from "../Grid";
import { BackdropConsumer } from "../Backdrop/Context";
import CrossIcon from "../Icons/Cross";
import IconButton from "../Button/IconButton";
import { constants, spacing } from "../../theme";

const BottomSheetContent = styled.div`
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

  &.bottom-sheet-enter {
    transform: translateY(100%);
  }

  &.bottom-sheet-enter.bottom-sheet-enter-active {
    transform: translateY(0);
    transition: transform 300ms ease-in-out;
  }

  &.bottom-sheet-leave {
    transform: translateY(0);
  }

  &.bottom-sheet-leave.bottom-sheet-leave-active {
    transform: translateY(100%);
    transition: transform 300ms ease-in-out;
  }

  &.bottom-sheet-appear {
    transform: translateY(100%);
  }

  &.bottom-sheet-appear.bottom-sheet-appear-active {
    transform: translateY(0);
    transition: transform 300ms ease-in-out;
  }
`;

const CancelButtonRow = styled(Row)`
  justify-content: flex-end;
  align-items: flex-end;
`;

const BottomSheet = ({ children, withCancelBtn, ...props }) => (
  <BackdropConsumer>
    {backdropValue => (
      <BottomSheetContent
        innerRef={backdropValue ? backdropValue.childRef : null}
        role="dialog"
        aria-modal
        {...props}
      >
        {withCancelBtn && (
          <CancelButtonRow>
            <ItemContainerConsumer>
              {value => (
                <IconButton
                  className="button--cancel"
                  size={45}
                  aria-label="Close BottomSheet"
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
          </CancelButtonRow>
        )}
        {children}
      </BottomSheetContent>
    )}
  </BackdropConsumer>
);

BottomSheet.defaultProps = {
  withCancelBtn: true,
  children: null
};

BottomSheet.propTypes = {
  withCancelBtn: PropTypes.bool,
  children: PropTypes.node
};

export default BottomSheet;
