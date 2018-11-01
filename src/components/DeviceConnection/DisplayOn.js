import React from "react";
import PropTypes from "prop-types";

import { Consumer } from "./Context";
import { CONNECTION_TYPES } from "./constants";
import {
  prefixedDeviceConnectionProps,
  prefixedDeviceConnectionDefaultProps
} from "./shape";

const DisplayOn = props => {
  const { children } = props;
  return (
    <Consumer>
      {val =>
        CONNECTION_TYPES.find(conn => val[conn] && props[`conn${conn}`])
          ? children
          : null
      }
    </Consumer>
  );
};

DisplayOn.propTypes = {
  ...prefixedDeviceConnectionProps,
  children: PropTypes.node.isRequired
};

DisplayOn.defaultProps = prefixedDeviceConnectionDefaultProps;

export default DisplayOn;
