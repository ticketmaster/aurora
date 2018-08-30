import React from "react";
import PropTypes from "prop-types";

import StyledLinkBase from "./Base.styles";
import getRelByTarget from "../../utils/link";

const StyledButtonBase = StyledLinkBase.withComponent("button").extend`
  min-width: 100px;
`;

const LinkBase = props => {
  const { size, children, href, target, rel, role, ...rest } = props;

  if (href) {
    return (
      <StyledLinkBase
        {...rest}
        target={target}
        size={size}
        rel={getRelByTarget(target, rel)}
        role={role || "link"}
      >
        {children}
      </StyledLinkBase>
    );
  } else if (rest.onClick) {
    return (
      <StyledButtonBase {...rest} size={size} role={role || "button"}>
        {children}
      </StyledButtonBase>
    );
  }

  return <span role="none">{children}</span>;
};

LinkBase.propTypes = {
  size: PropTypes.oneOf(["uno", "hecto", "kilo"]),
  children: PropTypes.node,
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  role: PropTypes.string
};

LinkBase.defaultProps = {
  size: "hecto",
  children: null,
  href: null,
  target: "_self",
  rel: null,
  role: null
};

export default LinkBase;
