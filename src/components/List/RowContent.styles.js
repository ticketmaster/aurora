import styled, { css } from "styled-components";
import spacing from "../../theme/spacing";
import colors from "../../theme/colors";
import { StyledButton } from "../Button";
import { Row, Column } from "../Grid";
import { PrimaryText, SecondaryText } from "../Text";
import { largeAndUp } from "../../theme/mediaQueries";
import IconButton from "../Button/IconButton";
import timing from "../../theme/animationTimings";

const bezierEasy = "cubic-bezier(0.455, 0.03, 0.515, 0.955)";
const bezierExit = "cubic-bezier(0.55, 0.085, 0.68, 0.53)";

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
    transition: box-shadow 0.5s ease-in-out;
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
    transform: ${props => (props.isOpen ? "rotate(-180deg)" : "none")};
    transition: transform ${timing.caretRotate}ms linear;
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

const opacityColumnAnimationFadeOut = `opacity ${
  timing.contentFadeOut
}ms ${bezierEasy}`;
const opacityColumnAnimationFadeIn = `opacity ${
  timing.contentFadeIn
}ms ${bezierExit} ${timing.contentFadeInDelay}ms`;
const opacityColumnAnimation = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 0 0 100%;
  max-width: 50%;
  opacity: ${props => (props.isOpen ? 0 : 1)};
  transition: ${props =>
    props.isOpen
      ? opacityColumnAnimationFadeOut
      : opacityColumnAnimationFadeIn};
`;

export const TitleColumn = styled(Column)`
  display: none;
  ${largeAndUp`
    display: ${props => (props.hideOnExpand ? "none" : "flex")};
    justify-content: ${props => (props.isOpen ? "center" : "flex-start")};
    
    transition: all 0s ease 0s; 
    ${props => props.isAnimated && opacityColumnAnimation}    
  `};
`;

export const MobileOnlyColumn = styled(Column)`
  ${largeAndUp`
    display: none;
  `};
`;

export const SubTitleColumn = styled(Column)`
  display: none;
  ${largeAndUp`
    display: ${props => (props.hideOnExpand ? "none" : "flex")};
    justify-content: ${props => (props.isOpen ? "center" : "flex-start")};
    transition: all 0s ease 0s; 
    ${props => props.isAnimated && opacityColumnAnimation}  
  `};
`;

export const ListRowButton = StyledButton.withComponent("span").extend`
  max-width: 102px;
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

const maxRowHeight = 600;
const expandAnimation = `max-height ${
  timing.collapse
}ms ${bezierEasy}, opacity ${timing.collapse}ms ${bezierEasy}`;
const collapseAnimation = `max-height ${
  timing.collapse
}ms ${bezierExit}, opacity ${timing.collapse / 2}ms ${bezierExit}`;
const mounted = css`
  transition: ${props =>
    props.isOpen ? `${expandAnimation}` : `${collapseAnimation}`};
  max-height: ${props =>
    props.isOpen ? `${props.height}px` || `${maxRowHeight}px` : "0"};
  opacity: ${props => (props.isOpen ? 1 : 0.2)};
`;
const notMounted = css`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  transition: all 0s ease 0s;
`;

export const OverflowDesktopContainer = styled(Column)`
  max-height: 0;
  overflow: hidden;
  ${largeAndUp`
    max-height: none;
    height: auto;
    border-top: 0.5px solid ${colors.lightGray};
    
    ${props => (props.isMounted ? mounted : notMounted)}    
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
