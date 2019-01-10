import React from "react";
import { PropTypes } from "prop-types";

import { colors } from "../../theme";

const VenueSearchIcon = ({ children, color, ...props }) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 1024 1024"
  >
    {children}
    <path
      fill={color}
      d="M1012.992 10.906c-5.888-5.939-13.312-9.37-21.76-10.394-8.192-0.922-15.974 0.512-23.552 4.608l-948.326 549.376c-7.424 3.994-12.954 10.086-16.384 18.074-3.379 8.192-3.84 16.384-1.536 23.552 1.946 8.448 6.451 15.36 13.414 20.582 6.758 5.12 14.336 7.68 22.63 7.68h362.086v361.984c0 8.704 2.56 16.486 7.68 23.040 5.12 6.502 11.776 11.008 19.456 13.312 2.253 0.717 4.608 1.024 7.014 1.024h3.226c6.656 0 12.902-1.536 18.637-4.608 5.939-3.226 10.752-7.834 14.080-13.824l549.12-948.89c4.403-7.322 6.042-15.36 4.813-23.757-1.178-8.090-4.608-15.258-10.598-21.658zM463.872 560.64c-7.168-7.168-16.538-11.008-26.931-11.008h-259.789l706.406-409.344-408.781 706.918v-260.25c0-10.086-3.789-19.2-10.957-26.368z"
    />
  </svg>
);

VenueSearchIcon.displayName = "VenueSearchIcon";

VenueSearchIcon.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string
};

VenueSearchIcon.defaultProps = {
  children: null,
  color: colors.moonrock
};

export default VenueSearchIcon;
