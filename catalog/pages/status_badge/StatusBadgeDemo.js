import React from "react";
import PropTypes from "prop-types";
import { themes, StatusBadgeGroup } from "../../../src";

const visible = [
  { label: "error", color: themes.global.error.base },
  { label: "caution", color: themes.global.caution.dark },
  { label: "base", color: themes.global.primary.base },
  { label: "success", color: themes.global.success.base }
];

const visibleLight = [
  { label: "error", color: themes.global.error.light },
  { label: "caution", color: themes.global.caution.light },
  { label: "base", color: themes.global.primary.muted },
  { label: "success", color: themes.global.success.light }
];

const StatusBadgeDemo = ({ variant }) => (
  <StatusBadgeGroup
    variant={variant}
    visibleBadges={variant === "light" ? visibleLight : visible}
    hiddenBadges={variant === "light" ? visibleLight : visible}
  />
);

StatusBadgeDemo.propTypes = {
  variant: PropTypes.string
};

StatusBadgeDemo.defaultProps = {
  variant: "dark"
};

export default StatusBadgeDemo;
