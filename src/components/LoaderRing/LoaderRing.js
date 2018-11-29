import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

import { themes } from "../../theme";
import { LOADER_RING_SIZES } from "./constants";

const SIZES = {
  [LOADER_RING_SIZES.small]: {
    borderWidth: "2px",
    marginValue: "4px",
    outerRingLength: "48px",
    middleRingLength: "36px",
    innerRingLength: "24px"
  },
  [LOADER_RING_SIZES.regular]: {
    borderWidth: "3px",
    marginValue: "7px",
    outerRingLength: "80px",
    middleRingLength: "60px",
    innerRingLength: "40px"
  }
};

const Rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled.div`
  display: ${({ display }) => display};

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
    left: calc(50% - ${({ size }) => SIZES[size].outerRingLength} / 2);
    width: ${({ size }) => SIZES[size].outerRingLength};
    height: ${({ size }) => SIZES[size].outerRingLength};
    margin: 0px;
    border: ${({ size }) => SIZES[size].borderWidth} solid
      ${themes.global.accent01.dark};
    border-color: ${themes.global.accent01.dark} transparent transparent
      transparent;
  }
`;

const MiddleRing = styled(LoadingContainer)`
  > div {
    width: ${({ size }) => SIZES[size].middleRingLength};
    height: ${({ size }) => SIZES[size].middleRingLength};
    margin-top: ${({ size }) => SIZES[size].marginValue};
    margin-left: ${({ size }) => SIZES[size].marginValue};
    border: ${({ size }) => SIZES[size].borderWidth} solid
      ${themes.global.accent03.light};
    border-color: ${themes.global.accent03.light} transparent transparent
      transparent;
  }
`;

const InnerRing = styled(LoadingContainer)`
  > div {
    width: ${({ size }) => SIZES[size].innerRingLength};
    height: ${({ size }) => SIZES[size].innerRingLength};
    margin-top: ${({ size }) => SIZES[size].marginValue};
    margin-left: ${({ size }) => SIZES[size].marginValue};
    border: ${({ size }) => SIZES[size].borderWidth} solid
      ${themes.global.brand};
    border-color: ${themes.global.brand} transparent transparent transparent;
  }
`;

const LoaderRing = props => (
  <React.Fragment>
    <OuterRing {...props}>
      <div />
      <div />
      <div />
      <MiddleRing {...props}>
        <div />
        <div />
        <div />
        <InnerRing {...props}>
          <div />
          <div />
          <div />
        </InnerRing>
      </MiddleRing>
    </OuterRing>
  </React.Fragment>
);

LoaderRing.displayName = "LoaderRing";

LoaderRing.propTypes = {
  size: PropTypes.oneOf(Object.values(LOADER_RING_SIZES)),
  display: PropTypes.oneOf(["block", "inline-block"])
};

LoaderRing.defaultProps = {
  size: LOADER_RING_SIZES.regular,
  display: "block"
};

export default LoaderRing;
