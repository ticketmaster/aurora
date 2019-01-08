import styled from "styled-components";

import { typography } from "../../theme";
import { getFontColor, getThemedFontColor } from "../../utils/typography";
import { responsiveSizeMixin } from "../../utils/responsiveSize";

const Base = styled.span`
  ${({ size }) => responsiveSizeMixin(size)};
  font-weight: ${({ weight }) => typography.weight[weight]};
  line-height: ${typography.lineHeight.body};
  text-transform: ${({ allCaps }) => (allCaps ? "uppercase" : "none")};
  ${({ monospace }) => (monospace ? `font-feature-settings: "tnum"` : "")};
  color: ${({ theme, themed, variant, accent, primary, secondary, disabled }) =>
    theme && themed
      ? getThemedFontColor({
          theme,
          variant,
          accent,
          primary,
          secondary,
          disabled
        })
      : getFontColor({ variant, accent, primary, secondary, disabled })};
`;

export default Base;
