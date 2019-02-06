import PropTypes from "prop-types";

export const accordionShape = {
  allowMultipleOpen: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export const accordionItemShape = {
  children: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};
