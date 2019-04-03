import styled from "styled-components";

import { fontWeight, fontSize, BASE_STYLE_HEADER } from "../../mixins";
import { REGULAR, ONYX, BASE } from "../constants";
import typographyClassnames from "./helpers";

const H4 = styled.h4.attrs(
  ({ weight = REGULAR, color = ONYX, variant = BASE }) => ({
    className: typographyClassnames("h4", { weight, color, variant })
  })
)`
  ${fontWeight`regular`}
  ${BASE_STYLE_HEADER}
  ${fontSize`giga`};
`;

H4.displayName = "Typography.H4";

export default H4;
