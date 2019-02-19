import styled from "styled-components";
import COLORS from "../../theme/colors";

const Date = styled.div`
  color: ${COLORS.azure.hoverLight};
  text-align: left;
  && p:first-child {
    color: #904eba;
  }
`;

export default Date;
