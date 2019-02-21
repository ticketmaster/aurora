import styled from 'styled-components';
import Flex from "../../Flex";
import {themes} from "../../../theme";

const Header = styled(Flex)`
  padding: 12px 0;
  border: 4px solid white;
  border-left: none;
  cursor: pointer;

  :hover {
    background: ${themes.tm.primary.light};
  }
`

export default Header;