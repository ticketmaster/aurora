import styled from "styled-components";

import colors from "../../theme/colors";
import constants from "../../theme/constants";

export default styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${constants.borderRadius.large};
  background-color: ${colors.white.base};
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.08), 0 0 4px 0 rgba(0, 0, 0, 0.16);
`;
