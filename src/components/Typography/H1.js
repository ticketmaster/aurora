import styled from "styled-components";

import { fontWeight, fontSize, BASE_STYLE_HEADER } from "../../mixins";
import { largeAndUp } from "../../theme/mediaQueries";
import { ONYX, BASE, SEMI_BOLD } from "../constants";
import typographyClassnames from "./helpers";

const H1 = styled.h1.attrs(
  ({ weight = SEMI_BOLD, color = ONYX, variant = BASE }) => ({
    className: typographyClassnames("h1", { weight, color, variant })
  })
)`
  ${fontWeight`semiBold`}
  ${BASE_STYLE_HEADER}
  ${fontSize`zetta`} ${largeAndUp`${fontSize`bronto`}`};
`;

H1.displayName = "Typography.H1";

export default H1;
