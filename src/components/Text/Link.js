import React from "react";
import PropTypes from "prop-types";

import { colors } from "../../theme";
import StyledText from "./StyledText";
import getRelByTarget from "../../utils/link";

export const LinkTitle = StyledText.withComponent(`a`).extend`
  color: ${({ color }) => color || colors.azure.base};
  text-decoration: none;
`;

const Link = ({ href, children, ...props }) => {
  const { target, rel } = props;
  const validatedRel = getRelByTarget(target, rel);

  return (
    <LinkTitle href={href} rel={validatedRel} {...props}>
      {children}
    </LinkTitle>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  color: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string
};

Link.defaultProps = {
  color: "",
  target: "",
  rel: "_self"
};

export default Link;
