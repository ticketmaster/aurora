import {css} from "styled-components";

const expandCollapse = css`
 .expand {
    max-height: 600px !imporant;
    max-width: 1080px;
    -webkit-transition: max-height 0.3s cubic-bezier(0.455,0.03,0.515,0.955),
                        opacity 0.3s cubic-bezier(0.455,0.03,0.515,0.955) 0.2s;
    -o-transition: max-height 0.3s cubic-bezier(0.455,0.03,0.515,0.955),
                   opacity 0.3s cubic-bezier(0.455,0.03,0.515,0.955) 0.2s;
    transition: max-height 0.3s cubic-bezier(0.455,0.03,0.515,0.955),
                opacity 0.3s cubic-bezier(0.455,0.03,0.515,0.955) 0.2s;

    opacity: 1;
    visibility: visible;
  }

  .collapse {
      -webkit-transition: 
        max-height 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s,
        opacity 0.1s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s;
      -o-transition: 
        max-height 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s,
        opacity 0.1s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s;
      transition: 
        max-height 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s,
        opacity 0.1s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s;
      opacity: 0;
      height: 0;
      max-width: 0;
      visibility: hidden;
  }
`

const hover = css`
  background-color: rgba(2, 108, 223, 0.1);
  -webkit-transition: background-color 100ms linear;
  -ms-transition: background-color 100ms linear;
  transition: background-color 100ms linear;
`

export {
  expandCollapse,
  hover
}