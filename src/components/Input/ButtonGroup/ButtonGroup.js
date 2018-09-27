import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ButtonGroupSection from "./ButtonGroupSection";
import ButtonGroupButton from "./ButtonGroupButton";
import { Provider as ButtonGroupProvider } from "./Context";
import spacing from "../../../theme/spacing";
import Spacing from "../../Spacing";
import { Text } from "../../Text";

const Group = styled.div`
  padding: ${spacing.normal} ${spacing.moderate} 0 ${spacing.moderate};
`;

const StyledText = styled(Text)`
  line-height: 1.25;
`;

const ButtonGroup = ({ title, children, value, onChange }) => (
  <Group>
    <Spacing bottom={{ xSmall: "moderate" }}>
      <StyledText size="giga" weight="semiBold">
        {title}
      </StyledText>
    </Spacing>
    <ButtonGroupProvider value={{ onChange, value }}>
      {children}
    </ButtonGroupProvider>
  </Group>
);

ButtonGroup.defaultProps = {
  value: {},
  onChange: () => {}
};

ButtonGroup.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.shape({}),
  onChange: PropTypes.func,
  children: PropTypes.node.isRequired
};

ButtonGroup.Section = ButtonGroupSection;
ButtonGroup.Button = ButtonGroupButton;

export default ButtonGroup;
