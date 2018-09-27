import styled from "styled-components";
import classnames from "classnames";

import { constants, colors, spacing } from "../../theme";

const DayTileContainer = styled.article.attrs({
  className: ({ withImage, isHighlighted }) =>
    classnames("day-tile", {
      "day-tile--with-image": withImage,
      "day-tile--highlighted": isHighlighted
    })
})`
  display: flex;
  flex-flow: column nowrap;
  min-height: 190px;
  background-color: ${colors.white.base};
  border: solid 1px ${colors.onyx.muted};
  border-radius: ${constants.borderRadius.small};
  overflow: hidden;

  &.day-tile--with-image {
    position: relative;
    min-height: 30px;
  }

  &.day-tile--highlighted {
    background-color: ${colors.azure.muted};
  }
`;

const DayTileHeader = styled.header`
  display: flex;
  flex-flow: row wrap;

  ${DayTileContainer}.day-tile--with-image > & {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
`;

const DayTileContent = styled.div`
  flex: auto;
  display: flex;
  flex-flow: row nowrap;

  ${DayTileContainer}:not(.day-tile--with-image) > & {
    align-items: center;
  }
`;

const DayTileContentColumn = styled.div`
  padding: ${spacing.cozy} ${spacing.cozy} ${spacing.slim};
`;

const DayTileFooter = styled.footer`
  margin-top: auto;
`;

const DayTileButtonsGroup = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  padding: 0 ${spacing.slim};
`;

DayTileButtonsGroup.Item = styled.div`
  width: calc(50% - ${spacing.cozy});
  margin: 0 ${spacing.slim} ${spacing.cozy};
`;

export {
  DayTileContainer,
  DayTileHeader,
  DayTileContent,
  DayTileContentColumn,
  DayTileFooter,
  DayTileButtonsGroup
};
