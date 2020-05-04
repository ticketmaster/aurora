import styled from "styled-components";
import classnames from "classnames";

import { constants } from "../../theme";
import { getThemeValue } from "../../utils";

const DAY_TILE_CLASS = "day-tile";
const DAY_TILE_NO_BORDER_RADIUS_CLASS = `${DAY_TILE_CLASS}--no-border-radius`;

const DayTile = styled.div.attrs(({ noBorderRadius }) => ({
  className: classnames(DAY_TILE_CLASS, {
    [DAY_TILE_NO_BORDER_RADIUS_CLASS]: noBorderRadius
  })
}))`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  min-height: 192px;
  border: solid 1px ${getThemeValue("gray04")};
  overflow: hidden;
  background-color: ${getThemeValue("white", "base")};
  border-radius: ${constants.borderRadius.small};

  &.${DAY_TILE_NO_BORDER_RADIUS_CLASS} {
    border-radius: 0;
  }
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
