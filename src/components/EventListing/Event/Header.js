import styled from 'styled-components';
import Flex from "../../Flex";
import COLORS from "../../../theme/colorThemes";
import SPACING from "../../../theme/spacing";

const {global} = COLORS;

const Header = styled(Flex)`
  border-left: none;
  cursor: pointer;
  padding: 12px 8px 0;

  :hover {
    background: ${global.primary.light};
  }
`

export default Header;