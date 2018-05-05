import styled from "styled-components";

const Row = styled.div`
  width: 100%;
  max-width: 100%;

  & [data-col]:last-of-type {
    padding-right: 0;
  }

  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

export default Row;
