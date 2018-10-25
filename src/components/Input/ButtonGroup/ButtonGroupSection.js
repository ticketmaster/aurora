import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ButtonGroupSectionContent from "./ButtonGroupSectionContent";
import Spacing from "../../Spacing";
import { Text } from "../../Text";

const StyledText = styled(Text)`
  line-height: 1.25;
  text-transform: uppercase;
`;

const ButtonGroupSection = ({
  title,
  value: sectionValue,
  isMultiSelect,
  children
}) => (
  <Spacing bottom={{ xSmall: "moderate" }}>
    {title && (
      <Spacing bottom={{ xSmall: "moderate" }}>
        <StyledText secondary size="uno" weight="semiBold">
          {title}
        </StyledText>
      </Spacing>
    )}
    <ButtonGroupSectionContent
      isMultiSelect={isMultiSelect}
      sectionValue={sectionValue}
    >
      {children}
    </ButtonGroupSectionContent>
  </Spacing>
);

ButtonGroupSection.defaultProps = {
  title: "",
  isMultiSelect: false
};

ButtonGroupSection.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
  isMultiSelect: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default ButtonGroupSection;
