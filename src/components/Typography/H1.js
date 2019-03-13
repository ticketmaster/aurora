import styled from "styled-components";
import classnames from "classnames";

import { fontWeight, fontSize, BASE_STYLE_HEADER } from "../../mixins";
import { largeAndUp } from "../../theme/mediaQueries";
import { EXTRA_BOLD, ONYX, BASE } from "../constants";

const H1 = styled.h1.attrs(
  ({ weight = EXTRA_BOLD, color = ONYX, variant = BASE }) => ({
    className: classnames({
      h1: true,
      [`h1--${weight}`]: !!weight,
      [`h1--${color}-${variant}`]: !!(color && variant)
    })
  })
)`
  ${fontWeight("extraBold")}
  ${BASE_STYLE_HEADER}
  ${fontSize`zetta`} ${largeAndUp`${fontSize`bronto`}`};
`;

export default H1;
