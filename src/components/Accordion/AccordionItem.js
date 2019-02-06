import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const StyledAccordionItem = styled.div`
  background: white;
  overflow: hidden;
  padding: 15px;

  ${({ isOpen }) =>
    isOpen &&
    css`
      color: red;
    `} ${({ isOpen }) =>
    !isOpen &&
    css`
      color: black;
    `};
`;

const AccordionItem = ({ children, isOpen = false, toggle }) => (
  <StyledAccordionItem isOpen={isOpen}>
    {children(isOpen, toggle)}
  </StyledAccordionItem>
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
