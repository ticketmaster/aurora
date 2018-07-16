import React from "react";
import PropTypes from "prop-types";

import StyledImage from "./index.styles";
import StyledImageSeo from "./Seo.styles";

const Image = ({ loader, src, alt, height, width, ...props }) =>
  loader || (
    <StyledImage src={src} height={height} width={width} {...props}>
      <StyledImageSeo src={src} alt={alt} />
    </StyledImage>
  );

Image.propTypes = {
  loader: PropTypes.node,
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

Image.defaultProps = {
  loader: null,
  src: "",
  alt: "",
  width: 1,
  height: 1
};

export default Image;
