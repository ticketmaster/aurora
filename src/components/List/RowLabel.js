import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import classnames from "classnames";

import { Text } from "../Text";
import { Column, Row } from "../Grid";
import { StatusBadge } from "../StatusBadge";
import { mediumAndUp } from "../../theme/mediaQueries";
import { constants, spacing, typography, themes } from "../../theme";
import { getLabelTextColor } from "../../utils";

import {
  ROW_CONTAINER_VERTICAL_PADDING,
  CHEVRON_ICON_PADDING,
  CHEVRON_ICON_SIZE,
  ROW_DATE_MEDIUM_WIDTH,
  ROW_DATE_SMALL_WIDTH,
  ROW_BUTTON_WIDTH
} from "./constants";

const rowMarginRight = spacing.gutters.small / 2;

const Content = styled(Row)`
  width: 100%;
  padding-left: ${ROW_DATE_SMALL_WIDTH};
  padding-top: ${spacing.cozy};

  font-size: 11px;
  ${mediumAndUp`
    padding-top: ${ROW_CONTAINER_VERTICAL_PADDING};
    padding-left: calc(${CHEVRON_ICON_SIZE}px + ${CHEVRON_ICON_PADDING} + ${CHEVRON_ICON_PADDING} + ${ROW_DATE_MEDIUM_WIDTH});
    padding-right: calc(${ROW_BUTTON_WIDTH} - ${rowMarginRight}px);
    font-size: ${typography.size.hecto};
  `};
`;

const ContentColumn = styled(Column)`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const MobileWrapper = styled.div`
  display: inline-block;
  max-width: 100%;

  ${mediumAndUp`
    display: none;
  `};
`;

const DesktopWrapper = styled.div`
  display: none;

  ${mediumAndUp`
    display: flex;
    align-items: center;
    overflow: hidden;

    &.row__label--hidden {
      transition: opacity 0.1s ${constants.easing.easeInQuad};
      opacity: 0;
    }

    &.row__label--active {
      transition: opacity 0.3s ${constants.easing.easeInOutQuad} 0.2s;
      opacity: 1;
    }

    &.row__label--expanded {
      position: absolute;
      top: 0;
      left: 50%;
      max-width: 100%;
      transform: translateX(-50%);
    }
  `};
`;

const LabelText = styled(Text)`
  font-size: ${typography.size.uno};
  font-weight: ${typography.weight.semiBold};
  color: ${({ sentiment }) => getLabelTextColor({ variant: sentiment })};
  text-transform: uppercase;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const renderLabel = (label, variant) => {
  switch (variant) {
    case "alert":
      return <StatusBadge label={label} color={themes.global.error.base} />;
    case "positive":
      return (
        <LabelText primary sentiment="positive" variant="accent">
          {label} positive
        </LabelText>
      );
    case "accent":
      return (
        <LabelText primary sentiment="accent" variant="accent">
          {label} accent
        </LabelText>
      );
    case "caution":
      return <StatusBadge label={`${label} caution`} color={themes.global.caution.dark} />;
    case "neutral":
      return <StatusBadge label={`${label} neutral`} color={themes.global.onyx.light} />;
    default:
      return <LabelText primary>{label}</LabelText>;
  }
};

const RowLabel = ({ isOpen, index, variant, children, ...restProps }) => {
  if (!children) {
    return null;
  }

  const content = renderLabel(children, variant);

  return (
    <Content {...restProps}>
      <ContentColumn>
        <MobileWrapper
          className="row__label row__label--mobile"
          data-index={index}
        >
          {content}
        </MobileWrapper>

        <DesktopWrapper
          key="collapsed"
          data-index={index}
          className={classnames("row__label", "row__label--desktop", {
            "row__label--active": !isOpen,
            "row__label--hidden": isOpen
          })}
        >
          {content}
        </DesktopWrapper>

        <DesktopWrapper
          key="expanded"
          data-index={index}
          className={classnames(
            "row__label",
            "row__label--expanded",
            "row__label--desktop",
            {
              "row__label--active": isOpen,
              "row__label--hidden": !isOpen
            }
          )}
        >
          {content}
        </DesktopWrapper>
      </ContentColumn>
    </Content>
  );
};

RowLabel.defaultProps = {
  index: 0,
  variant: "default",
  isOpen: false,
  children: ""
};

RowLabel.propTypes = {
  index: PropTypes.number,
  variant: PropTypes.oneOf([
    "default",
    "positive",
    "alert",
    "accent",
    "caution",
    "neutral"
  ]),
  isOpen: PropTypes.bool,
  children: PropTypes.string
};

export default RowLabel;
