import styled from "styled-components";
import classnames from "classnames";

import { fontWeight, fontSize, BASE_STYLE_HEADER } from "../../mixins";
import { largeAndUp } from "../../theme/mediaQueries";
import { REGULAR, ONYX, BASE } from "../constants";

const H2 = styled.h2.attrs(
  ({ weight = REGULAR, color = ONYX, variant = BASE }) => ({
    className: classnames({
      h2: true,
      [`h2--${weight}`]: !!weight,
      [`h2--${color}-${variant}`]: !!(color && variant)
    })
  })
)`
  ${fontWeight("regular")}
  ${BASE_STYLE_HEADER}
  ${fontSize`tera`} ${largeAndUp`${fontSize`zetta`}`};
`;

export default H2;
