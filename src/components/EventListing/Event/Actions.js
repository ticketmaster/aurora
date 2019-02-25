import styled from 'styled-components';
import Flex from "../../Flex"
import typography from "../../../theme/typography";
import spacing from "../../../theme/spacing";

const { weight } = typography;

const Actions = styled(Flex)`
  margin-top: 11px;
  button, a {
    font-weight: ${weight.semiBold};
    justify-content: center;
    line-height: 36px;
    margin-bottom: ${spacing.slim};
    max-height: 36px;
    min-width: 106px;
  }
`

export default Actions;