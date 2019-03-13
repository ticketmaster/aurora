import styled from "styled-components";
import classnames from "classnames";

import { fontWeight, fontSize, BASE_STYLE_HEADER } from "../../mixins";
import { REGULAR, ONYX, BASE } from "../constants";

const H4 = styled.h4.attrs(
  ({ weight = REGULAR, color = ONYX, variant = BASE }) => ({
    className: classnames({
      h4: true,
      [`h4--${weight}`]: !!weight,
      [`h4--${color}-${variant}`]: !!(color && variant)
    })
  })
)`
  ${fontWeight("regular")}
  ${BASE_STYLE_HEADER}
  ${fontSize`giga`};
`;

export default H4;
