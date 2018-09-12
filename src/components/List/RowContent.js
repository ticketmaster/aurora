import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import classnames from "classnames";

import spacing from "../../theme/spacing";
import colors from "../../theme/colors";

import { StyledButton } from "../Button/Base.styles";
import { Row, Column } from "../Grid";
import { PrimaryText, SecondaryText, BoldText, Link } from "../Text";
import OverflowIcon from "../Icons/Overflow";
import ChevronIcon from "../Icons/Chevron";
import { mediumAndUp, largeAndUp } from "../../theme/mediaQueries";
import { rowDataShape } from "./shape";
import constants from "../../theme/constants";

import IconButton from "../Button/IconButton";

const RowWrapper = styled.div`
  background-color: ${colors.white.base};

  ${mediumAndUp`
    border-radius: 4px;
    &.row__wrapper--expanded {
      transition: box-shadow 0.3s ${
        constants.easing.easeInOutQuad
      }, margin-bottom 0.3s ${constants.easing.easeInOutQuad};
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.01), 0 4px 10px 0 rgba(0, 0, 0, 0.19);
      margin-bottom: 12px;
    }
    
    &.row__wrapper--collapsed {
      transition: box-shadow 0.3s ${
        constants.easing.easeInQuad
      }, margin-bottom 0.3s ${constants.easing.easeInQuad};
      box-shadow: 0;
      margin-bottom: 0;
    }
  `};

  &:not(:last-of-type) {
    border-bottom: 0.5px solid ${colors.lightGray};
  }
`;

const ListContainer = styled.div`
  background-color: ${colors.white.base};
  align-items: center;
  display: flex;
  padding-right: ${spacing.cozy};
`;

const IconWrapper = styled(IconButton).attrs({
  size: 45
})`
  display: none;
  ${mediumAndUp`
    display: block;

    &.button--expanded,
    &.button--collapsed {
      transition: all 0.1s linear;
    }

    &.button--expanded {
      transform: rotate(-180deg);
    }
  `};
`;

const LinkWrapper = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: horizontal;
  overflow: hidden;
  width: 100%;
  cursor: pointer;
  padding-top: ${spacing.cozy};
  padding-bottom: ${spacing.cozy};
  border-radius: 2px;

  margin: 12px 0
    ${props => (props.rowVariant === "withLink" ? spacing.cozy : "12px")} 0;
  ${mediumAndUp`
    margin: 18px 0
      ${props => (props.rowVariant === "withLink" ? spacing.cozy : "18px")}
      0;
    &:hover {
      background-color: ${colors.azure.light};
    }

  `};
`;

const DateWrapper = styled.div`
  min-width: 101px;
  max-width: 116px;
  padding-left: ${spacing.cozy};
`;

const ContentColumn = styled(Column)`
  display: none;
  ${mediumAndUp`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  &.column__content--expanded {
    transition: opacity 0.1s ${constants.easing.easeInQuad};
    opacity: 0;
  }
  
  &.column__content--collapsed {
    transition: opacity 0.3s ${constants.easing.easeInOutQuad} 0.2s;
    opacity: 1;
  }
`};
`;

const MobileOnlyColumn = styled(Column)`
  ${mediumAndUp`
    display: none;
  `};
`;

const ListRowButton = StyledButton.withComponent("span").extend`
  min-width: 100px;
  max-width: 102px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.4;
  padding: 18px 0
      ${props => (props.rowVariant === "withLink" ? spacing.cozy : "18px")}
      0;
`;

const LinkRow = styled(Row)`
  padding-left: ${spacing.cozy};
  ${mediumAndUp`
    padding-left: 12px;
  `};
`;

const OverflowDesktopContainer = styled(Column)`
  max-height: 0;
  overflow: hidden;

  ${mediumAndUp`
    border-top: 0.5px solid ${colors.lightGray};

    &.container__overflow--expanded {
      background-color: ${colors.white.base};
      max-height: 600px;
      transition: max-height 0.3s ${
        constants.easing.easeInOutQuad
      }, opacity 0.3s ${constants.easing.easeInOutQuad} 0.2s;
      opacity: 1;
    }

    &.container__overflow--collapsed {
      transition: max-height 0.3s ${
        constants.easing.easeInQuad
      }, opacity 0.1s ${constants.easing.easeInQuad};
      opacity: 0;
    }
  `};
`;

const DesktopContainer = styled.div`
  display: none;
  padding-left: ${spacing.moderate};
  padding-right: ${spacing.cozy};

  ${mediumAndUp`
    display: flex;
    justify-content: center;
    align-items: center;
  `};
`;

const MobileContainer = styled.div`
  ${mediumAndUp`
    display: none;
  `};
`;

const MultilinePrimaryText = styled(PrimaryText)`
  /* stylelint-disable */
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  /* stylelint-enable */

  ${mediumAndUp`
    &.multiline-text {
      position: absolute;
      transition: opacity 0.1s ${constants.easing.easeInQuad};
      opacity: 0;
    }

    &.multiline-text--active {
      transition: opacity 0.3s ${constants.easing.easeInOutQuad} 0.2s;
      opacity: 1;
    }

    &.multiline-text__subtitle {
      margin-left: 40px;
    }
  `};

  ${largeAndUp`
    &.multiline-text__subtitle {
      margin-left: 125px;
    }
  `};
