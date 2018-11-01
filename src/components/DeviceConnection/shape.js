import PropTypes from "prop-types";

export const deviceConnectionStateShape = {
  "slow-2g": PropTypes.bool,
  "2g": PropTypes.bool,
  "3g": PropTypes.bool,
  "4g": PropTypes.bool
};

export const prefixedDeviceConnectionProps = {
  "connslow-2g": PropTypes.bool,
  conn2g: PropTypes.bool,
  conn3g: PropTypes.bool,
  conn4g: PropTypes.bool
};

export const prefixedDeviceConnectionDefaultProps = {
  "connslow-2g": false,
  conn2g: false,
  conn3g: false,
  conn4g: false
};
