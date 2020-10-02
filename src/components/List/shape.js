import PropTypes from "prop-types";

import { BUTTON_VARIANTS } from "../constants";

export const rowDataShape = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  dateTitle: PropTypes.string.isRequired,
  url: PropTypes.string,
  dateSubTitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonVariant: PropTypes.oneOf(BUTTON_VARIANTS),
  variant: PropTypes.oneOf(["standard", "withLink"]).isRequired,
  label: PropTypes.string,
  labelVariant: PropTypes.string,
  linkTitle: PropTypes.string,
  linkUrl: PropTypes.string,
  linkSubTitle: PropTypes.string,
  dateColor: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export const sectionItemShape = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subTitle: PropTypes.string,
      icon: PropTypes.node.isRequired,
      onItemClick: PropTypes.func
    })
  ).isRequired
};
