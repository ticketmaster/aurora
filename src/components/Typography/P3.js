import styled from "styled-components";

import { fontSize, BASE_STYLE_BODY } from "../../mixins";
import { REGULAR, ONYX, BASE } from "../constants";
import typographyClassnames from "./helpers";

const P3 = styled.p.attrs(
  ({ weight = REGULAR, color = ONYX, variant = BASE }) => ({
    className: typographyClassnames("p3", { weight, color, variant })
  })
)`
  ${BASE_STYLE_BODY};
  ${fontSize`uno`};
`;

P3.displayName = "P3";

export default P3;
