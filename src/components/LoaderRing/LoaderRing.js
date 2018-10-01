import React from "react";
import styled, { keyframes } from "styled-components";
import { themes } from "../../theme";

const Rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled.div`
  > div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    border-radius: 100%;
    animation: ${Rotate} 2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    :nth-child(1) {
      animation-delay: -0.45s;
    }
    :nth-child(2) {
      animation-delay: -0.3s;
    }
    :nth-child(3) {
      animation-delay: -0.15s;
    }
  }
`;

const OuterRing = styled(LoadingContainer)`
  > div {
    width: 80px;
    height: 80px;
    margin: 0px;
    border: 3px solid ${themes.global.accent01.dark};
    border-color: ${themes.global.accent01.dark} transparent transparent
      transparent;
  }
`;

const MiddleRing = styled(LoadingContainer)`
  > div {
    width: 60px;
    height: 60px;
    margin-top: 7px;
    margin-left: 7px;
    border: 3px solid ${themes.global.accent03.light};
    border-color: ${themes.global.accent03.light} transparent transparent
      transparent;
  }
`;

const InnerRing = styled(LoadingContainer)`
  > div {
    width: 40px;
    height: 40px;
    margin-top: 7px;
    margin-left: 7px;
    border: 3px solid ${themes.global.brand};
    border-color: ${themes.global.brand} transparent transparent transparent;
  }
`;

const LoaderRing = () => (
  <React.Fragment>
    <OuterRing>
      <div />
      <div />
      <div />
      <MiddleRing>
        <div />
        <div />
        <div />
        <InnerRing>
          <div />
          <div />
          <div />
        </InnerRing>
      </MiddleRing>
    </OuterRing>
  </React.Fragment>
);

LoaderRing.displayName = "LoaderRing";

export default LoaderRing;
