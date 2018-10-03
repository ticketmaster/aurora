import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import classnames from "classnames";

import { Text } from "../Text";

import { getThemeValue } from "../../utils";

const DayTileDateContainer = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  background-color: ${getThemeValue("white", "base")};
`;
const DayTileDateText = styled(Text).attrs({
  size: "kilo",
  weight: "semiBold",
  className: ({ accent }) =>
    classnames("day-tile-date__text", {
      "day-tile-date__text--accent": accent
    })
})`
  color: ${getThemeValue("gray02")};

  &.day-tile-date__text--accent {
    color: ${getThemeValue("accent01", "dark")};
  }
`;

const DayTileDate = ({ children, accent }) => (
  <DayTileDateContainer>
    <DayTileDateText accent={accent}>{children}</DayTileDateText>
  </DayTileDateContainer>
);

DayTileDate.propTypes = {
  children: PropTypes.node.isRequired,
  accent: PropTypes.bool
};

DayTileDate.defaultProps = {
  accent: false
};

export default DayTileDate;
