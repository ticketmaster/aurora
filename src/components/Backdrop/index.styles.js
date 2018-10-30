/* eslint-disable import/prefer-default-export */

import styled from "styled-components";
import zIndex from "../../theme/zIndex";

export const Overlay = styled.div.attrs({
  className: "container--overlay"
})`
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(38, 38, 38, 0.5);
  z-index: ${zIndex.layout.overlay};
`;
