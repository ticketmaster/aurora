import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import spacing from "../../theme/spacing";
import colors from "../../theme/colors";

import { StyledButton } from "../Button/Base.styles";
import { Row, Column } from "../Grid";
import { PrimaryText, SecondaryText, BoldText, Link } from "../Text";
import OverflowIcon from "../Icons/Overflow";
import ChevronIcon from "../Icons/Chevron";
import { mediumAndUp } from "../../theme/mediaQueries";
import { rowDataShape } from "./shape";

import IconButton from "../Button/IconButton";

const RowWrapper = styled.div`
  background-color: ${colors.white.base};

  ${mediumAndUp`
    margin-bottom: ${props => (props.isOpen ? "12px" : 0)};
    border-radius: 4px;
    box-shadow: ${props =>
      props.isOpen
        ? "0 4px 8px 0 rgba(0, 0, 0, 0.01), 0 4px 10px 0 rgba(0, 0, 0, 0.19)"
        : 0};
    transition: box-shadow 0.5s ease-in-out;
  `};

  &:not(:last-of-type) {
    border-bottom: 0.5px solid ${colors.lightGray};
  }
`;

const ListContainer = styled.div`
  align-items: center;
  display: flex;
  padding-right: ${spacing.cozy};
`;

const IconWrapper = styled(IconButton).attrs({
  className: "button--expand-or-collapse",
  size: 45
})`
  display: none;
  ${mediumAndUp`
    display: block;
  `};
`;

const LinkWrapper = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: horizontal;
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
    
    &:hover .text--primary:after {
      background-color: ${colors.azure.muted};
    }

    &:hover .text--secondary:after {
      background-color: ${colors.azure.muted};
    }


    &:hover .text--primary:before {
      content: ""
    }

    &:hover .text--secondary:before {
      content: ""
    }

  `};
`;

const DateWrapper = styled.div`
  min-width: 101px;
  max-width: 116px;
  padding-left: ${spacing.cozy};
`;

const TitleColumn = styled(Column)`
  display: none;
  ${mediumAndUp`
    display: ${props => (props.hideOnExpand ? "none" : "flex")};
    justify-content: ${props => (props.isOpen ? "center" : "flex-start")};
    align-items: center;
  `};
`;

const MobileOnlyColumn = styled(Column)`
  ${mediumAndUp`
    display: none;
  `};
`;

const SubTitleColumn = styled(Column)`
  display: none;
  ${mediumAndUp`
    display: ${props => (props.hideOnExpand ? "none" : "flex")};
    justify-content: ${props => (props.isOpen ? "center" : "flex-start")};
    align-items: center;
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
    transition: max-height 0.5s ease-in-out;
    max-height: ${props => (props.isOpen ? "600px" : "0")};
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
  children
}) => (
  <RowWrapper variant={variant} isOpen={isOpen}>
    <ListContainer>
      <IconWrapper
        role="button"
        aria-label={isOpen ? "Collapse Row" : "Expand Row"}
        aria-expanded={isOpen}
        data-index={index}
        style={isOpen ? { transform: "rotate(-180deg)" } : null}
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
          <BoldText style={{ textTransform: "uppercase" }} color={dateColor}>
            {dateTitle}
          </BoldText>
          <SingleLineSecondaryText>{dateSubTitle}</SingleLineSecondaryText>
        </DateWrapper>

        <Row style={{ width: "100%" }}>
          <MobileOnlyColumn>
            <MultilinePrimaryText>{title}</MultilinePrimaryText>
            <SingleLineSecondaryText>{subTitle}</SingleLineSecondaryText>
          </MobileOnlyColumn>

          <TitleColumn
            hideOnExpand={isOpen && onExpandShow === "subTitle"}
            isOpen={isOpen}
            medium={isOpen ? 12 : 6}
          >
            <MultilinePrimaryText>{title}</MultilinePrimaryText>
          </TitleColumn>
          <SubTitleColumn
            hideOnExpand={isOpen && onExpandShow === "title"}
            isOpen={isOpen}
            medium={isOpen ? 12 : 6}
          >
            <MultilinePrimaryText>{subTitle}</MultilinePrimaryText>
          </SubTitleColumn>
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

    <OverflowDesktopContainer isOpen={isOpen}>
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
