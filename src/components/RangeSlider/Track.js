import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { SliderTrack } from "./RangeSlider.styles";

const Track = props => {
  const { className, offset, length, disabled } = props;

  const positonStyle = {
    left: `${offset}%`,
    width: `${length}%`
  };

  const classes = classnames(className, { disabled });

  return <SliderTrack className={classes} style={positonStyle} />;
};

Track.propTypes = {
  className: PropTypes.string,
  offset: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  disabled: PropTypes.bool
};

Track.defaultProps = {
  className: "",
  disabled: false
};

export default Track;
