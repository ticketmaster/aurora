import styled from "styled-components";

const StyledImageSeo = styled.img.attrs({
  className: "image image--seo image--hidden"
})`
  position: absolute;
  visibility: hidden;
  height: 0;
  width: 0;
  top: 0;
  left: 0;
`;

export default StyledImageSeo;
