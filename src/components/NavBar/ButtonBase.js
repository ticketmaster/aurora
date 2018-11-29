import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import classNames from "classnames";

import colors from "../../theme/colors";
import spacing from "../../theme/spacing";
import typography from "../../theme/typography";
import constants from "../../theme/constants";
import { smallAndUp } from "../../theme/mediaQueries";
import { getRelByTarget } from "../../utils/link";

const BaseButton = styled.button`
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  flex: 0 1 auto;
  background-color: transparent;
  text-decoration: none;
  border: 0;
  height: 60px;
  outline: 0;
  appearance: none;
  padding-right: ${spacing.gutters.small / 2}px;
  padding-left: ${spacing.gutters.small / 2}px;
  color: ${colors.white.base};
  font-size: ${typography.size.kilo};
  font-weight: ${typography.weight.semiBold};
  transition: all 0.3ms ${constants.easing.easeInOutQuad};
  .nav--inverted & {
    color: ${colors.onyx.base};
    font-weight: ${typography.weight.regular};
  }

  &.nav-button--last {
    padding-right: ${spacing.gutters.small}px;
  }

  &.nav-button--first {
    padding-left: ${spacing.gutters.small}px;
  }

  ${smallAndUp`
    padding-right: ${parseInt(spacing.normal, 10) / 2}px;
    padding-left: ${parseInt(spacing.normal, 10) / 2}px;

    &.nav-button--last {
        padding-right: ${spacing.gutters.mediumAndUp}px;
    }

    &.nav-button--first {
        padding-left: ${spacing.gutters.mediumAndUp}px;
    }
  `};
`;

const Button = ({
  children,
  href,
  target,
  rel,
  className,
  isFirst,
  isLast,
  ...props
}) => {
  if (href) {
    return (
      <BaseButton
        {...props}
        className={classNames(
          { "nav-button--first": isFirst, "nav-button--last": isLast },
          className
        )}
        href={href}
        target={target}
        rel={getRelByTarget(target, rel)}
        as="a"
      >
        {children}
      </BaseButton>
    );
  }

  return (
    <BaseButton type="button" {...props} className={className}>
      {children}
    </BaseButton>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
  isFirst: PropTypes.bool,
  isLast: PropTypes.bool,
  className: PropTypes.string
};

Button.defaultProps = {
  children: null,
  href: null,
  isFirst: false,
  isLast: false,
  target: "_self",
  rel: null,
  className: ""
};

export default Button;
