import styled from "styled-components";
import PropTypes from "prop-types";
import spacing from "../theme/spacing";
import { mediumAndUp, largeAndUp, smallAndUp } from "../theme/mediaQueries";

const getSpacing = val => spacing[val] || val || 0;

const Spacing = styled.div`
  width: 100%;
  padding-top: ${props => getSpacing(props.top.small)};
  padding-bottom: ${props => getSpacing(props.bottom.small)};

  ${smallAndUp`
    padding-top: ${props => getSpacing(props.top.medium || props.top.small)};
    padding-bottom: ${props =>
      getSpacing(props.bottom.medium || props.bottom.small)};
  `};

  ${mediumAndUp`
    padding-top: ${props =>
      getSpacing(props.top.large || props.top.medium || props.top.small)};
    padding-bottom: ${props =>
      getSpacing(
        props.bottom.large || props.bottom.medium || props.bottom.small
      )};
  `};

  ${largeAndUp`
    padding-top: ${props =>
      getSpacing(
        props.top.xLarge ||
          props.top.large ||
          props.top.medium ||
          props.top.small
      )};
    padding-bottom: ${props =>
      getSpacing(
        props.bottom.xLarge ||
          props.bottom.large ||
          props.bottom.medium ||
          props.bottom.small
      )}
  `};
`;

const spacingShape = PropTypes.shape({
  small: PropTypes.string,
  medium: PropTypes.string,
  large: PropTypes.string,
  xLarge: PropTypes.string
});

Spacing.propTypes = {
  top: spacingShape,
  bottom: spacingShape
};

Spacing.defaultProps = {
  top: {},
  bottom: {}
};

export default Spacing;
