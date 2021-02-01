import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import StyledSelect from "./Select.styles";
import { VARIANTS_WITH_BORDER, LAYOUT_VARIANTS } from "./constants";
import { TWO_SIZE_VARIANT } from "../../../utils/sizes";

const Select = ({
  variant,
  size,
  disabled,
  chevronVisible,
  fullWidth,
  hybrid,
  showSelect,
  className,
  selectRef,
  children,
  ...rest
}) => {
  const isBorderAround = VARIANTS_WITH_BORDER.includes(variant);

  return (
    <StyledSelect
      {...rest}
      showSelect={showSelect}
      disabled={disabled}
      ref={selectRef}
      className={classNames(className, `select--${size}`, {
        "select--disabled": disabled,
        "select--border": isBorderAround,
        "select--no-border": !isBorderAround,
        "select--chevron--disabled": !chevronVisible,
        "select--full--width": fullWidth,
        hybrid
      })}
    >
      {children}
    </StyledSelect>
  );
};

Select.propTypes = {
  variant: PropTypes.oneOf(Object.values(LAYOUT_VARIANTS)),
  size: PropTypes.oneOf(TWO_SIZE_VARIANT),
  disabled: PropTypes.bool,
  chevronVisible: PropTypes.bool,
  fullWidth: PropTypes.bool,
  hybrid: PropTypes.bool,
  showSelect: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};
Select.defaultProps = {
  variant: LAYOUT_VARIANTS.BORDERED_INNER_LABEL,
  size: TWO_SIZE_VARIANT[1],
  disabled: false,
  chevronVisible: true,
  fullWidth: false,
  hybrid: false,
  showSelect: true,
  className: ""
};

export default Select;
