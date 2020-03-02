import React from "react";
import styled from "styled-components";
import Tooltip from "../../../src/components/Tooltip";
import { LinkCta } from "../../../src/components/Text";

const Container = styled.div`
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const TooltipButton = styled.div`
  display: inline-block;
`;

let index = 0;
let asyncInterval;

const copy = [
  `This is a basic tooltip. If there is a need for multiple lines, it grows downward.`,

  `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
  incididunt ut labore et dolore magna aliqua. In nisl nisi scelerisque eu ultrices. 
  Eget aliquet nibh praesent tristique magna.`,

  `Ut lectus arcu bibendum at varius vel. Vitae nunc sed velit dignissim sodales ut eu sem. 
  Velit sed ullamcorper morbi tincidunt ornare massa. Praesent elementum facilisis leo vel 
  fringilla est ullamcorper eget. Mauris commodo quis imperdiet massa tincidunt nunc. Tellus
  in hac habitasse platea dictumst vestibulum rhoncus. Et odio pellentesque diam volutpat. 
  Sed id semper risus in. Ut venenatis tellus in metus vulputate eu. Vitae auctor eu augue ut
  lectus.`
];

class TooltipRestrictedAsyncDemo extends React.Component {
  state = {
    isOpened: false,
    asyncRefresh: false
  };

  componentWillUnmount() {
    document.body.removeEventListener("touchstart", this.mouseLeave);
  }

  containerRef = React.createRef();
  asyncRefresh = () => {
    asyncInterval = setInterval(() => {
      index = index === copy.length - 1 ? 0 : index + 1;

      this.setState({
        asyncRefresh: !this.state.asyncRefresh
      });
    }, 2000);
  };

  mouseLeave = e => {
    e.stopPropagation();
    document.body.removeEventListener("touchstart", this.mouseLeave);
    this.setState({
      isOpened: false
    });

    clearInterval(asyncInterval);
  };

  buttonSelect = e => {
    const data = Tooltip.getDimensionsFromEvent(e, this.containerRef.current);
    this.asyncRefresh();

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
    const { isOpened, content, asyncRefresh, ...position } = this.state;

    return (
      <Container ref={this.containerRef}>
        <div
          style={{
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
              Hover for Async Tooltip
            </LinkCta>
          </TooltipButton>
        </div>
        <Tooltip
          isVisible={isOpened}
          position={{ ...position }}
          asyncRefresh={asyncRefresh}
        >
          {copy[index]}
        </Tooltip>
      </Container>
    );
  }
}

export default TooltipRestrictedAsyncDemo;
