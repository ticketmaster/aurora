import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import TOGGLE_SIZES from "./constants";
import composeEventHandlers from "../../../utils/composeEventHandlers";
import {
  ActiveArea,
  ReactToggle,
  ReactToggleTrack,
  ReactToggleThumb,
  ReactThumbCenteringContainer
} from "./Toggle.styles";

const Toggle = ({ value, size, disabled, onClick, onToggle, ...rest }) => (
  <ActiveArea
    className={classNames(
      disabled ? "toggle--disabled" : "toggle--enabled",
      value ? "toggle--active" : "toggle--inactive",
      {
        "toggle--small": size === "small",
        "toggle--large": size === "large"
      }
    )}
    role="switch"
    aria-checked={value}
    size={size}
    onClick={composeEventHandlers(onClick, onToggle)}
    disabled={disabled}
    {...rest}
  >
    <ReactToggle>
      <ReactToggleTrack />
      <ReactThumbCenteringContainer>
        <ReactToggleThumb />
      </ReactThumbCenteringContainer>
    </ReactToggle>
  </ActiveArea>
);

Toggle.propTypes = {
  value: PropTypes.bool.isRequired,
  onToggle: PropTypes.func,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(TOGGLE_SIZES),
  disabled: PropTypes.bool
};

const noop = () => {};

Toggle.defaultProps = {
  disabled: false,
  onClick: noop,
  onToggle: noop,
  size: TOGGLE_SIZES[1]
};

export default Toggle;
