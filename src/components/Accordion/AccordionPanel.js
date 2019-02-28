import styled, { css } from "styled-components";
import { node } from "prop-types";
import { expand, collapse } from "../../theme/animations";

const AccordionPanel = styled.div.attrs({
  className: "accordion_panel"
})`
  overflow: hidden;
  ${({ isOpen }) =>
    isOpen
      ? css`
          ${expand};
        `
      : css`
          ${collapse};
        `};
`;

AccordionPanel.propTypes = {
  children: node
};

export default AccordionPanel;
