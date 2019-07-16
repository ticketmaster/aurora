import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import colors from "../../theme/colors";

const RoundContainer = styled.div`
  border: solid 1px ${colors.lightGray};
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  position: relative;
  padding-top: ${({ size }) => (size ? `${size}px` : "100%")};
  width: ${({ size }) => (size ? `${size}px` : "100%")};
`;

const Image = styled.img`
  position: absolute;
  height: 100%;
  width: auto;
  top: 0;
`;
const ThumbnailCircle = ({ size, src, alt, ...props }) => (
  <RoundContainer size={size}>
    {props.image || <Image src={src} alt={alt} />}
  </RoundContainer>
);

ThumbnailCircle.defaultProps = {
  alt: "",
  src: "",
  image: null,
  size: 0
};

ThumbnailCircle.propTypes = {
  size: PropTypes.number,
  src: PropTypes.string,
  alt: PropTypes.string,
  image: PropTypes.element
};

export default ThumbnailCircle;
