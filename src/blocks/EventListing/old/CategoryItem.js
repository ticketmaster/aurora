import React from "react";
import styled from "styled-components";
import { string } from "prop-types";

import Flex from "../../../components/Flex";
import Tile from "../../../components/Tile";
import Icon from "./Icon";

import { IconType, LinkType } from "../../../components/types";

const Wrapper = styled(Flex)`
  margin-bottom: 8px;
`

const IconWrapper = styled(Flex)`
  margin-right: 8px;
`;

const CategoryItem = ({
  link,
  icon: {
    type,
    src = "https://placekitten.com/g/512/288",
    alt = "avatar"
  },
  label,
  text
}) => (
<Wrapper>
  <IconWrapper>
    <Icon type={type} src={src} alt={text} />
  </IconWrapper>
  <Flex column justifyCenter>
    <Tile.Link href={link.href}> {link.text} </Tile.Link>
    {text && <Tile.Text> {text} </Tile.Text>}
  </Flex>
</Wrapper>
);

CategoryItem.propType = {
  link: LinkType,
  icon: IconType,
  label: string,
  text: string
 
};

export default CategoryItem;
