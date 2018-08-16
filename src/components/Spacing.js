import styled from "styled-components";
import PropTypes from "prop-types";
import spacing from "../theme/spacing";
import { mediumAndUp, largeAndUp, smallAndUp } from "../theme/mediaQueries";

const getSpacing = val => spacing[val] || val || 0;

const Spacing = styled.div`
  width: 100%;
  padding-top: ${props => getSpacing(props.top.xSmall)};
  padding-bottom: ${props => getSpacing(props.bottom.xSmall)};

  ${smallAndUp`
    padding-top: ${props => getSpacing(props.top.small || props.top.xSmall)};
    padding-bottom: ${props =>
      getSpacing(props.bottom.small || props.bottom.xSmall)};
  `};

  ${mediumAndUp`
    padding-top: ${props =>
      getSpacing(props.top.medium || props.top.small || props.top.xSmall)};
    padding-bottom: ${props =>
      getSpacing(
        props.bottom.medium || props.bottom.small || props.bottom.xSmall
      )};
  `};

  ${largeAndUp`
    padding-top: ${props =>
      getSpacing(
        props.top.large ||
          props.top.medium ||
          props.top.small ||
          props.top.xSmall
      )};
    padding-bottom: ${props =>
      getSpacing(
        props.bottom.large ||
          props.bottom.medium ||
          props.bottom.small ||
          props.bottom.xSmall
      )}
  `};
`;

const spacingShape = PropTypes.shape({
  xSmall: PropTypes.string,
  small: PropTypes.string,
  medium: PropTypes.string,
  large: PropTypes.string
});

Spacing.propTypes = {
  top: spacingShape,
  bottom: spacingShape
};

Spacing.defaultProps = {
  top: {},
  bottom: {}
};

Spacing.displayName = "Spacing";

export default Spacing;
