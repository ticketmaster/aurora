import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import classnames from "classnames";

import { themes, spacing, colors } from "../../theme";

import { StyledButton } from "../Button/Base.styles";
import { Row, Column } from "../Grid";
import { Text } from "../Text";
import OverflowIcon from "../Icons/Overflow";
import { mediumAndUp, largeAndUp } from "../../theme/mediaQueries";

import RowToggler, { IconButton } from "./RowToggler";
import { rowDataShape } from "./shape";
import constants from "../../theme/constants";
import RowLabel from "./RowLabel";
import RowOptionsLink from "./RowOptionsLink";
import {
  ROW_CONTAINER_VERTICAL_PADDING,
  ROW_LINK_VERTICAL_PADDING,
  ROW_LINK_HORIZONTAL_PADDING,
  ROW_DATE_SMALL_WIDTH,
  ROW_DATE_MEDIUM_WIDTH,
  ROW_BUTTON_WIDTH,
  staticProps
} from "./constants";

const RowWrapper = styled.div`
  background-color: ${themes.global.white.base};
  border-bottom: 1px solid ${colors.lightGray};

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
`;

const ListContainer = styled.div`
  background-color: ${themes.global.white.base};
  align-items: stretch;
  display: flex;
  padding-top: ${props =>
    props.rowLabel ? "1px" : `calc(12px + ${spacing.cozy})`};
  padding-bottom: ${props =>
    props.rowVariant === "withLink" ? "1px" : `calc(12px + ${spacing.cozy})`};

  ${mediumAndUp`
    padding-top: ${props =>
      props.rowLabel ? "0" : ROW_CONTAINER_VERTICAL_PADDING};
    padding-bottom: ${props =>
      props.rowVariant === "withLink" ? "0" : ROW_CONTAINER_VERTICAL_PADDING};
  `};
`;

const LinkWrapper = styled.a`
  text-decoration: none;
  display: flex;
  padding: ${ROW_LINK_VERTICAL_PADDING} ${ROW_LINK_HORIZONTAL_PADDING};
  margin-left: -${ROW_LINK_HORIZONTAL_PADDING};
  min-height: 49px;
  justify-content: horizontal;
  width: 100%;
  cursor: pointer;
  border-radius: 2px;

  ${mediumAndUp`
    &:hover {
      background-color: ${themes.global.primary.light};
    }
  `};
`;

const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: ${ROW_DATE_SMALL_WIDTH};
  max-width: ${ROW_DATE_SMALL_WIDTH};

  ${mediumAndUp`
    width: 26.8%;
    max-width: ${ROW_DATE_MEDIUM_WIDTH};
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

  &.column__content--fixed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;

    ${mediumAndUp`
      padding: 0 calc(${spacing.moderate} + ${spacing.gutters.mediumAndUp /
      2}px);
    `};
  }
`};
`;

const MobileOnlyColumn = styled(Column)`
  ${mediumAndUp`
    display: none;
  `};
`;

const ListRowButton = styled(StyledButton)`
  min-width: ${ROW_BUTTON_WIDTH};
  max-width: ${ROW_BUTTON_WIDTH};
  height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.4;
  padding: 18px 0;
