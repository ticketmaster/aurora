import styled, { css } from "styled-components";
import { OverflowIcon } from "../../components/Icons";

const Ellipsis = styled(OverflowIcon)`
  color: #5d5d5d;
  height: 22px;
  margin-top: 11px;
  min-width: 10px;

  ${({ isOpen }) =>
    isOpen &&
    css`
      transform: rotate(-180deg);
    `};
`;

export default Ellipsis;
