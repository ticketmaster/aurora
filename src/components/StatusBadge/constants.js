import PropTypes from "prop-types";
import { themes } from "../../theme";

export const badgeProps = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string
};

export const badgeDefault = {
  color: themes.global.primary.base
};
