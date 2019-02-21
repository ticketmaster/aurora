import React from "react";
import { bool, func } from "prop-types";
import styled, { css } from "styled-components";
import { boxShadow, marginBottom, maxHeight } from "../../theme/animations"

const Wrapper = styled.div`
  background: white;
  overflow: hidden;

  ${({ isOpen }) =>
    isOpen
    ?
      css`
        margin-bottom: 12px;
        max-height: 600px;
        border-radius: 4px;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.06), 0 0 4px 0 rgba(0, 0, 0, 0.12);
        transition: ${boxShadow}, ${marginBottom}, ${maxHeight};
       
        && ::after { visibility: hidden;}
      `
    :
       css`
        margin-bottom: 0px;
        border-radius: 0;
        transition: ${boxShadow}, ${marginBottom}, ${maxHeight};
      `
    };
    ${({ isOpen }) =>
      !isOpen &&
        css`
          margin-bottom: 0px;
          border-radius: 0;
          transition: ${boxShadow}, ${marginBottom}, ${maxHeight};
        `
      };
`;

const Section = ({ children, isOpen = false, toggle }) => (
  <Wrapper
    className="accordion-section"
    isOpen={isOpen}
  >
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