import React from "react";
import styled from "styled-components";
import { Text as AuroraText } from "../../Text";

const Wrapper = styled(AuroraText)`
  line-height: 20px;
  max-height: 20px;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;  
  overflow: hidden;
`;

const Title = props => (
  <Wrapper className={props.className} size="kilo" tag="p" weight="semiBold">
    {props.children}
  </Wrapper>
);
// Title.propTypes = {
//   children: string
// }

export default Title;
