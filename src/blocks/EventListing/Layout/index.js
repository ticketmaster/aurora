import styled from "styled-components";

import Collapsed from "./Collapsed";
import Open from "./Open";

const Layout = styled.div`
  display: grid;
  width: 100%;
`;

Layout.Open = Open;
Layout.Collapsed = Collapsed;

export default Layout;
