import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { colors } from "../../theme";
import StyledText from "./StyledText";

const SecondaryStyledText = styled(StyledText)`
  color: ${colors.onyx.light};
`;

const SecondaryText = ({ children, ...props }) => (
  <SecondaryStyledText {...props}>{children}</SecondaryStyledText>
);

SecondaryText.propTypes = {
  children: PropTypes.string.isRequired
};

export default SecondaryText;
