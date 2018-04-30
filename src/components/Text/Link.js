import React from "react";
import PropTypes from "prop-types";

import { colors } from "../../theme";
import StyledText from "./StyledText";

const LinkTitle = StyledText.withComponent(`a`).extend`
  color: ${colors.azure.base};
  text-decoration: none;
`;

const Link = ({ href, children }) => (
  <LinkTitle href={href}>{children}</LinkTitle>
);

Link.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};

export default Link;
