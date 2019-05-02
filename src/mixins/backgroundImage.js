import { css } from "styled-components";

import { getBackgroundImage } from "../utils";

const backgroundImage = ({ backgroundImage: bgImage, deg, stops }) =>
  (bgImage || (deg && stops)) &&
  css`
    background-image: ${getBackgroundImage({
      backgroundImage: bgImage,
      deg,
      stops
    })};
  `;

export default backgroundImage;
