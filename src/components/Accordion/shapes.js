import { node, bool, func } from "prop-types";

export const accordionShape = {
  allowMultipleOpen: bool,
  children: node.isRequired
};

export const accordionItemShape = {
  children: func.isRequired,
  isOpen: bool.isRequired,
  toggle: func.isRequired
};
