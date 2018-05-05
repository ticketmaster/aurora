import styled from "styled-components";
import constants from "../../theme/constants";
import spacing from "../../theme/spacing";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  width: calc(100% - ${spacing.gutters.small * 2}px);
  box-sizing: border-box;
  & > *,
  *:after,
  *:before {
    box-sizing: border-box;
  }
  @media screen and ${constants.breakpoints.mediumAndUp} {
    width: calc(100% - ${spacing.gutters.mediumAndUp * 2}px);
  }
`;

export default Container;
