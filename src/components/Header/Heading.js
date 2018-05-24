import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../theme/colors";
import typography from "../../theme/typography";
import { mediumAndUp, largeAndUp } from "../../theme/mediaQueries";

const Span = styled.span`
  color: ${colors.white.base};
  font-weight: ${typography.weight.light};
  font-size: ${typography.size.tera};

  ${mediumAndUp`
    font-size: ${typography.size.zetta};
  `};

  ${largeAndUp`
    font-size: ${typography.size.bronto};
  `};
`;

const Strong = Span.extend`
  font-weight: ${typography.weight.extraBold};
`;

const margins = styled.span`
  margin-top: 0;
  margin-bottom: 0;
`;

const levels = [
  margins.withComponent("h1"),
  margins.withComponent("h2"),
  margins.withComponent("h3"),
  margins.withComponent("h4"),
  margins.withComponent("h5")
];

const Heading = ({ level, children }) => {
  const H = levels[level - 1];
  return <H>{children}</H>;
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5]),
  children: PropTypes.node
};

Heading.defaultProps = {
  level: 2,
  children: null
};

Heading.Span = Span;
Heading.Strong = Strong;

export default Heading;
