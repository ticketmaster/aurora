import React from "react";
import PropTypes from "prop-types";

import { colors } from "../../theme";
import StyledText from "./StyledText";

const SecondaryStyledText = StyledText.extend`
  color: ${colors.onyx.light};
`;

const SecondaryText = ({ children }) => (
  <SecondaryStyledText>{children}</SecondaryStyledText>
);

SecondaryText.propTypes = {
  children: PropTypes.string.isRequired
};

export default SecondaryText;
