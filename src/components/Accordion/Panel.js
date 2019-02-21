import styled, { css } from "styled-components";
import { node } from "prop-types";

// import spacing from "../../theme/spacing";
import COLORS from "../../theme/colors";
import {expand, collapse} from "../../theme/animations"

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
    isOpen
    ?
      css`
        background-color: ${COLORS.white.base};
        max-height: 600px;
        opacity: 1;
        ${expand}
      `
   :
      css`
        ${collapse}
        opacity: 0;
      `
  };
`;

Panel.propTypes = {
  children: node
};

export default Panel;
