import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { spacing, colors, typography } from "../../theme";

import { Row, Column } from "../Grid";
import BoldText from "../Text/BoldText";
import { mediumAndUp } from "../../theme/mediaQueries";

const SectionContainer = styled(Column)`
  padding: ${spacing.moderate} ${spacing.normal};
  border-bottom: 1px solid ${colors.lightGray};
  ${mediumAndUp`
    border: none;
    padding-left: ${props => (props.padding ? 0 : spacing.moderate)};
    padding-right: ${props => (props.padding ? 0 : spacing.moderate)};
  `};
`;

const TitleContainer = styled(Row)`
  padding-bottom: ${spacing.moderate};
`;

const TitleText = styled(BoldText)`
  font-size: ${typography.size.uno};
  color: ${colors.onyx.light};
  text-transform: uppercase;
`;

const Section = ({ title, titleStyle, children, container }) => (
  <SectionContainer style={{ ...container }}>
    <TitleContainer>
      <TitleText style={titleStyle}>{title}</TitleText>
    </TitleContainer>
    {children}
  </SectionContainer>
);

Section.defaultProps = {
  titleStyle: {},
  children: null,
  container: null
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  titleStyle: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node,
  container: PropTypes.shape({})
};

export default Section;
