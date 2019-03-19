import styled from "styled-components";

import { fontWeight, fontSize, BASE_STYLE_HEADER } from "../../mixins";
import { largeAndUp } from "../../theme/mediaQueries";
import { REGULAR, ONYX, BASE } from "../constants";
import typographyClassnames from "./helpers";

const H2 = styled.h2.attrs(
  ({ weight = REGULAR, color = ONYX, variant = BASE }) => ({
    className: typographyClassnames("h2", { weight, color, variant })
  })
)`
  ${fontWeight`regular`}
  ${BASE_STYLE_HEADER}
  ${fontSize`tera`} ${largeAndUp`${fontSize`zetta`}`};
`;

H2.displayName = "H2";

export default H2;
