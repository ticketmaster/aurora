import PropTypes from "prop-types";
import styled from "styled-components";
import constants from "../../theme/constants";
import spacing from "../../theme/spacing";

const MAX_COLUMNS = 12;

const getSize = val => val / MAX_COLUMNS * 100;

const getPadding = size => props => {
  if ((props[size] || props.large || props.medium || props.small) === 12)
    return 0;

  return `${spacing.gutters[size] || spacing.gutters.mediumAndUp}px`;
};

const Column = styled.div.attrs({ "data-col": true })`
  float: left;
  padding-right: ${getPadding("small")};
  width: ${props => getSize(props.small)}%;

  @media screen and ${constants.breakpoints.mediumAndUp} {
    width: ${props => getSize(props.medium || props.small)}%;
    padding-right: ${getPadding("medium")};
  }

  @media screen and ${constants.breakpoints.largeAndUp} {
    width: ${props => getSize(props.large || props.medium || props.small)}%;
    padding-right: ${getPadding("large")};
  }

  @media screen and ${constants.breakpoints.xlAndUp} {
    width: ${props =>
      getSize(props.xLarge || props.large || props.medium || props.small)}%;
    padding-right: ${getPadding("xLarge")};
  }
`;

Column.propTypes = {
  small: PropTypes.number,
  medium: PropTypes.number,
  large: PropTypes.number,
  xLarge: PropTypes.number
};

Column.defaultProps = {
  small: 12,
  medium: null,
  large: null,
  xLarge: null
};

export default Column;
