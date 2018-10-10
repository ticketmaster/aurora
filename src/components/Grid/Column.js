import styled from "styled-components";
import { mediumAndUp, largeAndUp, xLargeAndUp } from "../../theme/mediaQueries";
import spacing from "../../theme/spacing";
import constants from "../../theme/constants";

// returns first non-null value
const getColumnValue = (...args) => args.filter(el => el !== null)[0];

const getSize = val => (val / constants.MAX_COLUMNS) * 100;

const getFlexProps = val =>
  val === 12
    ? `
      flex: 0 0 100%;
    `
    : `
      flex: 0 0 ${getSize(val)}%;
    `;

const getDisplayProp = val => (val === 0 ? "none" : "block");

// returns styles based on Column value
const getColumnStylesMixin = columnValue => `
  max-width: ${getSize(columnValue)}%;
  display: ${getDisplayProp(columnValue)};
  ${getFlexProps(columnValue)}
`;

const Column = styled.div`
  box-sizing: border-box;
  padding-right: ${spacing.gutters.small / 2}px;
  padding-left: ${spacing.gutters.small / 2}px;
  max-width: ${props => getSize(props.small)}%;
  ${props => getFlexProps(props.small)}

  ${mediumAndUp`
    padding-right: ${spacing.gutters.mediumAndUp / 2}px;
    padding-left: ${spacing.gutters.mediumAndUp / 2}px;
    ${({ medium, small }) =>
      getColumnStylesMixin(getColumnValue(medium, small))}
  `}

  ${largeAndUp`
    ${({ large, medium, small }) =>
      getColumnStylesMixin(getColumnValue(large, medium, small))}
  `}

  ${xLargeAndUp`
    ${({ xLarge, large, medium, small }) =>
      getColumnStylesMixin(getColumnValue(xLarge, large, medium, small))}
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
