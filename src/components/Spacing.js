import styled from "styled-components";
import PropTypes from "prop-types";
import spacing from "../theme/spacing";
import {
  mediumAndUp,
  largeAndUp,
  smallAndUp,
  xLargeAndUp
} from "../theme/mediaQueries";

const getSpacing = val => spacing[val] || val || 0;

const Spacing = styled.div`
  width: 100%;
  padding-top: ${({ top }) => getSpacing(top.xSmall)};
  padding-bottom: ${({ bottom }) => getSpacing(bottom.xSmall)};

  ${smallAndUp`
    padding-top: ${({ top }) => getSpacing(top.small || top.xSmall)};
    padding-bottom: ${({ bottom }) =>
      getSpacing(bottom.small || bottom.xSmall)};
  `};

  ${mediumAndUp`
    padding-top: ${({ top }) =>
      getSpacing(top.medium || top.small || top.xSmall)};
    padding-bottom: ${({ bottom }) =>
      getSpacing(bottom.medium || bottom.small || bottom.xSmall)};
  `};

  ${largeAndUp`
    padding-top: ${({ top }) =>
      getSpacing(top.large || top.medium || top.small || top.xSmall)};
    padding-bottom: ${({ bottom }) =>
      getSpacing(
        bottom.large || bottom.medium || bottom.small || bottom.xSmall
      )};
  `};

  ${xLargeAndUp`
    padding-top: ${({ top }) =>
      getSpacing(top.large || top.medium || top.small || top.xSmall)};
    padding-bottom: ${({ bottom }) =>
      getSpacing(
        bottom.large || bottom.medium || bottom.small || bottom.xSmall
      )};
  `};
`;

const spacingShape = PropTypes.shape({
  xSmall: PropTypes.string,
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

Spacing.displayName = "Spacing";

export default Spacing;
