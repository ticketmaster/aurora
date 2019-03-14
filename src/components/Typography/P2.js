import styled from "styled-components";
import classnames from "classnames";

import { fontSize, BASE_STYLE_BODY } from "../../mixins";
import { REGULAR, ONYX, BASE } from "../constants";

const P2 = styled.p.attrs(
  ({ weight = REGULAR, color = ONYX, variant = BASE }) => ({
    className: classnames({
      p2: true,
      [`p2--${weight}`]: !!weight,
      [`p2--${color}-${variant}`]: !!(color && variant)
    })
  })
)`
  ${BASE_STYLE_BODY};
  ${fontSize`hecto`};
`;

export default P2;
