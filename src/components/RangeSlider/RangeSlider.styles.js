import styled from "styled-components";
import { getThemeValue } from "../../utils";

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
  background-color: ${getThemeValue("gray04")};
  height: ${sliderHeight};
`;

export const SliderTrack = styled.div`
  position: absolute;
  left: 0;
  height: ${sliderHeight};
  background-color: ${getThemeValue("primary", "base")};

  &.slider__track--disabled {
    background-color: ${getThemeValue("gray03")};
  }
`;

export const SliderHandle = styled.div`
  position: absolute;
  width: ${handleSize};
  height: ${handleSize};
  cursor: pointer;
  touch-action: pan-x;
  border: 1px solid ${getThemeValue("gray03")};
  border-radius: 50%;
  background: ${getThemeValue("white", "base")};
  margin-left: calc(-${handleSize} / 2);
`;
