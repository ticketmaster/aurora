import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import classNames from "classnames";

import Gradient from "../Gradient";
import Container from "../Grid/Container";
import Row from "../Grid/Row";
import { smallAndUp } from "../../theme/mediaQueries";

const GradientBackground = Gradient.extend`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  min-height: 218px;
  max-height: 218px;
`;

const ImageBackground = GradientBackground.extend`
  background-size: cover;
  background-repeat: no-repeat;
`;

const Wrapper = styled.header`
  width: 100%;
  position: relative;
`;

const ContainerWrapper = styled(Container)`
  padding-top: 60px;
  z-index: 2;
`;

const ContainerRow = styled(Row)`
  align-items: center;
  position: relative;
  z-index: 2;
`;

const ImageWrapper = styled.div`
  ${smallAndUp`
      padding-top: 60px;
    `};
`;

const ImageHeader = ({
  children,
  from,
  to,
  deg,
  backgroundImage,
  backgroundImageProps,
  withOverlay,
  withUnderlay,
  ...props
}) => {
  const {
    style: backgroundImageStyle,
    ...otherBackgroundImageProps
  } = backgroundImageProps;
  return (
    <Wrapper {...props}>
      {backgroundImage ? (
        <ImageBackground
          style={{
            ...(backgroundImageStyle || {}),
            backgroundImage: `url(${backgroundImage})`
          }}
          {...otherBackgroundImageProps}
          className={classNames({
            "gradient--overlay": withOverlay,
            "gradient--underlay": withUnderlay
          })}
          aria-hidden
        />
      ) : (
        <GradientBackground
          from={from}
          to={to}
          deg={deg}
          className={classNames({
            "gradient--overlay": withOverlay,
            "gradient--underlay": withUnderlay
          })}
        />
      )}
      <ContainerWrapper>
        <ContainerRow>{children}</ContainerRow>
      </ContainerWrapper>
    </Wrapper>
  );
};

ImageHeader.propTypes = {
  ...Gradient.propTypes,
  backgroundImage: PropTypes.string,
  backgroundImageProps: PropTypes.objectOf(PropTypes.any),
  withOverlay: PropTypes.bool
};

ImageHeader.defaultProps = {
  backgroundImage: null,
  backgroundImageProps: {},
  withOverlay: false
};

ImageHeader.ImageWrapper = ImageWrapper;

export default ImageHeader;
