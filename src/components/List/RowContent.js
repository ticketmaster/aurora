import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import classnames from "classnames";

import spacing from "../../theme/spacing";
import colors from "../../theme/colors";

import { StyledButton } from "../Button/Base.styles";
import { Row, Column } from "../Grid";
import { Link, Text } from "../Text";
import OverflowIcon from "../Icons/Overflow";
import ChevronIcon from "../Icons/Chevron";
import { mediumAndUp, largeAndUp, smallAndUp } from "../../theme/mediaQueries";
import { rowDataShape } from "./shape";
import constants from "../../theme/constants";

const IconButton = styled.button`
  border: 0;
  padding: 0 ${spacing.moderate};
  outline: 0;
  background: transparent;
  appearance: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
  }

  &.icon-button--last {
    padding-left: ${spacing.moderate};
    padding-right: 0;
  }

  > * {
    pointer-events: none;
  }
`;

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
  align-items: stretch;
  display: flex;
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
  width: 61.6%;
  max-width: 101px;

  ${smallAndUp`
    width: 31.1%;
  `} ${mediumAndUp`
    width: 26.8%;
    max-width: 116px;
  `};

  ${largeAndUp`
    width: 32.7%;
  `};
`;

const ContentColumn = styled(Column)`
  display: none;
  ${mediumAndUp`
  position: relative;
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
  display: flex;
  align-items: stretch;
  ${mediumAndUp`
    display: none;
  `};
`;

const MultilineText = styled(Text)`
  /* stylelint-disable */
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  /* stylelint-enable */

  ${mediumAndUp`
    &.subtitle--hidden {
      position: absolute;
      transition: opacity 0.1s ${constants.easing.easeInQuad};
      opacity: 0;
    }

    &.subtitle--active {
      transition: opacity 0.3s ${constants.easing.easeInOutQuad} 0.2s;
      opacity: 1;
    }

    &.subtitle--expanded {
      transform: translateX(-55%);
    }
  `};
`;

const SingleLineText = styled(Text)`
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
        type="button"
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
          <Text
            className="date--text"
            allCaps
            responsiveSize={{ xSmall: "hecto", medium: "kilo" }}
            weight="semiBold"
            {...(dateColor
              ? { accent: "heliotrope", variant: "accent", primary: true }
              : {})}
          >
            {dateTitle}
          </Text>
          <SingleLineText
            size="hecto"
            variant="dark"
            secondary
            className="day-time--text"
          >
            {dateSubTitle}
          </SingleLineText>
        </DateWrapper>

        <Row style={{ width: "100%" }}>
          <MobileOnlyColumn>
            <MultilineText
              responsiveSize={{ xSmall: "hecto", medium: "kilo" }}
              className="list-row--title"
            >
              {title}
            </MultilineText>
            <SingleLineText
              size="hecto"
              variant="dark"
              secondary
              className="list-row--subtitle"
            >
              {subTitle}
            </SingleLineText>
          </MobileOnlyColumn>

          <ContentColumn
            key="primary"
            medium={6}
            className={classnames({
              column__content: true,
              "list-row--title": true,
              "column__content--expanded": isOpen,
              "column__content--collapsed": !isOpen
            })}
          >
            <MultilineText responsiveSize={{ xSmall: "hecto", medium: "kilo" }}>
              {title}
            </MultilineText>
          </ContentColumn>
          <ContentColumn key="secondary" medium={6}>
            <MultilineText
              key="collapsed"
              responsiveSize={{ xSmall: "hecto", medium: "kilo" }}
              className={classnames({
                subtitle: true,
                "list-row--subtitle": true,
                "subtitle--active": !isOpen,
                "subtitle--hidden": isOpen
              })}
            >
              {subTitle}
            </MultilineText>
            <MultilineText
              key="expanded"
              responsiveSize={{ xSmall: "hecto", medium: "kilo" }}
              className={classnames({
                subtitle: true,
                "subtitle--expanded": true,
                "subtitle--active": isOpen,
                "subtitle--hidden": !isOpen
              })}
            >
              {isOpen && onExpandShow === "title" ? title : subTitle}
            </MultilineText>
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
          className="button--more-info icon-button--last"
          data-index={index}
          aria-label="More Info"
          type="button"
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
          <SingleLineText size="hecto" variant="dark" secondary>
            {linkSubTitle}
          </SingleLineText>
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
