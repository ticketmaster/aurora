import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";

import { HeaderWithImage, LazyLoader, Button } from "../../../src";

const UPDATED_IMAGE =
  "https://s1.ticketm.net/dam/v/432/81675bfd-4ea4-4adc-aa61-7c299a4dc432_406601_SOURCE.jpg";

class LazyHeaderWithImageExample extends PureComponent {
  constructor(props) {
    super(props);
    const { backgroundImage } = props;

    this.state = {
      backgroundImage
    };
  }

  onUpdateImage = () => {
    const { backgroundImage: backgroundImageState } = this.state;
    const { backgroundImage: backgroundImageProp } = this.props;

    this.setState({
      backgroundImage:
        backgroundImageState === UPDATED_IMAGE
          ? backgroundImageProp
          : UPDATED_IMAGE
    });
  };

  render() {
    const { backgroundImage } = this.state;
    const {
      backgroundImageProps,
      withUnderlay,
      withOverlay,
      withSpotLight,
      children,
      height,
      width
    } = this.props;

    return (
      <LazyLoader
        src={backgroundImage}
        height={height}
        width={width}
        style={backgroundImageProps.style || {}}
        tag="span"
      >
        {({
          src: lazySrc,
          style: lazyStyle,
          imageRef,
          backgroundRef,
          load,
          isLoaded
        }) => (
          <Fragment>
            <HeaderWithImage
              withUnderlay={withUnderlay}
              withOverlay={withOverlay}
              withSpotLight={withSpotLight}
              backgroundImage={lazySrc}
              backgroundImageProps={{
                ...backgroundImageProps,
                imageRef,
                backgroundRef,
                style: { ...lazyStyle, ...(backgroundImageProps.style || {}) }
              }}
            >
              {children}
            </HeaderWithImage>
            <Button
              key="load"
              variant="standard"
              disabled={isLoaded}
              style={{
                position: "absolute",
                bottom: "36px",
                maxWidth: "400px"
              }}
              onClick={() => load(true)}
            >
              Load image
            </Button>
            <Button
              key="standard"
              variant="special"
              style={{
                position: "absolute",
                bottom: "0px",
                maxWidth: "400px"
              }}
              onClick={this.onUpdateImage}
            >
              Update image
            </Button>
          </Fragment>
        )}
      </LazyLoader>
    );
  }
}

LazyHeaderWithImageExample.propTypes = {
  backgroundImage: PropTypes.string,
  backgroundImageProps: PropTypes.objectOf(PropTypes.any),
  withOverlay: PropTypes.bool,
  withUnderlay: PropTypes.bool,
  withSpotLight: PropTypes.bool,
  children: PropTypes.node,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
};

LazyHeaderWithImageExample.defaultProps = {
  backgroundImage: null,
  backgroundImageProps: {},
  withOverlay: false,
  withUnderlay: false,
  withSpotLight: false,
  children: null
};

export default LazyHeaderWithImageExample;
