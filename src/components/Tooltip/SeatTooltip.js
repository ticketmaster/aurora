import React, { Component } from "react";
import PropTypes from "prop-types";
import Tooltip from "./index";
import { SIZES_SL, SMALL, LARGE, VARIANTS, LIGHT } from "../constants";
import { AdditionalData } from "./Tooltip.styles";

import SeatData from "./SeatData";

class SeatTooltip extends Component {
  static getDimensionsFromEvent = e => Tooltip.getDimensionsFromEvent(e);

  render() {
    const { size, row, seat, section, children, variant, ...rest } = this.props;
    const maxWidth = size === SMALL ? "180px" : "260px";

    return (
      <Tooltip
        {...rest}
        variant={variant}
        style={{ width: maxWidth, padding: 0 }}
      >
        {row !== undefined &&
          seat !== undefined &&
          section !== undefined && (
            <SeatData
              size={size}
              row={row}
              section={section}
              seat={seat}
              variant={variant}
              isLast={!!children}
            />
          )}
        {children && (
          <AdditionalData
            size={size}
            row={row}
            section={section}
            seat={seat}
            variant={variant}
          >
            {children}
          </AdditionalData>
        )}
      </Tooltip>
    );
  }
}

SeatTooltip.propTypes = {
  section: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  row: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  seat: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  size: PropTypes.oneOf(SIZES_SL),
  children: PropTypes.node,
  variant: PropTypes.oneOf(VARIANTS)
};

SeatTooltip.defaultProps = {
  size: LARGE,
  children: null,
  variant: LIGHT
};

SeatTooltip.displayName = "SeatTooltip";

export default SeatTooltip;
