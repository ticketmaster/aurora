import React from "react";
import { bool, func } from "prop-types";
import styled, { css } from "styled-components";
import {
  borderRadius,
  boxShadow,
  marginBottom,
  maxHeight
  } from "../../theme/animations"

const Wrapper = styled.div`
  background: white;
  overflow: hidden;

  ${({ isOpen }) =>
    isOpen
    ?
      css`
        border-radius: 4px;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.06), 0 0 4px 0 rgba(0, 0, 0, 0.12);
        margin-bottom: 12px;
        max-height: 600px;
        transition: ${boxShadow}, ${marginBottom}, ${maxHeight}, ${borderRadius};
       
        && ::after { visibility: hidden;}
      `
    :
       css`
        border-radius: 0;
        margin-bottom: 0px;
        transition: ${boxShadow}, ${marginBottom}, ${maxHeight}, ${borderRadius};
      `
    };
`;

const Section = ({ children, isOpen = false, toggle }) => (
  <Wrapper className="accordion-section" isOpen={isOpen}>
    {children(isOpen, toggle)}
  </Wrapper>
);

Section.defaultProps = {
  isOpen: false,
  toggle: null
};

Section.propTypes = {
  children: func.isRequired,
  isOpen: bool,
  toggle: func
};

export default Section;