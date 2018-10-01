import styled from "styled-components";
import { mediumAndUp } from "../../theme/mediaQueries";
import spacing from "../../theme/spacing";

const Container = styled.div`
  margin: 0 auto;
  max-width: ${({ theme = {} } = {}) => theme.maxWidth || "1440px"};
  width: 100%;
  padding-left: ${spacing.gutters.small}px;
  padding-right: ${spacing.gutters.small}px;
  box-sizing: border-box;
  ${mediumAndUp`
    padding-left: ${spacing.gutters.mediumAndUp}px;
    padding-right: ${spacing.gutters.mediumAndUp}px;
  `};
`;

Container.displayName = "Container";

export default Container;
