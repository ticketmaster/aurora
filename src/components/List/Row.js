import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import spacing from "../../theme/spacing";
import colors from "../../theme/colors";

import { StyledButton } from "../Button/index.styles";
import { Row, Column } from "../Grid";
import { PrimaryText, SecondaryText, BoldText, Link } from "../Text";
import { OverflowIcon } from "../Icons";
import { mediumAndUp, largeAndUp } from "../../theme/mediaQueries";

const variants = ["standard", "withLink"];

const ListContainer = styled.div`
  padding: ${spacing.moderate} 0
    ${props => (props.variant === "withLink" ? spacing.cozy : "12px")} 12px;
  background-color: ${colors.white.base};
  ${mediumAndUp`
    padding: 18px 0
      ${props => (props.variant === "withLink" ? spacing.cozy : "18px")}
      12px;
  `};

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
`;

const ClickableButton = styled.span`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: start;
`;

const ListRowButton = StyledButton.withComponent("span").extend`
  display: flex;
  justify-content: center;
  align-items: center;
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
  onOverflowClick,
  isLast
}) => (
  <ListContainer isLast={isLast} variant={variant} onExpand={onClick}>
    <LinkWrapper onClick={onClick} href={href}>
      <ListRow>
        <Column small={3} medium={1.8} large={1.3} xLarge={1}>
          <BoldText
            style={{ textTransform: "uppercase" }}
            color={coloredDate ? colors.heliotrope.base : null}
          >
            {dateTitle}
          </BoldText>
          <SecondaryText>{dateSubTitle}</SecondaryText>
        </Column>

        <MobileOnlyColumn small={8}>
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

        <MobileOnlyColumn small={1}>
          <ClickableButton onClick={onOverflowClick}>
            <OverflowIcon
              size={22}
              color={colors.onyx.light}
              onClick={onOverflowClick}
            />
          </ClickableButton>
        </MobileOnlyColumn>
      </ListRow>
    </LinkWrapper>
    {variant === "withLink" ? (
      <Row>
        <Column small={9} medium={10} large={10.5} xLarge={10.8}>
          <Link href={linkUrl}>{linkTitle}</Link>
        </Column>
        <Column small={3} medium={2} large={1.5} xLarge={1.2}>
          <SecondaryText>{linkSubTitle}</SecondaryText>
        </Column>
      </Row>
    ) : null}
  </ListContainer>
);

ListItem.defaultProps = {
  linkTitle: "",
  linkUrl: "",
  linkSubTitle: "",
  coloredDate: false,
  isLast: false
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
  onOverflowClick: PropTypes.func.isRequired,
  isLast: PropTypes.bool
};

export default ListItem;
