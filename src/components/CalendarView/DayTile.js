import styled from "styled-components";

import { constants } from "../../theme";
import { getThemeValue } from "../../utils";

const DayTile = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  min-height: 192px;
  border: solid 1px ${getThemeValue("gray04")};
  overflow: hidden;
  background-color: ${({ highlighted }) =>
    highlighted
      ? getThemeValue("primary", "lightBase")
      : getThemeValue("white", "base")};
  border-radius: ${({ noBorderRadius }) =>
    !noBorderRadius ? constants.borderRadius.small : "0"};
`;

DayTile.Header = styled.header`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 30px;
  display: flex;
  flex-flow: row nowrap;
  pointer-events: none;
`;

export default DayTile;
