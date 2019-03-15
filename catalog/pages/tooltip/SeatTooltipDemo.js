import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SeatTooltip from "../../../src/components/Tooltip/SeatTooltip";
import { themes } from "../../../src/theme";
import { Text } from "../../../src/components/Text";

const TooltipText = styled(Text).attrs({
  weight: "semiBold",
  tag: "span"
})`
  color: ${themes.global.primary.base};
`;

export const TooltipButton = styled.div`
  width: 100px;
  height: 50px;
  border: 1px solid red;
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class TooltipDemo extends React.Component {
  static propTypes = {
    variant: PropTypes.oneOf(["dark", "light"]),
    text: PropTypes.string.isRequired,
    direction: PropTypes.string.isRequired,
    size: PropTypes.oneOf(["small", "large"])
  };

  static defaultProps = {
    variant: "light",
    size: "large"
  };

  static tooltipText = "Some text to be rendered in the pop over component.";

  state = {
    isOpened: false
  };

  mouseLeave = () => {
    this.setState({
      isOpened: false
    });
  };

  elementHovered = e => {
    const data = SeatTooltip.getDimensionsFromEvent(e);
    this.setState({
      isOpened: true,
      ...data
    });
  };

  render() {
    const { isOpened, ...position } = this.state;
    const { variant, direction, text, size } = this.props;

    return (
      <div style={{ display: "flex" }}>
        <TooltipText
          onMouseEnter={this.elementHovered}
          onMouseLeave={this.mouseLeave}
        >
          {text}
        </TooltipText>

        <SeatTooltip
          size={size}
          row={5}
          seat={25}
          section="B"
          isVisible={isOpened}
          position={{ ...position }}
          direction={direction}
          variant={variant}
        >
          {TooltipDemo.tooltipText}
        </SeatTooltip>
      </div>
    );
  }
}

export default TooltipDemo;
