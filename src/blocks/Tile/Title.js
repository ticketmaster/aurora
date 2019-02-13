import React from "react";
import styled from "styled-components";
import { Text as AuroraText } from "../../components/Text";

const Wrapper = styled(AuroraText)`
  line-height: 20px;
  margin: 0;
  max-height: 20px;
  overflow: hidden;
  position: relative;
  text-align: justify;
`;

const Title = ({ children }) => (
  <Wrapper size="kilo" weight="semiBold" tag="p">
    {children}
  </Wrapper>
);
// Title.propTypes = {
//   children: string
// }

export default Title;
