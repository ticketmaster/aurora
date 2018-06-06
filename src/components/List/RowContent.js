import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import spacing from "../../theme/spacing";
import colors from "../../theme/colors";

import { StyledButton } from "../Button";
import { Row, Column } from "../Grid";
import { PrimaryText, SecondaryText, BoldText, Link } from "../Text";
import OverflowIcon from "../Icons/Overflow";
import ChevronIcon from "../Icons/Chevron";
import { mediumAndUp, largeAndUp } from "../../theme/mediaQueries";
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
  `};

  &:not(:last-of-type) {
    border-bottom: 0.5px solid ${colors.lightGray};
  }
`;

const ListContainer = styled.div`
  align-items: center;
  display: flex;
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

  margin: 12px 0
    ${props => (props.variant === "withLink" ? spacing.cozy : "12px")} 0;
  ${mediumAndUp`
    margin: 18px 0
      ${props => (props.variant === "withLink" ? spacing.cozy : "18px")}
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
  ${mediumAndUp`
   padding-left: 0;
  }
  `};
`;

const TitleColumn = styled(Column)`
  display: none;
  ${largeAndUp`
    display: ${props => (props.isOpen ? "none" : "flex")};
    justify-content: center;
    align-items: center;
  `};
`;

const MobileOnlyColumn = styled(Column)`
  ${mediumAndUp`
  display: none;
  `};
`;

const TabletOnlyColumn = styled(Column)`
  display: none;

  ${mediumAndUp`
    display: flex;
    justify-content: ${props => (props.isOpen ? "center" : "flex-start")};
    align-items: ${props => (props.isOpen ? "center" : "flex-start")};
  `};

  ${largeAndUp`
    display: none;
  `};
`;

const SubTitleColumn = styled(Column)`
  display: none;
  ${largeAndUp`
    display: flex;
    justify-content: center;
    align-items: center;
  `};
`;

const ListRowButton = StyledButton.withComponent("span").extend`
  max-width: 102px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 0
      ${props => (props.variant === "withLink" ? spacing.cozy : "18px")}
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
  padding-right: ${spacing.normal};

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
  children
}) => (
  <RowWrapper variant={variant} isOpen={isOpen}>
    <ListContainer>
      <IconWrapper
        role="button"
        aria-label={isOpen ? "Collapse Row" : "Expand Row"}
        aria-expanded={isOpen}
        data-index={index}
      >
        <ChevronIcon
          size={15}
          color={colors.blackPearl}
          direction={isOpen ? "up" : "down"}
        />
      </IconWrapper>
      <LinkWrapper
        role="link"
        aria-label={buttonText}
        onClick={onClick}
        href={url}
      >
        <DateWrapper>
          <BoldText style={{ textTransform: "uppercase" }} color={dateColor}>
            {dateTitle}
          </BoldText>
          <SecondaryText>{dateSubTitle}</SecondaryText>
        </DateWrapper>

        <Row style={{ width: "100%" }}>
          <MobileOnlyColumn small={12}>
            <PrimaryText>{title}</PrimaryText>
            <SecondaryText>{subTitle}</SecondaryText>
          </MobileOnlyColumn>

          <TabletOnlyColumn isOpen={isOpen} medium={12}>
            <PrimaryText style={{ display: isOpen ? "none" : "flex" }}>
              {title}
            </PrimaryText>
          </TabletOnlyColumn>
          <TabletOnlyColumn isOpen={isOpen} medium={12}>
            {isOpen ? (
              <PrimaryText>{subTitle}</PrimaryText>
            ) : (
              <SecondaryText>{subTitle}</SecondaryText>
            )}
          </TabletOnlyColumn>

          <TitleColumn isOpen={isOpen} large={6} xLarge={6}>
            <PrimaryText>{title}</PrimaryText>
          </TitleColumn>
          <SubTitleColumn large={isOpen ? 12 : 6} xLarge={isOpen ? 12 : 6}>
            <PrimaryText>{subTitle}</PrimaryText>
          </SubTitleColumn>
        </Row>
      </LinkWrapper>

      <DesktopContainer>
        <ListRowButton
          aria-label={buttonText}
          role="button"
          width="102px"
          variant="standard"
          onClick={onClick}
        >
          {buttonText}
        </ListRowButton>
      </DesktopContainer>

      <MobileContainer>
        <IconButton
          className="button--more-info"
          size={35}
          data-index={index}
          aria-label="More Info"
          role="button"
          onClick={onOverflowClick}
        >
          <OverflowIcon
            size={22}
            data-index={index}
            color={colors.onyx.light}
          />
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
  children: null
};

ListRowContent.propTypes = {
  rowItem: PropTypes.shape(rowDataShape).isRequired,
  isOpen: PropTypes.bool,
  index: PropTypes.number.isRequired,
  onOverflowClick: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default ListRowContent;
