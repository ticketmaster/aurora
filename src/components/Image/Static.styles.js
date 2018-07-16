import styled from "styled-components";
import PropTypes from "prop-types";

const StyledStaticImage = styled.img.attrs({
  className: "image image--static"
})`
  position: relative;
  width: 100%;
  max-width: 100%;
`;

StyledStaticImage.propTypes = {
  src: PropTypes.string.isRequired
};

export default StyledStaticImage;
