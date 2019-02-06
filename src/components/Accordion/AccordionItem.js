import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledAccordionItem = styled.div`
  background: white;
  padding: 15px;
`;

const AccordionItem = ({ children, isOpen = false, toggle }) => (
  <StyledAccordionItem>{children(isOpen, toggle)}</StyledAccordionItem>
);

AccordionItem.defaultProps = {
  isOpen: false,
  toggle: null
};

AccordionItem.propTypes = {
  children: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func
};

export default AccordionItem;
