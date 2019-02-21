import styled, {css} from 'styled-components';
import Flex from "../../Flex"

const Body = styled(Flex)`
 & > *:nth-child(3){
   margin-top: 4px;
 }
`

export default Body;