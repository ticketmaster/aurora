import styled from "styled-components";

import { fontWeight, fontSize, BASE_STYLE_HEADER } from "../../mixins";
import { largeAndUp } from "../../theme/mediaQueries";
import { REGULAR, ONYX, BASE } from "../constants";
import typographyClassnames from "./helpers";

const H3 = styled.h3.attrs(
  ({ weight = REGULAR, color = ONYX, variant = BASE }) => ({
    className: typographyClassnames("h3", { weight, color, variant })
  })
)`
  ${fontWeight`regular`}
  ${BASE_STYLE_HEADER}
  ${fontSize`giga`} ${largeAndUp`${fontSize`tera`}`};
`;

H3.displayName = "Typography.H3";

export default H3;
