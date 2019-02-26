import React from "react";
import styled from "styled-components";
import { Text as AuroraText } from "../../Text";

const Wrapper = styled(AuroraText)`
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  line-height: 20px;
  margin: 0;
  max-height: 20px;
  overflow: hidden;
`;

const Title = props => (
  <Wrapper className="event_title" size="kilo" tag="p" weight="semiBold">
    {props.children}
  </Wrapper>
);
// Title.propTypes = {
//   children: string
// }

export default Title;
