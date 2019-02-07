import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-areas: "chevron date section section section section cta";
  grid-template-columns: 58px 116px 1fr 1fr 1fr 1fr 50px;
  grid-gap: 0px;
  padding: 10px;

  /* && div {
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 1px 0;
    font-size: 16px;
  } */

  && .section-header {
    grid-area: section;
  }
  && .section-cta {
    grid-area: cta;
  }
  && .section-chevron {
    grid-area: chevron;
  }

  && .section-date {
    grid-area: date;
  }
`;

const Section = ({ children, ...rest }) => (
  <Grid className="grid" {...rest}>
    {children}
  </Grid>
);

export default Section;
