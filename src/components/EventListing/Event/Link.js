import React from "react";
import styled from "styled-components";
import { LinkCta } from "../../Text";

const Wrapper = styled(LinkCta)`
  line-height: 20px;
  margin: 0;
  max-height: 20px;
  overflow: hidden;
  position: relative;
  text-align: justify;
`;

const Link = ({ children, ...rest }) => (
  <Wrapper {...rest} size="uno" weight="semiBold">
    {children}
  </Wrapper>
);

// Link.propTypes = {
//   children: string
// }

export default Link;
