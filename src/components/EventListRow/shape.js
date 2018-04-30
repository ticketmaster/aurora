import PropTypes from "prop-types";

const eventDateShape = {
  localDate: PropTypes.string,
  localTime: PropTypes.string,
  dateTBD: PropTypes.bool,
  dateTBA: PropTypes.bool,
  dateTitle: PropTypes.string,
  dateSubtitle: PropTypes.string,
  timeTBA: PropTypes.bool,
  noSpecificTime: PropTypes.bool,
  spanMultipleDays: PropTypes.bool
};

export default eventDateShape;
