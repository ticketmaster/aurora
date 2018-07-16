import React from "react";
import PropTypes from "prop-types";

import StyledResponsiveImage from "./Responsive.styles";
import StyledImageSeo from "./Seo.styles";

const ResponsiveImage = ({ loader, src, alt, height, width, ...props }) =>
  loader || (
    <StyledResponsiveImage image={src} height={height} width={width} {...props}>
      <StyledImageSeo src={src} alt={alt} />
    </StyledResponsiveImage>
  );

ResponsiveImage.propTypes = {
  loader: PropTypes.node,
  src: PropTypes.string,
  alt: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
};

ResponsiveImage.defaultProps = {
  loader: null,
  src: "",
  alt: "",
  ratio: 100,
  height: 1,
  width: 1
};

export default ResponsiveImage;
