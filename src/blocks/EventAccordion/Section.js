import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-areas: "chevron date section section section section cta";
  grid-template-columns: 16px 116px 1fr 1fr 1fr 1fr 50px;
  grid-gap: 16px 16px;
  background-color: #2196f314;
  padding: 10px;

  && div {
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 1px 0;
    font-size: 16px;
  }

  && .section {
    grid-area: section;
  }
  && .cta {
    grid-area: cta;
  }
  && .chevron {
    grid-area: chevron;
  }

  && .date {
    grid-area: date;
  }
`;

const Section = ({ children, ...rest }) => (
  <Grid className="grid" {...rest}>
    {children}
  </Grid>
);

export default Section;
