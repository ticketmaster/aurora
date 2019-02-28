import styled from "styled-components";
import Item from "./Item";

const Grid = styled.div`
  display: grid;
  grid-template-areas: "header";
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: 100%;
`;

Grid.Item = Item;
export default Grid;
