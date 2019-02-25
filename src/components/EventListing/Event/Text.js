import React from "react";
import styled from "styled-components";
import { Text as AuroraText } from "../../Text";
import typography from "../../../theme/typography";

const { weight } = typography;
// import { string, node, oneOf } from "prop-types";
// import colors from "../../theme/colors";
// import constants from "../../theme/constants";


const Wrapper = styled(AuroraText)`
  color: rgba(38, 38, 38, 0.6);
  font-weight: ${weight.semiBold};
  line-height: 16px;
  margin: 0;
  position: relative;
`;

const Text = (props) => (
  <Wrapper
    className="eventName"
    accent="gray03"
    size="uno"
    tag="p"
    variant="accent"
    {...props}
  >
    {props.children}
  </Wrapper>
);

// Text.propTypes = {
//   children: oneOf([string, node]).isRequired
// }

export default Text;
