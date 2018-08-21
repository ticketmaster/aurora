import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { spacing, colors, typography, constants } from "../../theme";

import { Row, Column } from "../Grid";
import BoldText from "../Text/BoldText";
import { mediumAndUp } from "../../theme/mediaQueries";

const SectionContainer = styled(Column)`
  padding: ${spacing.moderate} ${spacing.normal};
  border-bottom: 1px solid ${colors.lightGray};

  ${mediumAndUp`
    border: none;
    padding-left: ${spacing.moderate};
    padding-right: ${spacing.moderate};
  `};
`;

const TitleContainer = styled(Row)`
  padding-bottom: ${spacing.moderate};
`;

const TitleText = styled(BoldText)`
  font-size: ${({ fontSize }) => fontSize || typography.size.uno};
  color: ${({ color }) => color || colors.onyx.light};
  text-transform: ${({ textTransform }) => textTransform || "uppercase"};
`;

const Section = ({ title, noOfColumns, titleStyle, children, ...rest }) => (
  <SectionContainer medium={noOfColumns} {...rest}>
    <TitleContainer>
      <TitleText {...titleStyle}>{title}</TitleText>
    </TitleContainer>
    {children}
  </SectionContainer>
);

Section.defaultProps = {
  noOfColumns: constants.MAX_COLUMNS,
  titleStyle: {},
  children: null
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  noOfColumns: PropTypes.number,
  titleStyle: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node
};

export default Section;
