import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { typography, spacing, themes } from "../../theme";
import {
  getResponsiveSize,
  responsiveSizeMixin
} from "../../utils/responsiveSize";

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
  color: ${p => (p.color ? p.color : themes.global.white.base)};
  font-weight: ${({ weight }) => typography.weight[weight]};
  ${({ size }) => responsiveSizeMixin(size)};
`;

const levels = ["h1", "h2", "h3", "h4", "h5"];

const Heading = ({ level, size, responsiveSize, children, ...props }) => {
  const tag = levels[level - 1];
  return (
    <Margins
      {...props}
      as={tag}
      size={getResponsiveSize({
        size,
        responsiveSize: {
          small: responsiveSize.small || size || "tera",
          medium:
            responsiveSize.medium || responsiveSize.small || size || "zetta",
          large:
            responsiveSize.large ||
            responsiveSize.medium ||
            responsiveSize.small ||
            size ||
            "bronto"
        }
      })}
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
  responsiveSize: {},
  lineHeight: "header",
  weight: "regular",
  monospace: false,
  children: null
};

Heading.Span = Span; // NOTE: deprecated
Heading.Strong = Strong; // NOTE: deprecated

Heading.displayName = "Heading";

export default Heading;
