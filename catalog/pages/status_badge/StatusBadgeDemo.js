import React from "react";
import PropTypes from "prop-types";
import { themes, StatusBadge } from "../../../src";

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

const StatusBadgeDemo = ({ type }) => (
  <StatusBadge
    type={type}
    visibleBadges={type === "light" ? visibleLight : visible}
    hiddenBadges={type === "light" ? visibleLight : visible}
  />
);

StatusBadgeDemo.propTypes = {
  type: PropTypes.string
};

StatusBadgeDemo.defaultProps = {
  type: "dark"
};

export default StatusBadgeDemo;
