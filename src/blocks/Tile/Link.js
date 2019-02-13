import React from "react";
import styled from "styled-components";
import { LinkCta } from "../../components/Text";

const BaseLink = styled(LinkCta)`
  line-height: 20px;
  margin: 0;
  max-height: 20px;
  overflow: hidden;
  position: relative;
  text-align: justify;
`;

const Link = ({ children, href, ...rest }) => (
  <BaseLink {...rest} size="hecto" weight="semiBold" tag="p">
    {children}
  </BaseLink>
);

// Link.propTypes = {
//   children: string
// }

export default Link;
