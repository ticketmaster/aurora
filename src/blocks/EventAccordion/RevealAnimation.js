import styled from "styled-components";

const RevealAnimation = styled.div`
  .expand {
    /* background-color: rgba(255,255,255,1); */
    max-height: 600px !imporant;
    -webkit-transition: max-height 0.3s cubic-bezier(0.455,0.03,0.515,0.955),opacity 0.3s cubic-bezier(0.455,0.03,0.515,0.955) 0.2s;
    transition: max-height 0.3s cubic-bezier(0.455,0.03,0.515,0.955),opacity 0.3s cubic-bezier(0.455,0.03,0.515,0.955) 0.2s;
    opacity: 1;
  }

  .collapse {
      transition: max-height 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s, opacity 0.1s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s;
      opacity: 0;
  }
`

export default RevealAnimation;