import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../theme/colors";
import typography from "../../theme/typography";
import { mediumAndUp, largeAndUp } from "../../theme/mediaQueries";
import spacing from "../../theme/spacing";

const Span = styled.span`
  font-weight: ${typography.weight.light};
`;

const Strong = styled(Span)`
  font-weight: ${typography.weight.extraBold};
`;

const Margins = styled.span`
  ${({ monospace }) => (monospace ? `font-feature-settings: "tnum"` : "")};
  margin-top: 0;
  margin-bottom: 0;
  padding-bottom: ${spacing.cozy};
  line-height: ${({ lineHeight }) => typography.lineHeight[lineHeight]};
  color: ${p => (p.color ? p.color : colors.white.base)};
  font-weight: ${({ weight }) => typography.weight[weight]};
  font-size: ${({ size }) => typography.size[size.small]};
  ${mediumAndUp`
    font-size: ${({ size }) => typography.size[size.medium]};
  `};

  ${largeAndUp`
    font-size: ${({ size }) => typography.size[size.large]};
  `};
`;

const levels = ["h1", "h2", "h3", "h4", "h5"];

const Heading = ({ level, size, responsiveSize, children, ...props }) => {
  const tag = levels[level - 1];
  return (
    <Margins
      {...props}
      as={tag}
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
    </Margins>
  );
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5]),
  size: PropTypes.oneOf(Object.keys(typography.size)),
  responsiveSize: PropTypes.shape({
    small: PropTypes.oneOf(Object.keys(typography.size)),
    medium: PropTypes.oneOf(Object.keys(typography.size)),
    large: PropTypes.oneOf(Object.keys(typography.size))
  }),
  weight: PropTypes.oneOf(["light", "regular", "extraBold"]),
  lineHeight: PropTypes.oneOf(Object.keys(typography.lineHeight)),
  monospace: PropTypes.bool,
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
  lineHeight: "header",
  weight: "regular",
  monospace: false,
  children: null
};

Heading.Span = Span; // NOTE: deprecated
Heading.Strong = Strong; // NOTE: deprecated

Heading.displayName = "Heading";

export default Heading;
