import styled from "styled-components";
import classnames from "classnames";

import { fontSize, BASE_STYLE_BODY } from "../../mixins";
import { REGULAR, ONYX, BASE } from "../constants";

const P3 = styled.p.attrs(
  ({ weight = REGULAR, color = ONYX, variant = BASE }) => ({
    className: classnames({
      p3: true,
      [`p3--${weight}`]: !!weight,
      [`p3--${color}-${variant}`]: !!(color && variant)
    })
  })
)`
  ${BASE_STYLE_BODY};
  ${fontSize`uno`};
`;

export default P3;
