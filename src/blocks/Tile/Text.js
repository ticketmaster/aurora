import React from "react";
import styled from "styled-components";
import { Text as AuroraText } from "../../components/Text";
// import { string, node, oneOf } from "prop-types";
// import colors from "../../theme/colors";
// import constants from "../../theme/constants";

const Wrapper = styled(AuroraText)`
  color: rgba(38, 38, 38, 0.6);
  line-height: 16px;
  max-height: 36px;
  margin: 0;
  overflow: hidden;
  position: relative;
  text-align: justify;
`;

const Text = ({ children, ...rest }) => (
  <Wrapper
    className="eventName"
    accent="gray03"
    size="hecto"
    tag="p"
    variant="accent"
    {...rest}
  >
    {children}
  </Wrapper>
);

// Text.propTypes = {
//   children: oneOf([string, node]).isRequired
// }

export default Text;
