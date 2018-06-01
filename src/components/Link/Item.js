import React, { Children } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import getRelByTarget from "../../utils/link";

const StyledLink = styled.a.attrs({ className: "link" })`
  display: inline-block;
  text-decoration: none;
  outline: 0;
  border: 0;

  .links__list & {
    width: 100%;
    text-align: left;
  }

  &:focus,
  &:hover {
    outline: 0;
  }
`;

const StyledButton = StyledLink.withComponent("button");

export default class LinkItem extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    href: PropTypes.string,
    target: PropTypes.string,
    rel: PropTypes.string,
    role: PropTypes.string
  };

  static defaultProps = {
    children: null,
    href: null,
    target: "_self",
    rel: null,
    role: null
  };

  state = { open: false };

  open = () => this.hasOther && this.setState(() => ({ open: true }));

  close = () => this.hasOther && this.setState(() => ({ open: false }));

  toggle = () =>
    this.hasOther && this.setState(({ open }) => ({ open: !open }));

  render() {
    const { children, rel, target, role, ...props } = this.props;
    const [label, ...other] = Children.toArray(children);
    this.hasOther = other && other.length > 0;
    const aria = this.hasOther
      ? { "aria-haspopup": this.hasOther, "aria-expanded": this.state.open }
      : {};
    const content = props.href ? (
      <StyledLink
        {...props}
        target={target}
        rel={getRelByTarget(target, rel)}
        role={role || "link"}
        {...aria}
      >
        {label}
      </StyledLink>
    ) : (
      <StyledButton {...props} role={role || "button"} {...aria}>
        {label}
      </StyledButton>
    );
    return (
      <span
        className={
          this.state.open
            ? "list-container list-container--open"
            : "list-container list-container--closed"
        }
        onTouchStart={this.toggle}
        onMouseEnter={this.open}
        onMouseLeave={this.close}
        role="none"
      >
        {content}
        {other}
      </span>
    );
  }
}
