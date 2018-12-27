import React, { Children } from "react";
import styled from "styled-components";

import { Text } from "../Text";

import { spacing } from "../../theme";

import { getThemeValue, getLabelTextColor } from "../../utils";

const DayTileItem = styled.article`
  flex: 0 0 auto;
  display: flex;
  flex-flow: column nowrap;
  min-height: 190px;
`;

DayTileItem.Header = styled.header`
  display: flex;
  flex-flow: row nowrap;
  padding-left: 30px;
  min-height: 30px;
`;

DayTileItem.Content = styled.div`
  flex: auto;
  display: flex;
  flex-flow: row nowrap;
`;

DayTileItem.ContentColumn = styled.div`
  padding: ${spacing.cozy} ${spacing.cozy} ${spacing.slim};
`;

DayTileItem.Footer = styled.footer`
  margin-top: auto;
`;

DayTileItem.Divider = styled.div`
  margin: 0 ${spacing.cozy} ${spacing.cozy};
  border-bottom: solid 1px ${getThemeValue("gray04")};
`;

const DayTileItemGroup = ({ children }) =>
  Children.map(children, (child, index) => {
    if (index === 0) {
      return child;
    }

    return [<DayTileItem.Divider />, child];
  });

const DayTileItemBaseText = styled(Text).attrs(() => ({ size: "uno" }))`
  width: 100%;
  word-break: break-word;
`;

const DayTileItemLabel = styled(DayTileItemBaseText).attrs(() => ({
  weight: "semiBold"
}))`
  text-transform: uppercase;
  color: ${getLabelTextColor};
`;

const DayTileItemTitle = DayTileItemBaseText;

const DayTileItemSubTitle = props => (
  <DayTileItemBaseText secondary {...props} />
);

DayTileItem.Group = DayTileItemGroup;
DayTileItem.Title = DayTileItemTitle;
DayTileItem.SubTitle = DayTileItemSubTitle;
DayTileItem.Label = DayTileItemLabel;

export default DayTileItem;
