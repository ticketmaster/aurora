import styled from "styled-components";
import COLORS from "../../../theme/colors";
import Flex from "../../Flex"

const Date = styled(Flex)`
  color: ${COLORS.azure.hoverLight};
  margin-right: 8px;
  min-width: 106px;
  && p:first-child {
    color: #904eba;
    text-transform: uppercase;
  }
`;

export default Date;
