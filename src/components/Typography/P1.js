import styled from "styled-components";

import { fontSize, BASE_STYLE_BODY } from "../../mixins";
import { REGULAR, ONYX, BASE } from "../constants";
import typographyClassnames from "./helpers";

const P1 = styled.p.attrs(
  ({ weight = REGULAR, color = ONYX, variant = BASE }) => ({
    className: typographyClassnames("p1", { weight, color, variant })
  })
)`
  ${BASE_STYLE_BODY};
  ${fontSize`kilo`};
`;

P1.displayName = "Typography.P1";

export default P1;
