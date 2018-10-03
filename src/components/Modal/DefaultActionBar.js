/* eslint-disable import/prefer-default-export */
import React from "react";
import PropTypes from "prop-types";

import { colors } from "../../theme/index";

import CrossIcon from "../Icons/Cross";

import { withModal } from "./context";

import { CloseButtonContainer } from "./DefaultActionBar.styles";

export const ModalActionBar = ({ modal: { closeModal }, iconButtonProps }) => (
  <CloseButtonContainer>
    <CrossIcon
      size={12}
      style={{ pointerEvent: "none" }}
      color={colors.onyx.base}
      className="button--close"
      aria-label="Close Modal"
      role="button"
      onClick={closeModal}
      {...iconButtonProps}
    />
  </CloseButtonContainer>
);

ModalActionBar.propTypes = {
  modal: PropTypes.shape({
    closeModal: PropTypes.func.isRequired
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  iconButtonProps: PropTypes.object
};

ModalActionBar.defaultProps = {
  iconButtonProps: {}
};

export default withModal(ModalActionBar);
