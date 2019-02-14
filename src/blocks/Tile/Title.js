import React from "react";
import styled from "styled-components";
import { Text as AuroraText } from "../../components/Text";

const Wrapper = styled(AuroraText)`
  line-height: 20px;
  margin: 0;
`;

const Title = (props) => (
  <Wrapper
    className={props.className}
    size="kilo"
    tag="p"
    weight="semiBold"
  >
    {props.children}
  </Wrapper>
);
// Title.propTypes = {
//   children: string
// }

export default Title;
