import React, { Component } from "react";
import PropTypes from "prop-types";
import Tooltip from "./index";
import { seatTooltipSizes } from "./constants";
import {
  SeatData,
  SeatDataColumn,
  ColumnHeading,
  ColumnText,
  AdditionalData
} from "./Tooltip.styles";

class SeatTooltip extends Component {
  static getDimensionsFromEvent = e => Tooltip.getDimensionsFromEvent(e);

  render() {
    const { size, row, seat, section, children, ...rest } = this.props;
    const maxWidth = size === seatTooltipSizes.small ? "180px" : "260px";

    return (
      <Tooltip {...rest} style={{ width: maxWidth, padding: 0 }}>
        {row !== undefined &&
          seat !== undefined &&
          section !== undefined && (
            <SeatData size={size} hasChildren={!!children}>
              <SeatDataColumn>
                <ColumnHeading size={size}>Sec</ColumnHeading>
                <ColumnText variant={rest.variant} size={size}>
                  {section}
                </ColumnText>
              </SeatDataColumn>
              <SeatDataColumn>
                <ColumnHeading size={size}>Row</ColumnHeading>
                <ColumnText variant={rest.variant} size={size}>
                  {row}
                </ColumnText>
              </SeatDataColumn>
              <SeatDataColumn>
                <ColumnHeading size={size}>Seat</ColumnHeading>
                <ColumnText variant={rest.variant} size={size}>
                  {seat}
                </ColumnText>
              </SeatDataColumn>
            </SeatData>
          )}
        {children && (
          <AdditionalData size={size} variant={rest.variant}>
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
  size: PropTypes.oneOf(Object.values(seatTooltipSizes)),
  children: PropTypes.node
};

SeatTooltip.defaultProps = {
  size: seatTooltipSizes.large,
  children: null
};

SeatTooltip.displayName = "SeatTooltip";

export default SeatTooltip;
