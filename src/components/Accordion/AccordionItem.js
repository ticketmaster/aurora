import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const StyledAccordionItem = styled.div`
  background: white;
  overflow: hidden;
  min-height: 55px;

  ${({ isOpen }) =>
    isOpen &&
    css`
      box-shadow: rgba(0, 0, 0, 0.01) 0px 4px 8px 0px,
        rgba(0, 0, 0, 0.19) 0px 4px 10px 0px;
      margin-bottom: 12px;
    `} ${({ isOpen }) =>
    !isOpen &&
    css`
      color: black;
    `};
`;

const AccordionItem = ({ children, isOpen = false, toggle }) => (
  <StyledAccordionItem className="accordion-item" isOpen={isOpen}>
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
