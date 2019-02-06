import styled, { css } from "styled-components";
import ChevronIcon from "../../components/Icons/Chevron";

const Chevron = styled(ChevronIcon)`
  border: 1px solid grey;
  transition: all 0.1s linear;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(-180deg);
    `};
`;

export default Chevron;
