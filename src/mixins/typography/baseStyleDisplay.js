import { css } from "styled-components";

import lineHeight from "./lineHeight";
import fontSize from "./fontSize";
import themeColor from "./themeColor";
import { largeAndUp, mediumAndUp } from "../../theme/mediaQueries";

const BASE_STYLE_DISPLAY = css`
  ${themeColor`gray01`};
  ${fontSize`tera`};
  ${lineHeight`header`};

  ${mediumAndUp`
        ${fontSize`zetta`};
    `} ${largeAndUp`
        ${fontSize`bronto`};
    `};
`;

export default BASE_STYLE_DISPLAY;
