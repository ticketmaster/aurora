import styled, {css} from 'styled-components';

const Body = styled.div`
 display: flex;
 flex: 1 1;

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