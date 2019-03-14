import styled from "styled-components";

import { fontSize, BASE_STYLE_BODY } from "../../mixins";
import { REGULAR, ONYX, BASE } from "../constants";
import typographyClassnames from "./helpers";

const P2 = styled.p.attrs(
  ({ weight = REGULAR, color = ONYX, variant = BASE }) => ({
    className: typographyClassnames("p2", { weight, color, variant })
  })
)`
  ${BASE_STYLE_BODY};
  ${fontSize`hecto`};
`;

P2.displayName = "P2";

export default P2;
