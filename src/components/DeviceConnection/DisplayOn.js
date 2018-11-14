import React from "react";
import PropTypes from "prop-types";

import { Consumer } from "./Context";
import { CONNECTION_TYPES } from "./constants";
import {
  prefixedDeviceConnectionProps,
  prefixedDeviceConnectionDefaultProps
} from "./shape";

export const getConnName = conn => (conn === "saveData" ? conn : `conn${conn}`);

const DisplayOn = props => {
  const { children } = props;
  return (
    <Consumer>
      {val =>
        CONNECTION_TYPES.find(conn => val[conn] && props[getConnName(conn)])
          ? children
          : null
      }
    </Consumer>
  );
};

DisplayOn.propTypes = {
  ...prefixedDeviceConnectionProps,
  saveData: PropTypes.bool,
  children: PropTypes.node.isRequired
};

DisplayOn.defaultProps = {
  ...prefixedDeviceConnectionDefaultProps,
  saveData: false
};

export default DisplayOn;
