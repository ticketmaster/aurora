import styled from "styled-components";

import { fontSize, BASE_STYLE_BODY } from "../../mixins";
import { REGULAR, ONYX, BASE } from "../constants";
import typographyClassnames from "./helpers";

const P4 = styled.p.attrs(
  ({ weight = REGULAR, color = ONYX, variant = BASE }) => ({
    className: typographyClassnames("p4", { weight, color, variant })
  })
)`
  ${BASE_STYLE_BODY};
  ${fontSize`mini`};
`;

P4.displayName = "P4";

export default P4;
