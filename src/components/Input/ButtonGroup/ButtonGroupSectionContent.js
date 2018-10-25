import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { withButtonGroupConsumer } from "./Context";
import SelectionProvider from "../../SelectionProvider/Provider";

const ButtonsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

class ButtonGroupSectionContent extends PureComponent {
  static propTypes = {
    onGroupChange: PropTypes.func.isRequired,
    groupValue: PropTypes.objectOf(PropTypes.any).isRequired,
    sectionValue: PropTypes.string.isRequired,
    isMultiSelect: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
  };

  onChange = (selected = []) => {
    const { onGroupChange, groupValue, sectionValue } = this.props;

    if (selected.length) {
      onGroupChange({ ...groupValue, [sectionValue]: selected });
      return;
    }

    onGroupChange({ ...groupValue, [sectionValue]: undefined });
  };

  render() {
    const { groupValue, sectionValue, isMultiSelect, children } = this.props;
    return (
      <ButtonsSection>
        <SelectionProvider
          onChange={this.onChange}
          isMultiSelect={isMultiSelect}
          value={groupValue[sectionValue]}
        >
          {children}
        </SelectionProvider>
      </ButtonsSection>
    );
  }
}

export default withButtonGroupConsumer(ButtonGroupSectionContent);
