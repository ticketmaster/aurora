import styled from "styled-components";
import COLORS from "../../../theme/colors";

const Date = styled.div`
  color: ${COLORS.azure.hoverLight};
  margin-right: 8px;
  min-width: 106px;
  
  p {font-size: 14px;}

  && p:first-child {
    color: #904eba;
  }
`;

export default Date;
