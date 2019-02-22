import styled, { css } from "styled-components";
import { node } from "prop-types";
import COLORS from "../../theme/colors";
import {expand, collapse } from "../../theme/animations";

const Panel = styled.div`
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
      ? css`
          background-color: ${COLORS.white.base};
          ${expand};
        `
      : css`
          ${collapse};
        `};
`;

Panel.propTypes = {
  children: node
};

export default Panel;
