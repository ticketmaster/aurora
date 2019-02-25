import styled from "styled-components";
import Flex from "../../Flex"
import SPACING from "../../../theme/spacing";
import COLORS from "../../../theme/colors";

const Date = styled(Flex)`
  color: ${COLORS.azure.hoverLight};
  margin-right: ${SPACING.cozy};
  min-width: 106px;
  && p:first-child {
    color: ${COLORS.azure.base};
    text-transform: uppercase;
  }
`;

export default Date;
