import styled from "styled-components";
import spacing from "../../theme/spacing";
import colors from "../../theme/colors";
import { StyledButton } from "../Button";
import { Row, Column } from "../Grid";
import { PrimaryText, SecondaryText } from "../Text";
import { largeAndUp } from "../../theme/mediaQueries";
import IconButton from "../Button/IconButton";
import timing from "../../theme/animationTimings";
import { bezierEasy, bezierExit } from "../../theme/easing";

export const RowWrapperContainer = styled.div`
  ${largeAndUp`
    padding-bottom: ${props => (props.isOpen ? "12px" : 0)};
  `};
  &:not(:last-of-type) > div {
    border-bottom: 0.5px solid ${colors.lightGray};
  }
`;

export const RowWrapper = styled.div`
  background-color: ${colors.white.base};
  ${largeAndUp`
    border-radius: 4px;
    box-shadow: ${props =>
      props.isOpen
        ? "0 4px 8px 0 rgba(0, 0, 0, 0.01), 0 4px 10px 0 rgba(0, 0, 0, 0.19)"
        : 0};
    transition: box-shadow ${timing.enterSpecial}ms ${bezierEasy};
  `};
`;

export const ListContainer = styled.div`
  align-items: center;
  display: flex;
  padding-right: ${spacing.cozy};
`;

export const IconWrapper = styled(IconButton).attrs({
  className: "button--expand-or-collapse",
  size: 45
})`
  display: none;
  ${largeAndUp`
    display: block;
    border: 0;
    svg {
      transition: transform ${timing.enter}ms ${bezierEasy};
    }
  `};
`;

export const LinkWrapper = styled.a`
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
  ${largeAndUp`
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

export const DateWrapper = styled.div`
  min-width: 101px;
  max-width: 116px;
  padding-left: ${spacing.cozy};
`;

export const TitleColumn = styled(Column)`
  display: none;
  ${largeAndUp`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 0 0 100%;
    max-width: 50%;
    opacity: 1;
    transition: opacity ${timing.exit}ms ${bezierExit} ${timing.enter}ms;    
    &.list-row__title--fade-out {
       opacity: 0;
       transition: opacity ${timing.enter}ms ${bezierEasy};
    };
  `};
`;

export const SubTitleColumn = styled(TitleColumn)`
  &.list-row__subtitle--fade-out {
    opacity: 0;
    transition: opacity ${timing.enter}ms ${bezierEasy};
  }
`;

export const MobileOnlyColumn = styled(Column)`
  ${largeAndUp`
    display: none;
  `};
`;

export const ListRowButton = StyledButton.withComponent("span").extend`
  min-width: 100px;
  max-width: 102px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 0
      ${props => (props.rowVariant === "withLink" ? spacing.cozy : "18px")}
      0;
`;

export const LinkRow = styled(Row)`
  padding-left: ${spacing.cozy};
  ${largeAndUp`
    padding-left: 12px;
  `};
`;

const expandAnimation = `max-height ${timing.exit}ms ${bezierEasy},
  opacity ${timing.exit}ms ${bezierEasy}`;
const collapseAnimation = `max-height ${timing.exit}ms ${bezierExit},
  opacity ${timing.exit}ms ${bezierExit}`;

export const OverflowDesktopContainer = styled(Column)`
  max-height: 0;
  overflow: hidden;
  ${largeAndUp`
    max-height: none;
    height: auto;
    opacity: 1;
    border-top: 0.5px solid ${colors.lightGray};
    &.list-row--open {
      height: auto; 
      transition: ${expandAnimation};
      max-height: ${props => `${props.height}px`};
      opacity: 1;
    }
    &.list-row--close {
      transition: ${collapseAnimation};
      max-height: 0;
      opacity: 0.2;
    }    
  `};
`;

export const DesktopContainer = styled.div`
  display: none;
  padding-left: ${spacing.moderate};
  padding-right: ${spacing.cozy};
  ${largeAndUp`
    display: flex;
    justify-content: center;
    align-items: center;
  `};
`;

export const MobileContainer = styled.div`
  ${largeAndUp`
    display: none;
  `};
`;

export const MultilinePrimaryText = styled(PrimaryText)`
  /* stylelint-disable */
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  /* stylelint-enable */
`;

export const SingleLineSecondaryText = styled(SecondaryText)`
  /* stylelint-disable */
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  /* stylelint-enable */
`;
