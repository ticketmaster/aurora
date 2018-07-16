import styled from "styled-components";
import PropTypes from "prop-types";

const StyledResponsiveImage = styled.div.attrs({
  className: "image image--responsive"
})`
  position: relative;
  height: 0;
  width: 100%;
  padding-top: ${({ height, width }) => `${(height / width) * 100}%`};
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-size: contain;
`;

StyledResponsiveImage.propTypes = {
  image: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
};

export default StyledResponsiveImage;
