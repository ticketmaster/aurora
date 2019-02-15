import styled from "styled-components";
import { mediumAndUp } from "../../../theme/mediaQueries";

const Collapsed = styled.div`
  display: grid;
  width: 100%;

  grid-template-columns: repeat(1fr);
  grid-template-rows: repeat(1fr);

  /* Mobile */
  grid-template-areas:
      "title title title title "
      "subTitle subTitle subTitle subTitle "
      "badge badge badge badge "
      "extras extras extras extras ";

  /* desktop */
  ${mediumAndUp`  
    grid-template-areas:
        "title title title badge "
        "subTitle subTitle subTitle badge "
        "extras extras extras extras ";
  `}

  .extras {
      grid-area: extras;
      display: flex;
      justify-content: flex-start;
  }

  .title {
      grid-area: title;
  }

  .badgeIcon {
      grid-area: badge;
      text-align: center;
  }

  .subTitle {
      grid-area: subTitle;
  }
`;

export default Collapsed;
