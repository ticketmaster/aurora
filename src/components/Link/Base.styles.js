import styled from "styled-components";
import { colors } from "../../theme";

const StyledLinkBase = styled.a.attrs({ className: "link" })`
  display: inline-block;
  color: ${colors.azure.base};
  text-decoration: none;
  outline: 0;
  border: 0;

  .links__list & {
    width: 100%;
    text-align: left;
  }

  &:focus,
  &:hover {
    outline: 0;
  }
`;

export default StyledLinkBase;
