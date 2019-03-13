import styled from "styled-components";
import classnames from "classnames";

import { fontSize, BASE_STYLE_BODY } from "../../mixins";
import { REGULAR, ONYX, BASE } from "../constants";

const P4 = styled.p.attrs(
  ({ weight = REGULAR, color = ONYX, variant = BASE }) => ({
    className: classnames({
      p4: true,
      [`p4--${weight}`]: !!weight,
      [`p4--${color}-${variant}`]: !!(color && variant)
    })
  })
)`
  ${BASE_STYLE_BODY};
  ${fontSize`mini`};
`;

export default P4;
