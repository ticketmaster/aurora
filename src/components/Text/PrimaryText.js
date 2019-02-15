import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { themes, typography } from "../../theme";
import constants from "../../theme/constants";
import StyledText from "./StyledText";

const PrimaryStyledText = styled(StyledText)`
  color: ${themes.global.onyx.base};

  @media only screen and ${constants.breakpoints.smallAndUp} {
    font-size: ${typography.size.kilo};
  }
`;

const PrimaryText = ({ children, ...props }) => (
  <PrimaryStyledText {...props}>{children}</PrimaryStyledText>
);

PrimaryText.propTypes = {
  children: PropTypes.string.isRequired
};

export default PrimaryText;
