import styled from "styled-components";

import spacing from "../../theme/spacing";
import { mediumAndUp } from "../../theme/mediaQueries";

const Row = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  margin-left: ${(spacing.gutters.small / 2) * -1}px;
  margin-right: ${(spacing.gutters.small / 2) * -1}px;
  ${mediumAndUp`
    margin-left: ${(spacing.gutters.mediumAndUp / 2) * -1}px;
    margin-right: ${(spacing.gutters.mediumAndUp / 2) * -1}px;
  `};
  & & {
    flex: 0 1 100%;
    margin-left: 0;
    margin-right: 0;
  }
`;

Row.displayName = "Row";

export default Row;
