import React from "react";
import PropTypes from "prop-types";
import { Consumer } from "./Context";

const ScrollObserverConsumer = ({ children }) => (
  <Consumer>{val => children && children(val)}</Consumer>
);

ScrollObserverConsumer.propTypes = {
  children: PropTypes.func
};

ScrollObserverConsumer.defaultProps = {
  children: null
};

export default ScrollObserverConsumer;
