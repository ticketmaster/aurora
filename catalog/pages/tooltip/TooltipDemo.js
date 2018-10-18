import React from "react";
import styled from "styled-components";
import Tooltip from "../../../src/components/Tooltip";

const Container = styled.div`
  margin-top: 100px;
  width: 95%;
  height: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
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
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false
    };
  }

  mouseLeave = () => {
    this.setState({
      isOpened: false
    });
  };

  elementHovered = (e, direction) => {
    const data = Tooltip.getDimensionsFromEvent(e);
    this.setState({
      isOpened: true,
      direction,
      ...data
    });
  };

  render() {
    const { isOpened, direction, ...position } = this.state;
    const tooltip =
      "Some text to be rendered in theeii pop over component. Some text to be rendered in the popover component.";
    return (
      <Container>
        <TooltipButton
          onMouseEnter={e => this.elementHovered(e, "top")}
          onMouseLeave={this.mouseLeave}
        >
          Top
        </TooltipButton>
        <TooltipButton
          onMouseEnter={e => this.elementHovered(e, "bottom")}
          onMouseLeave={this.mouseLeave}
        >
          Bottom
        </TooltipButton>
        <TooltipButton
          onMouseEnter={e => this.elementHovered(e, "right")}
          onMouseLeave={this.mouseLeave}
        >
          Right
        </TooltipButton>
        <TooltipButton
          onMouseEnter={e => this.elementHovered(e, "left")}
          onMouseLeave={this.mouseLeave}
        >
          Left
        </TooltipButton>

        <Tooltip
          isVisible={isOpened}
          position={{ ...position }}
          direction={direction}
        >
          {tooltip}
        </Tooltip>
      </Container>
    );
  }
}

export default TooltipDemo;
