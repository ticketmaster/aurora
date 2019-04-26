import { css } from "styled-components";

import backgroundImage from "./backgroundImage";
import { mediumAndUp, largeAndUp } from "../theme/mediaQueries";

const responsiveBackgroundImage = ({ backgroundImage: bgImage, deg, stops }) =>
  (bgImage || (deg && stops)) &&
  css`
    ${backgroundImage({
      backgroundImage: bgImage,
      deg: deg && deg.small,
      stops
    })}

    ${deg &&
      deg.medium &&
      mediumAndUp`${backgroundImage({
        backgroundImage: bgImage,
        deg: deg.medium,
        stops
      })}`}

    ${deg &&
      deg.large &&
      largeAndUp`${backgroundImage({
        backgroundImage: bgImage,
        deg: deg.large,
        stops
      })}`}
`;

export default responsiveBackgroundImage;
