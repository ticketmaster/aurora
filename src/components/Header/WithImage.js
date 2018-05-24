import React from "react";
import styled from "styled-components";

import Gradient from "../Gradient";
import Container from "../Grid/Container";
import Row from "../Grid/Row";
import { mediumAndUp, largeAndUp, xLargeAndUp } from "../../theme/mediaQueries";

const Background = styled(Gradient)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  min-height: 218px;
  max-height: 278px;
  z-index: 1;
`;

const Wrapper = styled.section`
  position: relative;
  width: 100%;
`;

const ContainerWrapper = styled(Container)`
  z-index: 2;
  position: relative;
  min-height: 218px;
  max-height: 278px;
`;

const ContainerRow = styled(Row)`
  align-items: flex-end;
  height: 158px;
  position: relative;
`;

const ImageWrapper = styled.div`
  ${mediumAndUp`
    position: absolute;
    top: 50%;
  `};

  ${largeAndUp`top: 30%;`};
  ${xLargeAndUp`top: 20%;`};
`;

const ImageHeader = ({ children, from, to, deg, style }) => (
  <Wrapper style={style}>
    <Background from={from} to={to} deg={deg} />
    <ContainerWrapper>
      <ContainerRow>{children}</ContainerRow>
    </ContainerWrapper>
  </Wrapper>
);

ImageHeader.propTypes = {
  ...Gradient.propTypes
};

ImageHeader.ImageWrapper = ImageWrapper;

export default ImageHeader;
