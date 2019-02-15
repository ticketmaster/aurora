import styled from "styled-components";
import COLORS from "../../theme/colors";

const Date = styled.div`
  color: ${COLORS.azure.hoverLight};
  display: block;
  flex-direction: column;
  min-width: 116px;

  && p:first-child {
    color: #904eba;
  }
`;

export default Date;