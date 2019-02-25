import styled from 'styled-components';
import Flex from "../../Flex";
import COLORS from "../../../theme/colorThemes";
import SPACING from "../../../theme/spacing";

const {global} = COLORS;

const Header = styled(Flex)`
  border-left: none;
  border: ${SPACING.slim} solid ${global.white.base};
  cursor: pointer;
  padding: 12px 0;

  :hover {
    background: ${global.primary.light};
  }
`

export default Header;