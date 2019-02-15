import React from "react";
import styled from "styled-components";
import { OverflowIcon } from "../../components/Icons";

const Wrapper = styled(OverflowIcon)`
  color: #5d5d5d;
  height: 22px;
  margin-top: 11px;
  min-width: 10px;
`;

const Ellipsis = (props) => (
  <Wrapper
    className="cta-ellipsis"
    color="#000"
    direction="right"
    size={15}
    {...props}
  />
)

export default Ellipsis;
