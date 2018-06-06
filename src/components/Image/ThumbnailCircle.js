import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import colors from "../../theme/colors";

const RoundContainer = styled.div`
  border: solid 1px ${colors.lightGray};
  align-items: center;
  justify-content: center;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
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
  size: 40
};

ThumbnailCircle.propTypes = {
  size: PropTypes.number,
  src: PropTypes.string,
  alt: PropTypes.string,
  image: PropTypes.element
};

export default ThumbnailCircle;
