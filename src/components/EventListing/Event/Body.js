import styled, {css} from 'styled-components';
import Flex from "../../Flex"

const Body = styled(Flex)`
 display: flex;
 flex: 1 1;

 & > *:nth-child(3){
   margin-top: 4px;
 }

 ${({isOpen}) =>
    isOpen
    ?
      css`
        align-items: center;
      `
    :
      css`
        align-items: flex-start;
      `
 }

 align-items: ${({align}) => (align || null)};
 flex-direction: ${({direction}) => (direction || null)};
`

export default Body;