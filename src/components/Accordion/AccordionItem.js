import React from "react";
import { bool, func } from "prop-types";
import styled, { css } from "styled-components";

const StyledAccordionItem = styled.div`
  background: white;
  overflow: hidden;
  min-height: 55px;

  ${({ isOpen }) =>
    isOpen &&
    css`
      overflow: hidden;
      border-radius: 4px;
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.06), 0 0 4px 0 rgba(0, 0, 0, 0.12);
      margin-bottom: 12px;
      margin-top: -1px;

      && ::after {
        visibility: hidden;
      }
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
  children: func.isRequired,
  isOpen: bool,
  toggle: func
};

export default AccordionItem;
