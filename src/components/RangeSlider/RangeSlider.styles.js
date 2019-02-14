import styled from "styled-components";
import { themes } from "../../theme";

const sliderHeight = "4px";
const handleSize = "23px";

export const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  touch-action: none;
  box-sizing: border-box;
  height: calc(${handleSize} + 1px);
  display: flex;
  align-items: center;

  &.disabled {
    opacity: 0.4;
  }
`;

export const SliderRail = styled.div`
  position: absolute;
  width: 100%;
  background-color: ${themes.global.gray04};
  height: ${sliderHeight};
`;

export const SliderTrack = styled.div`
  position: absolute;
  left: 0;
  height: ${sliderHeight};
  background-color: ${themes.global.primary.base};

  &.slider__track--disabled {
    background-color: ${themes.global.gray03};
  }
`;

export const SliderHandle = styled.div`
  position: absolute;
  width: ${handleSize};
  height: ${handleSize};
  cursor: pointer;
  touch-action: pan-x;
  border: 1px solid ${themes.global.gray03};
  border-radius: 50%;
  background: ${themes.global.white.base};
  margin-left: calc(-${handleSize} / 2);
`;
