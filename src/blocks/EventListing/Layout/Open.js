import styled from "styled-components";

const Open = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(1fr);
  grid-template-rows: 18px 20px;

  /* Mobile */
  grid-template-areas:
      "badge badge badge badge "
      "title title title title ";

  .title {
      grid-area: title;
      text-align: center;
  }

  .badge {
      grid-area: badge;
      text-align: center;
  }
`;

export default Open;
