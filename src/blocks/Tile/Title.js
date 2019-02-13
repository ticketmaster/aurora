import React from "react";
import styled from "styled-components";
import { Text as AuroraText } from "../../components/Text";

const BaseTitle = styled(AuroraText)`
  line-height: 20px;
  margin: 0;
  max-height: 20px;
  overflow: hidden;
  position: relative;
  text-align: justify;
`;

const Title = ({ children }) => (
  <BaseTitle size="kilo" weight="semiBold" tag="p">
    {children}
  </BaseTitle>
);
// Title.propTypes = {
//   children: string
// }

export default Title;
