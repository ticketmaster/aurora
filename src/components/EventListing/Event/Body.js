import styled, {css} from 'styled-components';
import Flex from "../../Flex"
import spacing from "../../../theme/spacing";

const Body = styled(Flex)`
 & > *:nth-child(3){
   margin-top: ${spacing.slim};
 }
`

export default Body;