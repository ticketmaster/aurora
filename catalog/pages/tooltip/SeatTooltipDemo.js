import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SeatTooltip from "../../../src/components/Tooltip/SeatTooltip";

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
    const data = SeatTooltip.getDimensionsFromEvent(e);
    this.setState({
      isOpened: true,
      direction,
      ...data
    });
  };

  render() {
    const { isOpened, direction, ...position } = this.state;
    const { size, variant } = this.props;
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

        <SeatTooltip
          variant={variant}
          size={size}
          isVisible={isOpened}
          row={5}
          seat={25}
          section="B"
          position={{ ...position }}
          direction={direction}
        >
          {tooltip}
        </SeatTooltip>
      </Container>
    );
  }
}

TooltipDemo.propTypes = {
  size: PropTypes.oneOf(["small", "large"]),
  variant: PropTypes.oneOf(["light", "dark"])
};

TooltipDemo.defaultProps = {
  size: "large",
  variant: "light"
};

export default TooltipDemo;
