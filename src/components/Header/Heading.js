import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../theme/colors";
import typography from "../../theme/typography";
import { mediumAndUp, largeAndUp } from "../../theme/mediaQueries";
import spacing from "../../theme/spacing";

const Light = styled.span`
  font-weight: ${typography.weight.light};
`;

const ExtraBold = Light.extend`
  font-weight: ${typography.weight.extraBold};
`;

const margins = styled.span`
  margin-top: 0;
  margin-bottom: 0;
  padding-bottom: ${spacing.cozy};
  line-height: ${({ lineHeight }) => typography.lineHeight[lineHeight]};
  color: ${p => (p.color ? p.color : colors.white.base)};
  font-weight: ${typography.weight.regular};
  font-size: ${({ size }) => typography.size[size.small]};

  ${mediumAndUp`
    font-size: ${({ size }) => typography.size[size.medium]};
  `};

  ${largeAndUp`
    font-size: ${({ size }) => typography.size[size.large]};
  `};
`;

const levels = [
  margins.withComponent("h1"),
  margins.withComponent("h2"),
  margins.withComponent("h3"),
  margins.withComponent("h4"),
  margins.withComponent("h5")
];

const Heading = ({
  level,
  size,
  responsiveSize,
  lineHeight,
  children,
  ...props
}) => {
  const H = levels[level - 1];
  return (
    <H
      {...props}
      size={{
        small: responsiveSize.small || size || "tera",
        medium:
          responsiveSize.medium || responsiveSize.small || size || "zetta",
        large:
          responsiveSize.large ||
          responsiveSize.medium ||
          responsiveSize.small ||
          size ||
          "bronto"
      }}
    >
      {children}
    </H>
  );
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5]),
  size: PropTypes.oneOf([Object.keys(typography.size)]),
  responsiveSize: PropTypes.shape({
    small: PropTypes.oneOf([Object.keys(typography.size)]),
    medium: PropTypes.oneOf([Object.keys(typography.size)]),
    large: PropTypes.oneOf([Object.keys(typography.size)])
  }),
  lineHeight: PropTypes.oneOf([Object.keys(typography.lineHeight)]),
  children: PropTypes.node
};

Heading.defaultProps = {
  level: 2,
  size: null,
  responsiveSize: {
    small: null,
    medium: null,
    large: null
  },
  lineHeight: "body",
  children: null
};

Heading.Span = Light; // NOTE: deprecated
Heading.Light = Light;
Heading.Light.displayName = "Light";
Heading.Strong = ExtraBold; // NOTE: deprecated
Heading.ExtraBold = ExtraBold;
Heading.ExtraBold.displayName = "ExtraBold";

export default Heading;
