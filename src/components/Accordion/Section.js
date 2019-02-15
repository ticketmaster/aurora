import React from "react";
import { bool, func } from "prop-types";
import styled, { css } from "styled-components";
import constants from "../../theme/constants"

const Wrapper = styled.div`
  background: white;
  overflow: hidden;

  ${({ isOpen }) =>
    isOpen &&
    css`
      margin-bottom: 12px;
      max-height: 600px;
      opacity: 1;
      border-radius: 4px;
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.06), 0 0 4px 0 rgba(0, 0, 0, 0.12);

      transition: box-shadow 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s,
                  margin-bottom 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s,
                  max-height 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s,
                  opacity 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.2s;
      /* overflow: hidden;
      margin-bottom: 12px; */

      && ::after {
        visibility: hidden;
        
      }
    `
    };

    ${({ isOpen }) =>
    !isOpen &&
    css`
      
      margin-bottom: 0px;
/*       
      opacity: 1;
      border-radius: 4px;
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.06), 0 0 4px 0 rgba(0, 0, 0, 0.12);

      transition: box-shadow 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s,
                  margin-bottom 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s,
                  max-height 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s,
                  opacity 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.2s; */
    `};
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

// :

// css`
//   margin-bottom: 0px;

//   transition: box-shadow 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s,
//               margin-bottom 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s,
//               max-height 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s,
//               opacity 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.2s;

//   && ::after {
//     visibility: visible;
//   }
// `
