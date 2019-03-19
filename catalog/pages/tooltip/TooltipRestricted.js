import React from "react";
import styled from "styled-components";
import Tooltip from "../../../src/components/Tooltip";
import { LinkCta } from "../../../src/components/Text";

const Container = styled.div`
  height: 600px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const TooltipButton = styled.div`
  display: inline-block;
`;

class TooltipRestrictedDemo extends React.Component {
  state = {
    isOpened: false
  };

  componentWillUnmount() {
    document.body.removeEventListener("touchstart", this.mouseLeave);
  }

  containerRef = React.createRef();

  mouseLeave = e => {
    e.stopPropagation();
    document.body.removeEventListener("touchstart", this.mouseLeave);
    this.setState({
      isOpened: false
    });
  };

  buttonSelect = e => {
    const data = Tooltip.getDimensionsFromEvent(e, this.containerRef.current);
    this.setState(state => {
      if (state.isOpened) {
        return state;
      }

      document.body.addEventListener("touchstart", this.mouseLeave);
      return {
        isOpened: true,
        ...data
      };
    });
  };

  render() {
    const { isOpened, ...position } = this.state;

    return (
      <Container ref={this.containerRef}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <TooltipButton>
            <LinkCta
              onMouseEnter={this.buttonSelect}
              onMouseLeave={this.mouseLeave}
              onTouchStart={this.buttonSelect}
            >
              Hover for Tooltip
            </LinkCta>
          </TooltipButton>
          <TooltipButton>
            <LinkCta
              onMouseEnter={this.buttonSelect}
              onMouseLeave={this.mouseLeave}
              onTouchStart={this.buttonSelect}
            >
              Hover for Tooltip
            </LinkCta>
          </TooltipButton>
        </div>
        <div style={{ width: "100%", textAlign: "center" }}>
          <TooltipButton>
            <LinkCta
              onMouseEnter={this.buttonSelect}
              onMouseLeave={this.mouseLeave}
              onTouchStart={this.buttonSelect}
            >
              Hover for Tooltip
            </LinkCta>
          </TooltipButton>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between"
          }}
        >
          <TooltipButton>
            <LinkCta
              onMouseEnter={this.buttonSelect}
              onMouseLeave={this.mouseLeave}
              onTouchStart={this.buttonSelect}
            >
              Hover for Tooltip
            </LinkCta>
          </TooltipButton>
          <TooltipButton>
            <LinkCta
              onMouseEnter={this.buttonSelect}
              onMouseLeave={this.mouseLeave}
              onTouchStart={this.buttonSelect}
            >
              Hover for Tooltip
            </LinkCta>
          </TooltipButton>
        </div>
        <Tooltip isVisible={isOpened} position={{ ...position }}>
          This is a basic tooltip. If there is a need for multiple lines, it
          grows downward.
        </Tooltip>
      </Container>
    );
  }
}

export default TooltipRestrictedDemo;
