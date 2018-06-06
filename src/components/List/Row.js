import React from "react";
import styled from "styled-components";

import spacing from "../../theme/spacing";
import colors from "../../theme/colors";

import { StyledButton } from "../Button";
import { Row, Column } from "../Grid";
import { PrimaryText, SecondaryText, BoldText, Link } from "../Text";
import OverflowIcon from "../Icons/Overflow";
import ChevronIcon from "../Icons/Chevron";
import { mediumAndUp, largeAndUp } from "../../theme/mediaQueries";
import ExpandedRow from "./ExpandedRow";
import { rowDataShape } from "./shape";
import BottomSheetContainer from "../BottomSheet/Container";
import ExpandedRowContext from "./ExpandedRowContext";
import BottomSheetContext from "./BottomSheetContext";

const ExpandedRowConsumer = ExpandedRowContext.Consumer;
const BottomSheetConsumer = BottomSheetContext.Consumer;

const RowWrapper = styled.div`
  background-color: ${colors.white.base};

  &:not(:last-of-type) {
    border-bottom: 1px solid ${colors.lightGray};
  }
`;

const ListRowContainer = styled(Row)`
  align-items: stretch;
  display: flex;
`;

const DesktopOnlyColumn = styled(Column)`
  display: none;
  ${mediumAndUp`
    display: flex;
    justify-content: center;
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
  ${largeAndUp`
  display: flex;
    justify-content: center;
    align-items: center;
  `};
`;

const LinkWrapper = styled.a`
  text-decoration: none;
  display: block;
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

const UnStyledButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const ClickableButton = UnStyledButton.extend.attrs({
  className: "moreInfo"
})`
  padding: 14px 0
    ${props => (props.variant === "withLink" ? spacing.cozy : "14px")} 0;
`;

const ListRowButton = StyledButton.withComponent("span").extend`
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

const ExpandedRowWrapper = styled(Column)`
  ${mediumAndUp`
  border-top: 1px solid ${colors.lightGray};
  `};
`;

const IconWrapper = UnStyledButton.extend.attrs({
  className: "expandOrCollapse"
})`
  display: none;
  ${mediumAndUp`
    display: flex;
    padding-left: 30px;
  `};
`;

const OverflowColumn = styled(Column)`
  display: flex;
  align-items: stretch;
  ${mediumAndUp`
      display: none;
  `};
`;

const ListRow = ({
  rowId,
  title,
  subTitle,
  dateTitle,
  dateSubTitle,
  buttonText,
  variant,
  linkTitle,
  linkUrl,
  linkSubTitle,
  coloredDate,
  onClick,
  onOverflowClick,
  expandedSections,
  onExpandOrCollapseClick
}) => (
  <ExpandedRowConsumer>
    {expandedRowId => (
      <RowWrapper variant={variant} onExpand={onClick}>
        <ListRowContainer>
          <IconWrapper
            role="button"
            aria-label={expandedRowId === rowId ? "Collapse Row" : "Expand Row"}
            aria-expanded={expandedRowId === rowId}
            onClick={() => onExpandOrCollapseClick(rowId)}
          >
            <ChevronIcon
              size={15}
              color="#000"
              direction={expandedRowId === rowId ? "up" : "down"}
            />
          </IconWrapper>
          <Column small={10.6} medium={9} large={9.8} xLarge={10.4}>
            <LinkWrapper
              role="link"
              aria-label="See Tickets"
              onClick={onClick}
              href="/"
            >
              <Row>
                <Column small={3.8} medium={2.3} large={1.6} xLarge={1.2}>
                  <BoldText
                    style={{ textTransform: "uppercase" }}
                    color={coloredDate ? colors.heliotrope.base : null}
                  >
                    {dateTitle}
                  </BoldText>
                  <SecondaryText>{dateSubTitle}</SecondaryText>
                </Column>

                <MobileOnlyColumn small={6.9}>
                  <Column medium={4} large={3}>
                    <PrimaryText>{title}</PrimaryText>
                  </Column>
                  <Column>
                    <SecondaryText>{subTitle}</SecondaryText>
                  </Column>
                </MobileOnlyColumn>

                <DesktopOnlyColumn medium={9.7} large={5.2} xLarge={5.4}>
                  <PrimaryText>{title}</PrimaryText>
                </DesktopOnlyColumn>
                <SubTitleColumn large={5.2} xLarge={5.4}>
                  <PrimaryText>{subTitle}</PrimaryText>
                </SubTitleColumn>
              </Row>
            </LinkWrapper>
          </Column>

          <DesktopOnlyColumn medium={2} large={1.5} xLarge={1.1}>
            <ListRowButton
              aria-label={buttonText}
              role="button"
              width="102px"
              variant="standard"
            >
              {buttonText}
            </ListRowButton>
          </DesktopOnlyColumn>

          <OverflowColumn small={1.4}>
            <ClickableButton
              onClick={() => onOverflowClick(rowId)}
              aria-label="More Info"
              role="button"
            >
              <OverflowIcon size={22} color={colors.onyx.light} />
            </ClickableButton>
          </OverflowColumn>
        </ListRowContainer>
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

        {expandedRowId === rowId ? (
          <Row>
            <ExpandedRowWrapper>
              <ExpandedRow
                sections={expandedSections}
                buttonText={buttonText}
              />
            </ExpandedRowWrapper>
          </Row>
        ) : null}

        <BottomSheetConsumer>
          {bottomSheetId =>
            bottomSheetId && bottomSheetId === rowId ? (
              <BottomSheetContainer onClose={() => onOverflowClick(null)}>
                <ExpandedRow
                  sections={expandedSections}
                  buttonText="See Tickets"
                />
              </BottomSheetContainer>
            ) : null
          }
        </BottomSheetConsumer>
      </RowWrapper>
    )}
  </ExpandedRowConsumer>
);

ListRow.defaultProps = {
  href: "",
  linkTitle: "",
  linkUrl: "",
  linkSubTitle: "",
  coloredDate: false
};

ListRow.propTypes = rowDataShape;

export default ListRow;
