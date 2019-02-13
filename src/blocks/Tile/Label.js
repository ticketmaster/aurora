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

const Label = ({ children }) => (
  <Wrapper size="uno" weight="semiBold" tag="p">
    {children}
  </Wrapper>
);
// Label.propTypes = {
//   children: string
// }

export default Label;
