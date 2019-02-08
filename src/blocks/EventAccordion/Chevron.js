import styled, { css } from "styled-components";
import ChevronIcon from "../../components/Icons/Chevron";

const Chevron = styled(ChevronIcon)`
  transition: all 0.1s linear;
  pointer-events: none;
  position: absolute;
  left: 11px;
  top: 17px;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(-180deg);
    `};
`;

export default Chevron;
