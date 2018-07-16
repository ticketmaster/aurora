import styled from "styled-components";
import PropTypes from "prop-types";

const StyledImage = styled.div.attrs({
  className: "image"
})`
  position: relative;
  height: 0;
  width: 100%;
  padding-top: ${({ height, width }) => `${(height / width) * 100}%`};
  background-image: ${({ src }) => `url(${src})`};
  background-repeat: no-repeat;
  background-size: contain;
`;

StyledImage.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

export default StyledImage;
