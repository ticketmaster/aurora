import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import classNames from "classnames";

import colors from "../../theme/colors";
import constants from "../../theme/constants";
import { FlyoutConsumer } from "./Context";
import spacing from "../../theme/spacing";
import typography from "../../theme/typography";

const ItemContainer = styled.div`
  padding: 0 12px;
  height: 36px;
  display: flex;
  align-items: center;
  font-size: ${typography.size.kilo};
  border-radius: ${constants.borderRadius.small};

  &.flyout-item--selected {
    background-color: ${colors.shale};
  }

  &:hover {
    background-color: ${colors.azure.base};
    color: ${colors.white.base};
  }

  &:not(:last-of-type) {
    margin-bottom: ${spacing.slim};
  }
`;

const FlyoutItem = ({ children, index }) => (
  <FlyoutConsumer>
    {({ onItemClick, selectedIndex }) => (
      <ItemContainer
        className={classNames("flyout-item", {
          "flyout-item--selected": index === selectedIndex
        })}
        onClick={() => onItemClick({ index })}
      >
        {children}
      </ItemContainer>
    )}
  </FlyoutConsumer>
);

FlyoutItem.propTypes = {
  children: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

export default FlyoutItem;