`;

const SingleLineSecondaryText = styled(SecondaryText)`
  /* stylelint-disable */
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  /* stylelint-enable */
`;

const ListRowContent = ({
  rowItem: {
    title,
    subTitle,
    dateTitle,
    dateSubTitle,
    buttonText,
    variant,
    linkTitle,
    linkUrl,
    linkSubTitle,
    dateColor,
    onClick,
    url
  },
  isOpen,
  index,
  onOverflowClick,
  onExpandShow,
  children,
  ...rest
}) => (
  <RowWrapper
    variant={variant}
    className={classnames({
      row__wrapper: true,
      "row__wrapper--expanded": isOpen,
      "row__wrapper--collapsed": !isOpen
    })}
    {...rest}
  >
    <ListContainer>
      <IconWrapper
        role="button"
        aria-label={isOpen ? "Collapse Row" : "Expand Row"}
        aria-expanded={isOpen}
        data-index={index}
        className={classnames({
          "button--expand-or-collapse": true,
          "button--expanded": isOpen,
          "button--collapsed": !isOpen
        })}
      >
        <ChevronIcon size={15} color={colors.blackPearl} />
      </IconWrapper>
      <LinkWrapper
        role="link"
        aria-label={buttonText}
        onClick={onClick}
        href={url}
        rowVariant={variant}
      >
        <DateWrapper>
          <BoldText
            className="date--text"
            style={{ textTransform: "uppercase" }}
            color={dateColor}
          >
            {dateTitle}
          </BoldText>
          <SingleLineSecondaryText className="day-time--text">
            {dateSubTitle}
          </SingleLineSecondaryText>
        </DateWrapper>

        <Row style={{ width: "100%" }}>
          <MobileOnlyColumn>
            <MultilinePrimaryText className="list-row--title">
              {title}
            </MultilinePrimaryText>
            <SingleLineSecondaryText className="list-row--subtitle">
              {subTitle}
            </SingleLineSecondaryText>
          </MobileOnlyColumn>

          <ContentColumn
            key="primary"
            medium={4.5}
            large={4}
            xLarge={5}
            className={classnames({
              column__content: true,
              "list-row--title": true,
              "column__content--expanded": isOpen,
              "column__content--collapsed": !isOpen
            })}
          >
            <MultilinePrimaryText>{title}</MultilinePrimaryText>
          </ContentColumn>
          <ContentColumn key="secondary" medium={7.5} large={8} xLarge={7}>
            <MultilinePrimaryText
              key="collapsed"
              className={classnames({
                "multiline-text": true,
                "multiline-text__subtitle": true,
                "list-row--subtitle": true,
                "multiline-text--active": !isOpen,
                "multiline-text--hidden": isOpen
              })}
            >
              {subTitle}
            </MultilinePrimaryText>
            <MultilinePrimaryText
              key="expanded"
              className={classnames({
                "multiline-text": true,
                "multiline-text--active": isOpen,
                "multiline-text--hidden": !isOpen
              })}
            >
              {isOpen && onExpandShow === "title" ? title : subTitle}
            </MultilinePrimaryText>
          </ContentColumn>
        </Row>

        <DesktopContainer>
          <ListRowButton
            aria-label={buttonText}
            role="button"
            width="102px"
            variant="standard"
            size="regular"
            rowVariant={variant}
            onClick={onClick}
          >
            {buttonText}
          </ListRowButton>
        </DesktopContainer>
      </LinkWrapper>

      <MobileContainer>
        <IconButton
          className="button--more-info"
          size={35}
          data-index={index}
          aria-label="More Info"
          role="button"
          onClick={onOverflowClick}
        >
          <OverflowIcon size={22} color={colors.onyx.light} />
        </IconButton>
      </MobileContainer>
    </ListContainer>
    {variant === "withLink" ? (
      <LinkRow>
        <Column small={9} medium={10} large={10.5} xLarge={10.8}>
          <Link href={linkUrl}>{linkTitle}</Link>
        </Column>
        <Column small={3} medium={2} large={1.5} xLarge={1.2}>
          <SecondaryText>{linkSubTitle}</SecondaryText>
        </Column>
      </LinkRow>
    ) : null}

    <OverflowDesktopContainer
      className={classnames({
        container__overflow: true,
        "container__overflow--expanded": isOpen,
        "container__overflow--collapsed": !isOpen
      })}
    >
      {children}
    </OverflowDesktopContainer>
  </RowWrapper>
);

ListRowContent.defaultProps = {
  isOpen: false,
  onExpandShow: "subTitle",
  children: null
};

ListRowContent.propTypes = {
  rowItem: PropTypes.shape(rowDataShape).isRequired,
  isOpen: PropTypes.bool,
  index: PropTypes.number.isRequired,
  onOverflowClick: PropTypes.func.isRequired,
  onExpandShow: PropTypes.oneOf(["title", "subTitle"]),
  children: PropTypes.node
};

export default ListRowContent;
