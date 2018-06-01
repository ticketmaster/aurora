import styled from "styled-components";

const LinkRow = styled.div.attrs({
  className: "links links__row",
  role: "menubar"
})`
  width: 100%;

  .list-container {
    position: relative;
  }
`;

export default LinkRow;
