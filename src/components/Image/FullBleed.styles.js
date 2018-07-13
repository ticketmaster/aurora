import styled from "styled-components";
import PropTypes from "prop-types";

const ImageFullBleed = styled.img.attrs({
  className: "image image--full-bleed"
})`
  width: 100%;
  max-width: 100%;
`;

ImageFullBleed.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default ImageFullBleed;
