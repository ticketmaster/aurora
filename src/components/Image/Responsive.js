import React from "react";
import PropTypes from "prop-types";

import StyledResponsiveImage from "./Responsive.styles";
import StyledImageSeo from "./Seo.styles";

const ResponsiveImage = ({
  loader,
  src,
  alt,
  height,
  width,
  children,
  ...props
}) =>
  loader || (
    <StyledResponsiveImage image={src} height={height} width={width} {...props}>
      <StyledImageSeo src={src} alt={alt} height={height} width={width} />
      {children}
    </StyledResponsiveImage>
  );

ResponsiveImage.propTypes = {
  loader: PropTypes.node,
  src: PropTypes.string,
  alt: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  children: PropTypes.node
};

ResponsiveImage.defaultProps = {
  loader: null,
  src: "",
  alt: "",
  height: 1,
  width: 1,
  children: null
};

export default ResponsiveImage;
