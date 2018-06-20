import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import colors from "../../theme/colors";

const Image = styled.img`
  border: solid 1px ${colors.lightGray};
  align-items: center;
  justify-content: center;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
`;

const CircleImage = ({ size, src, alt, ...props }) => (
  <Image size={size} {...props} src={src} alt={alt} />
);

CircleImage.propTypes = {
  size: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default CircleImage;
