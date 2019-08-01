import { css } from "styled-components";

import themeColor from "./themeColor";
import fontSize from "./fontSize";
import fontWeight from "./fontWeight";
import lineHeight from "./lineHeight";
import { mediumAndUp } from "../../theme/mediaQueries";

/**
 * HEADING_01 is intended for use as the styles for a page's main section headers
 */
const HEADING_01 = css`
  ${themeColor`gray01`};
  ${fontSize`giga`};
  ${fontWeight`semiBold`};
  ${lineHeight`header`};

  ${mediumAndUp`
        ${fontSize`tera`};
    `};
`;

export default HEADING_01;
