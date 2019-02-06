import styled, { css } from "styled-components";

import colors from "../../theme/colors";
import spacing from "../../theme/spacing";
import constants from "../../theme/constants";

const AccordionPanel = styled.div`
  padding: 0 ${spacing.cozy};
  border-top: 1px solid ${colors.diatomite};
  color: ${colors.blackPearl};

  ${({ isOpen }) =>
    isOpen &&
    css`
      background-color: ${colors.white.base};
      max-height: 600px;
      transition: max-height 0.3s ${constants.easing.easeInOutQuad},
        opacity 0.3s ${constants.easing.easeInOutQuad} 0.2s;
      opacity: 1;
    `} ${({ isOpen }) =>
    !isOpen &&
    css`
      transition: max-height 0.3s ${constants.easing.easeInQuad},
        opacity 0.1s ${constants.easing.easeInQuad};
      opacity: 0;
    `};
`;

export default AccordionPanel;
