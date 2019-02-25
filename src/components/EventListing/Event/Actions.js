import styled from 'styled-components';
import Flex from "../../Flex"
import typography from "../../../theme/typography";

const { weight } = typography;


const Actions = styled(Flex)`
  margin-top: 16px;

  button {
    font-weight: ${weight.semiBold};
    line-height: 36px;
    margin-bottom: 4px;
    max-height: 36px;
    min-width: 106px;
  }
`

export default Actions;