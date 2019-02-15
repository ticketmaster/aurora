import styled from "styled-components";

const Open = styled.div`
  display: grid;
  width: 100%;

  grid-template-columns: repeat(1fr);
  grid-template-rows: repeat(1fr);

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
