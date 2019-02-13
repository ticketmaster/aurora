import React from "react";
import styled from "styled-components";

import Tile from "../Tile"
import Icon from "./Icon";

const Wrapper = styled.div`
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

const CategoryItem = ({
  link,
  icon: {
    type,
    src = "https://placekitten.com/g/512/288"
  },
  label,
  text
}) => (
<Wrapper>
  <div className="section">
    <Tile.Link href={link.href}> {link.text} </Tile.Link>
    {text &&
      <Tile.Text>
        {text}
      </Tile.Text>
    }
  </div>
  <Icon type={type} src={src} />
</Wrapper>
);

export default CategoryItem;
