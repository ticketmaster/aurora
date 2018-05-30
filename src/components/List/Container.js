import styled from "styled-components";
import colors from "../../theme/colors";
import constants from "../../theme/constants";

export default styled.div`
  width: 100%;
  border: 1px solid ${colors.lightGray};
  border-radius: ${constants.borderRadius.large};
  overflow: hidden;
`;
