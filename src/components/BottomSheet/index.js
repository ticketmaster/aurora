import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import classnames from "classnames";

import BottomSheetLabel from "./BottomSheetLabel";
import { ItemContainerConsumer } from "../List/Context";
import { Row } from "../Grid";
import { BackdropConsumer } from "../List/BackdropContext";
import CrossIcon from "../Icons/Cross";
import IconButton from "../Button/IconButton";
import { mediumAndUp } from "../../theme/mediaQueries";
import { constants, spacing, themes } from "../../theme";

const noop = () => {};

const CANCEL_BUTTON_SIZE = 28;
const CANCEL_BUTTON_ICON_SIZE = Math.floor(CANCEL_BUTTON_SIZE / 2);

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

const HeaderRow = styled(Row)`
  position: relative;
  padding: ${spacing.moderate} ${spacing.normal} 0;
  align-items: center;

  &.row__button--cancel {
    padding-right: calc(${spacing.normal} + ${CANCEL_BUTTON_SIZE}px);
    min-height: calc(${spacing.moderate} + ${CANCEL_BUTTON_SIZE}px);
  }

  ${mediumAndUp`
    padding-left: ${spacing.comfy};

    &.row__button--cancel {
      padding-right: calc(${spacing.comfy} + ${CANCEL_BUTTON_SIZE}px);
    }
  `};
`;

const CancelButton = styled(IconButton)`
  position: absolute;
  top: ${spacing.moderate};
  right: ${spacing.moderate};
  padding: 0;
`;

const BottomSheet = ({
  label,
  labelVariant,
  withCancelBtn,
  withHeader,
  children,
  ...props
}) => (
  <BackdropConsumer>
    {backdropValue => (
      <BottomSheetContent
        // this class name is for automation purposes please do not remove or modify the name
        className="content__bottom-sheet"
        ref={backdropValue ? backdropValue.childRef : null}
        role="dialog"
        aria-modal
        {...props}
      >
        {withHeader && (
          <HeaderRow
            className={classnames(
              "row__header",
              { "row__button--cancel": withCancelBtn } // this class name is for automation purposes please do not remove or modify the name
            )}
          >
            <BottomSheetLabel variant={labelVariant}>{label}</BottomSheetLabel>

            {withCancelBtn && (
              <ItemContainerConsumer>
                {value => (
                  <CancelButton
                    className="button--cancel"
                    size={CANCEL_BUTTON_SIZE}
                    aria-label="Close BottomSheet"
                    role="button"
                    onClick={value ? value.onCloseRequest : noop}
                  >
                    <CrossIcon
                      size={CANCEL_BUTTON_ICON_SIZE}
                      style={{ pointerEvent: "none" }}
                      color={themes.global.onyx.base}
                    />
                  </CancelButton>
                )}
              </ItemContainerConsumer>
            )}
          </HeaderRow>
        )}
        {children}
      </BottomSheetContent>
    )}
  </BackdropConsumer>
);

BottomSheet.defaultProps = {
  label: BottomSheetLabel.defaultProps.children,
  labelVariant: BottomSheetLabel.defaultProps.variant,
  withCancelBtn: true,
  withHeader: true,
  children: null
};

BottomSheet.propTypes = {
  label: BottomSheetLabel.propTypes.children,
  labelVariant: BottomSheetLabel.propTypes.variant,
  withCancelBtn: PropTypes.bool,
  withHeader: PropTypes.bool,
  children: PropTypes.node
};

export default BottomSheet;
