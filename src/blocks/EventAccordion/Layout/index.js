import styled from "styled-components";

import Collapsed from "./Collapsed";
import Open from "./Open";

const Layout = styled.div`
 display: grid;
 width: 100%;

 grid-template-areas:
      "title title title title "
      "subTitle subTitle subTitle subTitle "
      "badge badge badge badge "
      "extras extras extras extras ";

 grid-template-columns: repeat(1fr);
 grid-template-rows: min-content 1fr;

  .closed {
      grid-area: title / title / title / extras;
      z-index: 1;
  }

  .open {
      grid-area: title / title / title / extras;
      z-index: 2;
  }

`;

Layout.Open = Open;
Layout.Collapsed = Collapsed;

export default Layout;