`;

export const OverflowDesktopContainer = styled(Column)`
  max-height: 0;
  overflow: hidden;

  ${mediumAndUp`
    border-top: 1px solid ${colors.lightGray};

    &.container__overflow--expanded {
      background-color: ${themes.global.white.base};
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
  padding-left: ${spacing.cozy};
  position: relative;

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
  width: 100%;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  /* stylelint-enable */
`;

const SingleLineText = styled(Text)`
  /* stylelint-disable */
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.2;
  /* stylelint-enable */
`;

const AbsoluteContent = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 100%;
  display: flex;
  justify-content: center;
`;

const ContentRow = styled(Row)`
  width: 100%;
  position: relative;
`;

class ListRowContent extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.isOpen && this.props.index !== prevProps.index) {
      this.props.resetOpenIndex();
    }
  }

  componentWillUnmount() {
    if (this.props.isOpen) {
      this.props.resetOpenIndex();
    }
  }

  render() {
    const {
      rowItem: {
        title,
        subTitle,
        dateTitle,
        dateSubTitle,
        buttonText,
        buttonVariant = "standard",
        variant,
        label,
        labelVariant,
        linkTitle,
        linkUrl = "",
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
      onExpandItem,
      onCollapseItem,
      ...rest
    } = this.props;

    return (
      <RowWrapper
        variant={variant}
        className={classnames({
          row__wrapper: true,
          "row__wrapper--expanded": isOpen,
          "row__wrapper--collapsed": !isOpen
        })}
        {...rest}
      >
        <RowLabel isOpen={isOpen} index={index} variant={labelVariant}>
          {label}
        </RowLabel>

        {/* this class name is for automation purposes please do not remove or modify the name */}
        <ListContainer
          className="list__container"
          rowVariant={variant}
          rowLabel={label}
        >
          <RowToggler
            isOpen={isOpen}
            index={index}
            onExpandItem={onExpandItem}
            onCollapseItem={onCollapseItem}
            className="row__toggler"
          />

          <LinkWrapper
            role="link"
            aria-label={buttonText}
            onClick={onClick}
            href={url}
            // this class name is for automation purposes please do not remove or modify the name
            className="link__wrapper"
          >
            {/* this class name is for automation purposes please do not remove or modify the name */}
            <DateWrapper className="date__wrapper">
              <Text
                className="date--text"
                allCaps
                responsiveSize={staticProps.defaultResponsiveSize}
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

            {/* this class name is for automation purposes please do not remove or modify the name */}
            <ContentRow className="row__content">
              {/* this class name is for automation purposes please do not remove or modify the name */}
              <MobileOnlyColumn className="column__mobile-only">
                <MultilineText
                  responsiveSize={staticProps.defaultResponsiveSize}
                  className="list-row__title"
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
                key="primary-collapsed"
                medium={6}
                className={classnames({
                  column__content: true,
                  "list-row__title": true,
                  "column__content--expanded": isOpen,
                  "column__content--collapsed": !isOpen
                })}
              >
                <MultilineText
                  responsiveSize={staticProps.defaultResponsiveSize}
                >
                  {title}
                </MultilineText>
              </ContentColumn>

              {/* this class name is for automation purposes please do not remove or modify the name */}
              <ContentColumn
                key="secondary-collapsed"
                medium={6}
                className={classnames({
                  column__content: true,
                  "list-row__title": true,
                  "column__content--expanded": isOpen,
                  "column__content--collapsed": !isOpen
                })}
              >
                <MultilineText
                  responsiveSize={staticProps.defaultResponsiveSize}
                  className={classnames({
                    subtitle: true,
                    "list-row--subtitle": true,
                    // this class name is for automation purposes please do not remove or modify the name
                    "subtitle--collapsed": true
                  })}
                >
                  {subTitle}
                </MultilineText>
              </ContentColumn>

              <ContentColumn
                key="primary-expanded"
                className={classnames({
                  column__content: true,
                  "list-row__title": true,
                  "column__content--fixed": true,
                  "column__content--expanded": !isOpen,
                  "column__content--collapsed": isOpen
                })}
              >
                <MultilineText
                  responsiveSize={staticProps.defaultResponsiveSize}
                  className="subtitle"
                >
                  {isOpen && onExpandShow === "title" ? title : subTitle}
                </MultilineText>
              </ContentColumn>
            </ContentRow>

            <DesktopContainer>
              <ListRowButton
                noTransform
                aria-label={buttonText}
                role="button"
                width={ROW_BUTTON_WIDTH}
                variant={buttonVariant}
                size="regular"
                as="span"
                rowVariant={variant}
              >
                {buttonText}
              </ListRowButton>
              {variant === "withLink" && (
                <AbsoluteContent>
                  <SingleLineText size="uno" variant="dark" secondary>
                    {linkSubTitle}
                  </SingleLineText>
                </AbsoluteContent>
              )}
            </DesktopContainer>
          </LinkWrapper>

          <MobileContainer>
            <IconButton
              className="button--more-info icon-button--last"
              data-index={index}
              aria-label="More Info"
              onClick={onOverflowClick}
            >
              <OverflowIcon size={22} color={themes.global.onyx.light} />
            </IconButton>
          </MobileContainer>
        </ListContainer>

        <RowOptionsLink
          variant={variant}
          isOpen={isOpen}
          url={linkUrl}
          index={index}
          onClick={onOverflowClick}
        >
          {linkTitle}
        </RowOptionsLink>

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
  }
}

ListRowContent.defaultProps = {
  isOpen: false,
  onExpandShow: "subTitle",
  children: null,
  onExpandItem: RowToggler.defaultProps.onExpandItem,
  onCollapseItem: RowToggler.defaultProps.onCollapseItem
};

ListRowContent.propTypes = {
  rowItem: PropTypes.shape(rowDataShape).isRequired,
  isOpen: PropTypes.bool,
  index: PropTypes.number.isRequired,
  onOverflowClick: PropTypes.func.isRequired,
  onExpandShow: PropTypes.oneOf(["title", "subTitle"]),
  children: PropTypes.node,
  onExpandItem: RowToggler.propTypes.onExpandItem,
  onCollapseItem: RowToggler.propTypes.onCollapseItem,
  resetOpenIndex: PropTypes.func.isRequired
};

export default ListRowContent;
