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
  subTitle,
  title,
  url,
  image,
  icon,
  text
}) => 
  // console.log("categoryITem:  ", this.props);
   (
    <Wrapper>
      <IconWrapper>
        {icon && <Icon type={icon.type} alt={text} />}
      </IconWrapper>
      <Flex column justifyCenter>
        {title && <Tile.Link href={url}> {title} </Tile.Link>}
        {subTitle && <Tile.Text> {subTitle} </Tile.Text>}
      </Flex>
    </Wrapper>
  )


CategoryItem.propTypes = {
  link: LinkType,
  icon: IconType,
  label: string,
  text: string
};

export default CategoryItem;
