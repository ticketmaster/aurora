import styled from "styled-components";
import { mediumAndUp } from "../../theme/mediaQueries";

const ActionArea = styled.div`
  display: grid;
  grid-template-rows: 8px 8px auto 8px 0px;
  grid-template-columns: 8px 8px 8px 0px;
  grid-template-areas:". top     top"
                      ". Button  ellipsis "
                      ". Button  ellipsis "
                      ". bottom  bottom"
                      ". .       .";
  
  .cta-button {
    display:none;
    grid-area: button;
    max-height: 36px;
    width: 102px;
  }

  .cta-ellipsis {
    display: inline;
    grid-area: ellipsis;
    max-height: 36px;
    max-width: 16px;
    min-width: none;
    padding: 0;
  }

  .cta-btn-ellipsis {
    grid-area: top / top / bottom / bottom;
    margin: 0;
    padding: 0;
    text-align: left;
  }

  .cta-text {
    display: none;
    grid-area: text;
    text-align: right;
    margin-top: 4px;
  }

  ${mediumAndUp`
    grid-template-rows: 16px auto auto auto 16px;
    grid-template-columns: 8px auto auto auto 16px;
    grid-template-areas:  ". .      ."
                          ". button ."
                          ". button ."
                          ". text   ."
                          ". .      .";
                          
    .cta-button, .cta-text { display: inline; }
    .cta-ellipsis, .cta-btn-ellipsis { display: none; }
  `}
`;

export default ActionArea;
