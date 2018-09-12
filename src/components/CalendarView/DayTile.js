import React from "react";
import PropTypes from "prop-types";

import { Text } from "../Text";

import DayTileDateLabel from "./DayTileDateLabel";
import DayTileOverflowButton from "./DayTileOverflowButton";
import DayTileButton from "./DayTileButton";
import DayTileMoreButton from "./DayTileMoreButton";

import {
  DayTileContainer,
  DayTileHeader,
  DayTileContent,
  DayTileContentColumn,
  DayTileFooter,
  DayTileButtonsGroup
} from "./DayTile.styles";

const DayTile = ({
  children,
  ctaButtons,
  dateLabel,
  image,
  isDisabled,
  isHighlighted,
  moreButton,
  onOverflowClick,
  subTitle,
  title,
  withOverflow,
  ...props
}) => {
  const withImage = !!image;
  const overflowButton = withOverflow ? (
    <DayTileOverflowButton onClick={onOverflowClick} />
  ) : null;

  return (
    <DayTileContainer
      withImage={withImage}
      isHighlighted={isHighlighted}
      {...props}
    >
      <DayTileHeader>
        <DayTileDateLabel isDisabled={isDisabled}>{dateLabel}</DayTileDateLabel>
        {!withImage ? overflowButton : null}
      </DayTileHeader>
      {image}
      <DayTileContent>
        <DayTileContentColumn>
          <Text size="uno">{title}</Text>
          <Text secondary size="uno">
            {subTitle}
          </Text>
        </DayTileContentColumn>
        {withImage ? overflowButton : null}
      </DayTileContent>
      <DayTileFooter>
        {ctaButtons}
        {moreButton}
      </DayTileFooter>
      {children}
    </DayTileContainer>
  );
};

DayTile.propTypes = {
  children: PropTypes.node,
  ctaButtons: PropTypes.element,
  dateLabel: PropTypes.string.isRequired,
  image: PropTypes.element,
  isDisabled: PropTypes.bool,
  isHighlighted: PropTypes.bool,
  moreButton: PropTypes.element,
  onOverflowClick: PropTypes.func,
  subTitle: PropTypes.string,
  title: PropTypes.string,
  withOverflow: PropTypes.bool
};

DayTile.defaultProps = {
  children: null,
  ctaButtons: null,
  image: null,
  isDisabled: false,
  isHighlighted: false,
  moreButton: null,
  onOverflowClick: () => {},
  subTitle: "",
  title: "",
  withOverflow: false
};

DayTile.ButtonsGroup = DayTileButtonsGroup;
DayTile.Button = DayTileButton;
DayTile.MoreButton = DayTileMoreButton;

export default DayTile;
