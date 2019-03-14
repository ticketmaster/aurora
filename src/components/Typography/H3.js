import styled from "styled-components";
import classnames from "classnames";

import { fontWeight, fontSize, BASE_STYLE_HEADER } from "../../mixins";
import { largeAndUp } from "../../theme/mediaQueries";
import { REGULAR, ONYX, BASE } from "../constants";

const H3 = styled.h3.attrs(
  ({ weight = REGULAR, color = ONYX, variant = BASE }) => ({
    className: classnames({
      h3: true,
      [`h3--${weight}`]: !!weight,
      [`h3--${color}-${variant}`]: !!(color && variant)
    })
  })
)`
  ${fontWeight("regular")}
  ${BASE_STYLE_HEADER}
  ${fontSize`giga`} ${largeAndUp`${fontSize`tera`}`};
`;

export default H3;
