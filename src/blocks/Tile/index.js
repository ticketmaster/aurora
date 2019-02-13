import styled from "styled-components";

import Label from "./Label";
import Link from "./Link";
import Text from "./Text";
import Title from "./Title";

const Tile = styled.div`
  background: #fff;
`;

Tile.Label = Label;
Tile.Link = Link;
Tile.Text = Text;
Tile.Title = Title;

export default Tile;
