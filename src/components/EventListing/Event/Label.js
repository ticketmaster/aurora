import React from "react";
import styled from "styled-components";
import { Text as AuroraText } from "../../Text";

const Wrapper = styled(AuroraText)`
  line-height: 20px;
  margin: 0;
  max-height: 20px;
  overflow: hidden;
  position: relative;
`;

const Label = ({ children, ...rest }) => (
  <Wrapper size="uno" weight="semiBold" tag="p" {...rest}>
    {children}
  </Wrapper>
);

// Label.propTypes = {
//   children: string
// }

export default Label;
