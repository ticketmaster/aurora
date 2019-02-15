import styled from "styled-components";
import { mediumAndUp } from "../../theme/mediaQueries";

const ActionArea = styled.div`
  display: grid;
  grid-template-areas: "gutter button"
                       "gutter text";

  grid-template-rows: auto 1fr;
  margin-left:16px;
  margin-top: 12px;
  
  .cta-button {
    display:none;
    grid-area: button;
    max-height: 36px;
    width: 102px;
  }

  .cta-text {
    display: none;
    grid-area: text;
    text-align: right;
    margin-top: 4px;
  }

  ${mediumAndUp`
    margin-right: 16px;
    width: auto;

    .cta-button, .cta-text, .chevron { display: inline; }
    .cta-ellipsis { display: none; }
  `}
`;

export default ActionArea;
