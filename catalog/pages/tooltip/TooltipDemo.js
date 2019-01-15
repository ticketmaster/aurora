import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Tooltip from "../../../src/components/Tooltip";
import {
  VARIANTS,
  LIGHT,
  TOP,
  BOTTOM,
  LEFT,
  RIGHT
} from "../../../src/components/constants";

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
    const { variant } = this.props;
    const tooltip =
      "Some text to be rendered in theeii pop over component. Some text to be rendered in the popover component.";
    return (
      <Container>
        <TooltipButton
          onMouseEnter={e => this.elementHovered(e, TOP)}
          onMouseLeave={this.mouseLeave}
        >
          Top
        </TooltipButton>
        <TooltipButton
          onMouseEnter={e => this.elementHovered(e, BOTTOM)}
          onMouseLeave={this.mouseLeave}
        >
          Bottom
        </TooltipButton>
        <TooltipButton
          onMouseEnter={e => this.elementHovered(e, RIGHT)}
          onMouseLeave={this.mouseLeave}
        >
          Right
        </TooltipButton>
        <TooltipButton
          onMouseEnter={e => this.elementHovered(e, LEFT)}
          onMouseLeave={this.mouseLeave}
        >
          Left
        </TooltipButton>

        <Tooltip
          isVisible={isOpened}
          position={{ ...position }}
          direction={direction}
          variant={variant}
        >
          {tooltip}
        </Tooltip>
      </Container>
    );
  }
}

TooltipDemo.propTypes = {
  variant: PropTypes.oneOf(VARIANTS)
};
TooltipDemo.defaultProps = {
  variant: LIGHT
};

export default TooltipDemo;
