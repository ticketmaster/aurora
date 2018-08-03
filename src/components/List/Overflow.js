import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Row from "../Grid/Row";
import spacing from "../../../src/theme/spacing";
import { largeAndUp } from "../../theme/mediaQueries";

const OverflowRow = styled(Row)`
  overflow: hidden;

  ${largeAndUp`
 padding-left: ${spacing.moderate};
  `};
`;

const ListRowOverflow = ({ children }) => <OverflowRow>{children}</OverflowRow>;

ListRowOverflow.defaultProps = {
  children: null
};

ListRowOverflow.propTypes = {
  children: PropTypes.node
};

export default ListRowOverflow;
