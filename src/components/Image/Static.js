import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import StyledStaticImage from "./Static.styles";

class StaticImage extends PureComponent {
  render() {
    const { loader, src, alt, height, width, imageRef, ...props } = this.props;
    return (
      loader || (
        <StyledStaticImage
          src={src}
          alt={alt}
          height={height}
          width={width}
          ref={imageRef}
          {...props}
        />
      )
    );
  }
}

StaticImage.propTypes = {
  loader: PropTypes.node,
  src: PropTypes.string,
  alt: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  imageRef: PropTypes.shape({
    current: PropTypes.object
  })
};

StaticImage.defaultProps = {
  loader: null,
  src: "",
  alt: "",
  height: 1,
  width: 1,
  imageRef: { current: null }
};

export default StaticImage;
