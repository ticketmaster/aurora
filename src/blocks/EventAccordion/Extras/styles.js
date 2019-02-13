import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px 16px 16px 47px;

  && > div:nth-child(n + 2) {
    margin-left: 16px;
  }
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1;
`;

const ExtraItem = styled.div`
  display: grid;
  grid-auto-flow: dense;
  grid-auto-rows: auto;
  grid-gap: 6px 6px;
  grid-template-areas: "icon section section section section";
  grid-template-columns: auto 1fr;
  padding: 6px 0 0;

  .section {
    align-items: left;
    display: flex;
    flex-direction: column;
    grid-area: section;
    grid-column: span 4;
    justify-content: center;
    margin: 0;

    p {
      margin: 0;
    }
  }
  .icon {
    grid-area: icon;
  }
`;

export { Wrapper, Category, ExtraItem };
