import { css } from "styled-components";

import themeColor from "./themeColor";
import fontWeight from "./fontWeight";
import lineHeight from "./lineHeight";

const BASE_STYLE_LABEL = css`
  ${themeColor`gray01`};
  ${fontWeight`semiBold`};
  ${lineHeight`header`};
`;

export default BASE_STYLE_LABEL;
