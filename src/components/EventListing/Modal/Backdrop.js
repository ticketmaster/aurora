import styled from 'styled-components';
import Flex from "../../Flex";

const Backdrop = styled(Flex)`
  align-items: center;
  background-color: rgba(0,0,0,.5);
  height: 100%;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99; 
`;

export default Backdrop;
