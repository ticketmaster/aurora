import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Text } from "../Text";

import { colors } from "../../theme";

const DayTileDateContainer = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white.base};
`;

const ACCENT_TEXT_PROPS = {
  variant: "accent",
  accent: "heliotrope"
};

const DEFAULT_TEXT_PROPS = {
  disabled: true
};

const DayTileDate = ({ children, accent }) => {
  const textProps = accent ? ACCENT_TEXT_PROPS : DEFAULT_TEXT_PROPS;

  return (
    <DayTileDateContainer>
      <Text size="kilo" weight="semiBold" {...textProps}>
        {children}
      </Text>
    </DayTileDateContainer>
  );
};

DayTileDate.propTypes = {
  children: PropTypes.node.isRequired,
  accent: PropTypes.bool
};

DayTileDate.defaultProps = {
  accent: false
};

export default DayTileDate;
