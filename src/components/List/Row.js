import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import spacing from "../../theme/spacing";
import colors from "../../theme/colors";

import { StyledButton } from "../Button";
import { Row, Column } from "../Grid";
import { PrimaryText, SecondaryText, BoldText, Link } from "../Text";
import { OverflowIcon } from "../Icons";
import { mediumAndUp, largeAndUp } from "../../theme/mediaQueries";

const variants = ["standard", "withLink"];

const RowContainer = styled.div`
  background-color: ${colors.white.base};

  &:not(:last-of-type) {
    border-bottom: 1px solid ${colors.lightGray};
  }
`;

const ListRow = styled(Row)`
  align-items: center;
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
  `};
  &:hover {
    background: ${colors.azure.muted};
  }
`;

const ClickableButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: block;
  text-align: start;
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

const ListItem = ({
  title,
  subTitle,
  dateTitle,
  dateSubTitle,
  buttonText,
  href,
  variant,
  linkTitle,
  linkUrl,
  linkSubTitle,
  coloredDate,
  onClick,
  onOverflowClick
}) => (
  <RowContainer variant={variant} onExpand={onClick}>
    <ListRow>
      <Column small={10.6} medium={9.8} large={10.2} xLarge={10.8}>
        <LinkWrapper onClick={onClick} href={href}>
          <Row>
            <Column small={3.8} medium={2.1} large={1.5} xLarge={1}>
              <BoldText
                style={{ textTransform: "uppercase" }}
                color={coloredDate ? colors.heliotrope.base : null}
              >
                {dateTitle}
              </BoldText>
              <SecondaryText>{dateSubTitle}</SecondaryText>
            </Column>

            <MobileOnlyColumn small={7}>
              <Column medium={4} large={3}>
                <PrimaryText>{title}</PrimaryText>
              </Column>
              <Column>
                <SecondaryText>{subTitle}</SecondaryText>
              </Column>
            </MobileOnlyColumn>

            <DesktopOnlyColumn medium={8} large={4.5} xLarge={4.9}>
              <PrimaryText>{title}</PrimaryText>
            </DesktopOnlyColumn>
            <SubTitleColumn large={4.5} xLarge={4.9}>
              <PrimaryText>{subTitle}</PrimaryText>
            </SubTitleColumn>
          </Row>
        </LinkWrapper>
      </Column>

      <DesktopOnlyColumn medium={2} large={1.6} xLarge={1.1}>
        <ListRowButton
          aria-label={buttonText}
          role="button"
          width="102px"
          variant="standard"
        >
          {buttonText}
        </ListRowButton>
      </DesktopOnlyColumn>

      <MobileOnlyColumn small={1.4}>
        <ClickableButton
          onClick={onOverflowClick}
          aria-label="More Info"
          role="button"
        >
          <OverflowIcon
            size={22}
            // style={{ paddingTop: "5px", paddingBottom: "5px" }}
            color={colors.onyx.light}
            onClick={onOverflowClick}
          />
        </ClickableButton>
      </MobileOnlyColumn>
    </ListRow>
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
  </RowContainer>
);

ListItem.defaultProps = {
  linkTitle: "",
  linkUrl: "",
  linkSubTitle: "",
  coloredDate: false
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  dateTitle: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  dateSubTitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(variants).isRequired,
  linkTitle: PropTypes.string,
  linkUrl: PropTypes.string,
  linkSubTitle: PropTypes.string,
  coloredDate: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onOverflowClick: PropTypes.func.isRequired
};

export default ListItem;
