import styled from "styled-components";
import classnames from "classnames";

import { fontSize, BASE_STYLE_BODY } from "../../mixins";
import { REGULAR, ONYX, BASE } from "../constants";

const P1 = styled.p.attrs(
  ({ weight = REGULAR, color = ONYX, variant = BASE }) => ({
    className: classnames({
      p1: true,
      [`p1--${weight}`]: !!weight,
      [`p1--${color}-${variant}`]: !!(color && variant)
    })
  })
)`
  ${BASE_STYLE_BODY};
  ${fontSize`kilo`};
`;

export default P1;
