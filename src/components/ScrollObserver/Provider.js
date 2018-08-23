/* global window */
import React from "react";
import PropTypes from "prop-types";
import { Provider } from "./Context";

export default class ScrollObserverProvider extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    hasWindow: PropTypes.bool
  };

  static defaultProps = { hasWindow: typeof window !== "undefined" };

  state = { scrollY: 0 }; // eslint-disable-line

  componentDidMount() {
    this.isUnmounting = false;
    this.subscribe();
  }

  componentWillUnmount() {
    this.isUnmounting = true;
    this.unsubscribe();
  }

  onScroll = /* istanbul ignore next */ () => {
    /* istanbul ignore next */
    if (!this.ticking && !this.isUnmounting) {
      window.requestAnimationFrame(this.notify);
      this.ticking = true;
    }
  };

  ticking = false;

  notify = /* istanbul ignore next */ () => {
    /* istanbul ignore next */
    if (this.isUnmounting) return;
    /* istanbul ignore next */
    this.ticking = false;
    /* istanbul ignore next */
    const scrollY =
      window.scrollY ||
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    /* istanbul ignore next */
    this.setState(() => ({ scrollY }));
  };

  subscribe = () => {
    if (!this.props.hasWindow) return;
    window.addEventListener("scroll", this.onScroll, { passive: true });
  };

  unsubscribe = () => {
    if (!this.props.hasWindow) return;
    window.removeEventListener("scroll", this.onScroll);
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}
