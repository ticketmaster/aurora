import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { themes } from "../../theme";
import StyledText from "./StyledText";

const SecondaryStyledText = styled(StyledText)`
  color: ${themes.global.onyx.light};
`;

const SecondaryText = ({ children, ...props }) => (
  <SecondaryStyledText {...props}>{children}</SecondaryStyledText>
);

SecondaryText.propTypes = {
  children: PropTypes.string.isRequired
};

export default SecondaryText;
