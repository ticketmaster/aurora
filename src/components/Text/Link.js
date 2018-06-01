import React from "react";
import PropTypes from "prop-types";

import { colors } from "../../theme";
import StyledText from "./StyledText";

const LinkTitle = StyledText.withComponent(`a`).extend`
  color: ${({ color }) => color || colors.azure.base};
  text-decoration: none;
`;

const Link = ({ href, children, ...props }) => {
  const { target } = props;
  const rel = (target === "_blank" && "noopener") || undefined;

  return (
    <LinkTitle href={href} rel={rel} {...props}>
      {children}
    </LinkTitle>
  );
};

Link.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  color: PropTypes.string
};

Link.defaultProps = {
  target: "",
  color: ""
};

export default Link;
