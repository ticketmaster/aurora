import React from "react";
import classnames from "classnames";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Button } from "../../Button";
import composeEventHandlers from "../../../utils/composeEventHandlers";
import { Consumer } from "../../SelectionProvider/Context";
import { getThemeValue } from "../../../utils";
import spacing from "../../../theme/spacing";
import { typography } from "../../../theme";

const ButtonGroupButtonContainer = styled.div`
  width: 50%;
  &:nth-child(2n + 1) {
    padding-right: ${spacing.slim};
  }
  &:nth-child(2n) {
    padding-left: ${spacing.slim};
  }
`;

const StyledButton = styled(Button).attrs({
  variant: "outlineGray"
})`
  font-size: ${typography.size.kilo};
  font-weight: normal;
  margin-bottom: ${spacing.cozy};
  &:hover {
    border: solid 1px ${getThemeValue("brand")};
  }
  &:focus {
    box-shadow: none;
  }
  &.button__selected {
    background-color: ${getThemeValue("primary", "lightBase")};
    border: solid 1px ${getThemeValue("brand")};
  }
`;

const ButtonGroupButton = ({ children, value, onClick, ...props }) => (
  <Consumer>
    {values => (
      <ButtonGroupButtonContainer>
        <StyledButton
          onClick={composeEventHandlers(
            () => values.onClick({ value }),
            onClick
          )}
          {...props}
          className={classnames({
            button__selected: values.selected.includes(value)
          })}
        >
          {children}
        </StyledButton>
      </ButtonGroupButtonContainer>
    )}
  </Consumer>
);

ButtonGroupButton.defaultProps = {
  onClick: () => {}
};

ButtonGroupButton.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
};

export default ButtonGroupButton;
