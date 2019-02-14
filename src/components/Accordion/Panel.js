import styled, { css } from "styled-components";
import { node } from "prop-types";

// import spacing from "../../theme/spacing";
import COLORS from "../../theme/colors";
import constants from "../../theme/constants";

const Panel = styled.div`
  max-height: 0;
  overflow: hidden;
  color: ${COLORS.blackPearl};

  && ::before {
    background: ${COLORS.diatomite};
    content: " ";
    display: flex;
    height: 1px;
    margin-left: 16px;
    margin-right: 16px;
  }

  &&:first-child::before {
    width: 50px;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      background-color: ${COLORS.white.base};
      max-height: 600px;
      opacity: 1;
      transition: max-height 0.3s ${constants.easing.easeInOutQuad},
                  opacity 0.3s ${constants.easing.easeInOutQuad} 0.2s;
    `}
  
  ${({ isOpen }) =>
    !isOpen &&
    css`
      opacity: 0;
      transition: max-height 0.3s ${constants.easing.easeInQuad},
                  opacity 0.1s ${constants.easing.easeInQuad};
    `};
`;

Panel.propTypes = {
  children: node
};

export default Panel;



// margin-bottom: 12px;
// max-height: 600px;
// opacity: 1;

// transition: box-shadow 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s,
//             margin-bottom 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s,
//             max-height 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s,
//             opacity 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.2s;