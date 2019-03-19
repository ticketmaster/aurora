import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Tooltip from "../../../src/components/Tooltip";
import { themes } from "../../../src/theme";
import { Text } from "../../../src/components/Text";

const TooltipText = styled(Text).attrs({
  weight: "semiBold",
  tag: "span"
})`
  color: ${themes.global.primary.base};
`;

class TooltipDemo extends Component {
  static propTypes = {
    variant: PropTypes.oneOf(["dark", "light"]),
    text: PropTypes.string.isRequired,
    direction: PropTypes.string.isRequired
  };

  static defaultProps = {
    variant: "light"
  };

  static tooltipText =
    "This is a basic tooltip. If there is a need for multiple lines, it grows downward.";

  state = {
    isOpened: false
  };

  mouseLeave = () => {
    this.setState({
      isOpened: false
    });
  };

  elementHovered = e => {
    const data = Tooltip.getDimensionsFromEvent(e);
    this.setState({
      isOpened: true,
      ...data
    });
  };

  render() {
    const { isOpened, ...position } = this.state;
    const { variant, direction, text } = this.props;

    return (
      <div style={{ display: "flex" }}>
        <TooltipText
          onMouseEnter={this.elementHovered}
          onMouseLeave={this.mouseLeave}
        >
          {text}
        </TooltipText>

        <Tooltip
          isVisible={isOpened}
          position={{ ...position }}
          direction={direction}
          variant={variant}
        >
          {TooltipDemo.tooltipText}
        </Tooltip>
      </div>
    );
  }
}

export default TooltipDemo;
