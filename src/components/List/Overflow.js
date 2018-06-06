import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { spacing } from "../../theme";
import { mediumAndUp } from "../../theme/mediaQueries";

import Row from "../Grid/Row";

const OverflowRow = styled(Row)`
  ${mediumAndUp`
    padding-left: ${spacing.shakira};
    padding-top: ${spacing.moderate};
    padding-bottom: ${spacing.moderate};
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
