import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { Text } from "../Text";

import { colors } from "../../theme";

const DayTileDateLabelContainer = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white.base};
`;

const DEFAULT_TEXT_PROPS = {
  variant: "accent",
  accent: "heliotrope"
};

const DISABLED_TEXT_PROPS = {
  disabled: true
};

const DayTileDateLabel = ({ children, isDisabled }) => {
  const textProps = isDisabled ? DISABLED_TEXT_PROPS : DEFAULT_TEXT_PROPS;

  return (
    <DayTileDateLabelContainer>
      <Text size="kilo" weight="semiBold" {...textProps}>
        {children}
      </Text>
    </DayTileDateLabelContainer>
  );
};

DayTileDateLabel.propTypes = {
  children: PropTypes.node.isRequired,
  isAccent: PropTypes.bool,
  isDisabled: PropTypes.bool
};

DayTileDateLabel.defaultProps = {
  isAccent: true,
  isDisabled: false
};

export default DayTileDateLabel;
