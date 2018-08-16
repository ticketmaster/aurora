import React from "react";
import PropTypes from "prop-types";

import timing from "../../theme/animationTimings";
import {
  bezierEasy as bezierEasyFunc,
  bezierExit as bezierExitFunc
} from "../../theme/easing";

const CollapsedDetails = class extends React.Component {
  constructor(...args) {
    super(...args);

    this.detailsElement = React.createRef();

    let height = "auto";
    let overflow = "visible";

    if (this.isNumber(this.props.height)) {
      height = this.props.height < 0 ? 0 : this.props.height;
      overflow = "hidden";
    }

    this.state = {
      height,
      overflow,
      isTransitions: false
    };
  }

  componentDidMount() {
    const { height } = this.state;

    const detailsElement = this.detailsElement.current;

    if (detailsElement && detailsElement.style) {
      this.hideDetails(height);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { duration, height, delay } = this.props;

    const detailsElement = this.detailsElement.current;

    if (detailsElement && height !== prevProps.height) {
      this.showDetails(prevState.height);

      detailsElement.style.overflow = "hidden";
      const contentHeight = detailsElement.offsetHeight;
      detailsElement.style.overflow = "";

      let newHeight = null;
      const timeoutState = {
        height: null,
        overflow: "hidden"
      };

      if (this.isNumber(height)) {
        newHeight = height < 0 ? 0 : height;
        timeoutState.height = newHeight;
      } else {
        newHeight = contentHeight;
        timeoutState.height = "auto";
        timeoutState.overflow = null;
      }

      const isCollapseAnimation = prevState.height === "auto";

      if (isCollapseAnimation) {
        timeoutState.height = newHeight;
        newHeight = contentHeight;
      }

      /* eslint-disable react/no-did-update-set-state */
      this.setState({
        height: newHeight,
        overflow: "hidden",
        isTransitions: !isCollapseAnimation
      });
      /* eslint-enable react/no-did-update-set-state */

      clearTimeout(this.timeoutId);
      clearTimeout(this.animationTimeoutId);

      if (isCollapseAnimation) {
        timeoutState.isTransitions = true;

        this.startAnimation(() => {
          this.setState(timeoutState);
        });

        this.animationTimeoutId = setTimeout(() => {
          this.setState({
            isTransitions: false
          });

          this.hideDetails(timeoutState.height);
        }, duration + delay);
      } else {
        this.timeoutId = setTimeout(() => {
          timeoutState.isTransitions = false;

          this.setState(timeoutState);

          if (height !== "auto") {
            this.hideDetails(newHeight);
          }
        }, duration);
      }
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
    clearTimeout(this.animationTimeoutId);
  }

  isNumber = n => !Number.isNaN(parseFloat(n)) && Number.isFinite(n);

  startAnimation = callback => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        callback();
      });
    });
  };

  showDetails = height => {
    const el = this.detailsElement.current;

    if (el && el.style && height === 0) {
      el.style.display = "block";
    }
  };

  hideDetails = newHeight => {
    const el = this.detailsElement.current;

    if (el && el.style && newHeight === 0) {
      el.style.display = "none";
    }
  };

  render() {
    const {
      children,
      duration,
      durationOut,
      delay,
      bezierEasy,
      bezierExit
    } = this.props;

    const { height, overflow, isTransitions } = this.state;

    const wrapperStyle = {
      height,
      overflow
    };

    if (isTransitions) {
      let transition = `height ${duration}ms ${bezierEasy}`;
      if (height === 0) {
        transition = `height ${duration}ms ${bezierExit}`;
      }
      wrapperStyle.transition = transition;
      wrapperStyle.WebkitTransition = transition;
    }

    const detailsStyle = {};
    let opacityTransition = `height ${duration}ms ${bezierEasy} ${delay}`;
    if (height === 0) {
      opacityTransition = `opacity ${durationOut}ms ${bezierEasy}`;
    }
    detailsStyle.transition = opacityTransition;
    detailsStyle.WebkitTransition = opacityTransition;
    if (height === 0) {
      detailsStyle.opacity = 0;
    }

    return (
      <div aria-hidden={height === 0} style={wrapperStyle}>
        <div style={detailsStyle} ref={this.detailsElement}>
          {children}
        </div>
      </div>
    );
  }
};

CollapsedDetails.propTypes = {
  children: PropTypes.node,
  duration: PropTypes.number,
  durationOut: PropTypes.number,
  delay: PropTypes.number,
  bezierEasy: PropTypes.string,
  bezierExit: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

CollapsedDetails.defaultProps = {
  children: null,
  duration: timing.exit,
  durationOut: timing.enter,
  delay: timing.enter,
  bezierEasy: bezierEasyFunc,
  bezierExit: bezierExitFunc,
  height: 0
};

export default CollapsedDetails;
