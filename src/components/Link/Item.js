import React, { Children, createRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styled from "styled-components";

import { getRelByTarget } from "../../utils/link";
import { themes } from "../../theme";

const StyledLink = styled.a`
  display: inline-block;
  text-decoration: none;
  outline: 0;
  border: 0;
  position: relative;

  .links__list & {
    width: 100%;
    text-align: left;
  }

  &:focus,
  &:hover {
    outline: 0;
  }

  &.link--has-other.link--open:after {
    content: "";
    display: inline-block;
    border-bottom: 4px solid ${themes.global.primary.base};
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export default class LinkItem extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    rel: PropTypes.string,
    role: PropTypes.string,
    disableHoverEvents: PropTypes.bool
  };

  static defaultProps = {
    children: null,
    className: "",
    href: null,
    target: "_self",
    rel: null,
    role: null,
    disableHoverEvents: false
  };

  state = {
    open: false,
    touchEventsExist: false
  };

  componentDidMount() {
    const { open } = this.state;
    const { disableHoverEvents } = this.props;

    if ("ontouchstart" in document.documentElement) {
      this.setState({ touchEventsExist: true }); // eslint-disable-line
    }

    if (open && disableHoverEvents && !this.hasListener) this.attachListener();
  }

  componentDidUpdate(prevProps, prevState) {
    const { open: prevOpen } = prevState;
    const { open } = this.state;
    const { disableHoverEvents } = this.props;

    if (!prevOpen && open && disableHoverEvents && !this.hasListener) {
      this.attachListener();
    } else if (prevOpen && !open && this.hasListener) {
      this.removeListener();
    }
  }

  componentWillUnmount() {
    if (this.hasListener) this.removeListener();
  }

  hasListener = false;

  ref = createRef();

  open = () => this.hasOther && this.setState(() => ({ open: true }));

  close = () => this.hasOther && this.setState(() => ({ open: false }));

  toggle = () =>
    this.hasOther && this.setState(({ open }) => ({ open: !open }));

  handleOutsideClick = e => {
    if (this.ref && this.ref.current && !this.ref.current.contains(e.target)) {
      this.close();
    }
  };

  attachListener = () => {
    if (typeof window === "object") {
      document.addEventListener("click", this.handleOutsideClick);
      this.hasListener = true;
    }
  };

  removeListener = () => {
    if (typeof window === "object") {
      document.removeEventListener("click", this.handleOutsideClick);
      this.hasListener = false;
    }
  };

  render() {
    const { touchEventsExist } = this.state;
    const {
      children,
      rel,
      target,
      role,
      className,
      disableHoverEvents,
      ...props
    } = this.props;
    const [label, ...other] = Children.toArray(children);
    this.hasOther = other && other.length > 0;
    const aria = this.hasOther
      ? { "aria-haspopup": this.hasOther, "aria-expanded": this.state.open }
      : {};

    const classes = classNames(
      {
        link: true,
        "link--has-other": this.hasOther,
        "link--open": this.state.open
      },
      className
    );

    const content = props.href ? (
      <StyledLink
        {...props}
        target={target}
        rel={getRelByTarget(target, rel)}
        role={role || "link"}
        {...aria}
        className={classes}
      >
        {label}
      </StyledLink>
    ) : (
      <StyledLink
        {...props}
        role={role || "button"}
        {...aria}
        className={classes}
        as="button"
      >
        {label}
      </StyledLink>
    );

    const hoverEvents = disableHoverEvents
      ? {}
      : {
          onMouseEnter: touchEventsExist ? null : this.open,
          onMouseLeave: this.close
        };

    return (
      <span
        {...hoverEvents}
        ref={disableHoverEvents ? this.ref : undefined}
        className={
          this.state.open
            ? "list-container list-container--open"
            : "list-container list-container--closed"
        }
        onClick={this.toggle}
        role="none"
      >
        {content}
        {other}
      </span>
    );
  }
}
