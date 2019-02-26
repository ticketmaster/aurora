import React from "react";
import styled from "styled-components";
import { string } from "prop-types";

import Flex from "../../components/Flex";
import Tile from "../../components/Tile";
import Icon from "./Event/Icon";

import { IconType, LinkType } from "../../components/types";

const Wrapper = styled(Flex)`
  margin-bottom: 8px;
`;

const IconWrapper = styled(Flex)`
  margin-right: 8px;
`;

const CategoryItem = ({
  label,
  subTitle,
  title,
  url,
  icon: { alt = "", type, src = "https://placekitten.com/g/512/288" },
  text
}) => (
  <Wrapper>
    <IconWrapper>
      {type && <Icon type={type} src={src} alt={text} />}
    </IconWrapper>
    <Flex column justifyCenter>
      {title && <Tile.Link href={url}> {title} </Tile.Link>}
      {subTitle && <Tile.Text> {subTitle} </Tile.Text>}
    </Flex>
  </Wrapper>
);

CategoryItem.propTypes = {
  link: LinkType,
  icon: IconType,
  label: string,
  text: string
};

export default CategoryItem;
