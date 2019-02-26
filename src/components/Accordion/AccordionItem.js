import React from "react";
import { bool, func } from "prop-types";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: inherit;
`;

const AccordionItem = ({ children, isOpen = false, toggle }) => (
  <Wrapper className="accordion__item" isOpen={isOpen}>
    {children(isOpen, toggle)}
  </Wrapper>
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
