/* global window: true */
/* eslint react/sort-comp: off, react/no-unused-state: off */
import React, { Children } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { Provider } from "./Context";
import { ContentWrapper } from "./Drawer.styles";
import Portal from "../Portal";

export default class DrawerProvider extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    className: PropTypes.string
  };

  static defaultProps = { className: "" };

  contentContainer = React.createRef();

  scrollPosition = 0;

  shouldComponentUpdate(prevProps, prevState) {
    return (
      prevState.isOpen !== this.state.isOpen ||
      prevState.content !== this.state.content ||
      prevProps.children !== this.props.children
    );
  }

  componentDidUpdate() {
    const { isOpen } = this.state;
    /* istanbul ignore next */
    if (
      !isOpen &&
      typeof window !== "undefined" &&
      typeof window.scrollTo === "function"
    ) {
      window.scrollTo(0, this.scrollPosition);
    }
  }

  setContent = content => this.setState(() => ({ content }));

  toggleDrawer = () => {
    this.setState(({ isOpen }) => {
      /* istanbul ignore else */
      if (typeof window !== "undefined" && !isOpen) {
        this.scrollPosition = window.pageYOffset;
      }
      return { isOpen: !isOpen };
    });
  };

  state = {
    isOpen: false,
    toggleDrawer: this.toggleDrawer,
    setContent: this.setContent,
    content: null
  };

  render() {
    const { className, children } = this.props;
    const { isOpen, content } = this.state;
    return (
      <Provider value={this.state}>
        <ContentWrapper
          className={classNames({ "drawer--open": isOpen }, className)}
          innerRef={this.contentContainer}
        >
          {Children.only(children)}
          {content && <Portal>{content}</Portal>}
        </ContentWrapper>
      </Provider>
    );
  }
}
