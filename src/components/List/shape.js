import PropTypes from "prop-types";

export const rowDataShape = {
  rowId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  dateTitle: PropTypes.string.isRequired,
  href: PropTypes.string,
  dateSubTitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["standard", "withLink"]).isRequired,
  linkTitle: PropTypes.string,
  linkUrl: PropTypes.string,
  linkSubTitle: PropTypes.string,
  coloredDate: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onOverflowClick: PropTypes.func.isRequired,
  expandedSections: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.node.isRequired
    })
  ).isRequired
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

export const sectionsShape = {
  sections: PropTypes.arrayOf(sectionItemShape).isRequired,
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func
};
