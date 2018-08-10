import styled from "styled-components";
import { mediumAndUp, largeAndUp, xLargeAndUp } from "../../theme/mediaQueries";
import spacing from "../../theme/spacing";
import constants from "../../theme/constants";

const getSize = val => (val / constants.MAX_COLUMNS) * 100;

const getFlexProps = val =>
  val === 12
    ? `
      flex: 0 0 100%;
    `
    : `
      flex: 0 0 ${getSize(val)}%;
    `;

const Column = styled.div`
  box-sizing: border-box;
  padding-right: ${spacing.gutters.small / 2}px;
  padding-left: ${spacing.gutters.small / 2}px;
  max-width: ${props => getSize(props.small)}%;
  ${props => getFlexProps(props.small)}

  ${mediumAndUp`
    max-width: ${props => getSize(props.medium || props.small)}%;
    padding-right: ${spacing.gutters.mediumAndUp / 2}px;
    padding-left: ${spacing.gutters.mediumAndUp / 2}px;
    ${props => getFlexProps(props.medium || props.small)}
  `}

  ${largeAndUp`
    max-width: ${props => getSize(props.large || props.medium || props.small)}%;
    ${props => getFlexProps(props.large || props.medium || props.small)}
  `}

  ${xLargeAndUp`
     max-width: ${props =>
       getSize(props.xLarge || props.large || props.medium || props.small)}%;
    ${props =>
      getFlexProps(props.xLarge || props.large || props.medium || props.small)}
  `}
`;

const PropTypePositiveInt = (props, propName, componentName) => {
  if (props[propName] >= 0) return null;

  return new Error(
    `Invalid value in ${propName} supplied to ${componentName} should be a positive integer`
  );
};

Column.propTypes = {
  small: PropTypePositiveInt,
  medium: PropTypePositiveInt,
  large: PropTypePositiveInt,
  xLarge: PropTypePositiveInt
};

Column.defaultProps = {
  small: 12,
  medium: null,
  large: null,
  xLarge: null
};

Column.displayName = "Column";

export default Column;
