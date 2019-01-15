import React from "react";
import PropTypes from "prop-types";

import {
  SeatDataStyled,
  SeatDataColumn,
  ColumnHeading,
  ColumnText
} from "./Tooltip.styles";

import { SIZES_SL, LARGE, VARIANTS, LIGHT } from "../constants";

const SeatData = ({ size, isLast, section, row, seat, variant }) => (
  <SeatDataStyled size={size} isLast={isLast}>
    <SeatDataColumn>
      <ColumnHeading size={size}>Sec</ColumnHeading>
      <ColumnText variant={variant} size={size}>
        {section}
      </ColumnText>
    </SeatDataColumn>
    <SeatDataColumn>
      <ColumnHeading size={size}>Row</ColumnHeading>
      <ColumnText variant={variant} size={size}>
        {row}
      </ColumnText>
    </SeatDataColumn>
    <SeatDataColumn>
      <ColumnHeading size={size}>Seat</ColumnHeading>
      <ColumnText variant={variant} size={size}>
        {seat}
      </ColumnText>
    </SeatDataColumn>
  </SeatDataStyled>
);

SeatData.propTypes = {
  section: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  row: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  seat: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  size: PropTypes.oneOf(SIZES_SL),
  variant: PropTypes.oneOf(VARIANTS),
  isLast: PropTypes.bool
};

SeatData.defaultProps = {
  size: LARGE,
  variant: LIGHT,
  isLast: false
};

SeatData.displayName = "SeatData";

export default SeatData;
