import React from "react";
import PropTypes from "prop-types";

import StyledStaticImage from "./Static.styles";

const StaticImage = ({ loader, src, alt, height, width, ...props }) =>
  loader || (
    <StyledStaticImage
      src={src}
      alt={alt}
      height={height}
      width={width}
      {...props}
    />
  );

StaticImage.propTypes = {
  loader: PropTypes.node,
  src: PropTypes.string,
  alt: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
};

StaticImage.defaultProps = {
  loader: null,
  src: "",
  alt: "",
  height: 1,
  width: 1
};

export default StaticImage;
