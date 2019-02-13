import styled from "styled-components";

const InfoItem = styled.div`
  align-items: self-start;
  display: grid;
  grid-auto-flow: dense;
  grid-auto-rows: auto;
  grid-gap: 6px 6px;
  grid-template-areas:
    "icon section section section section"
    "  .  section section section section";
  grid-template-columns: auto 1fr;
  padding: 6px 0 0;

  .section {
    align-items: left;
    display: flex;
    flex-direction: column;
    grid-area: section;
    justify-content: center;
    margin: 0;
    align-self: normal;
    grid-row: section / span 1;

    p {
      margin: 0;
    }
  }

  .lineup {
    align-self: center;
    grid-row: section / span 1;
  }
  .icon {
    grid-area: icon;
  }
`;

export default InfoItem;
