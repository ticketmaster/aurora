import { css } from "styled-components";
import CONSTANTS from "./constants";

const { easing: EASING } = CONSTANTS;

const borderRadius = css`margin-bottom 0.3s ${EASING.easeInOutQuad} 0s`
const boxShadow = css`box-shadow 0.3s ${EASING.easeInOutQuad} 0s`;
const marginBottom = css`margin-bottom 0.3s ${EASING.easeInOutQuad} 0s`;
const maxHeight = css`max-height 0.3s ${EASING.easeInOutQuad} 0s`;
const opacity = css`opacity 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.2s`;



const accordionSectionText = css`
  .collapse {
    opacity: 0;
    transition: opacity 0.1s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s;
    visibility: hidden;
  }
  .expand {
    opacity: 1;
    transition: opacity 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.2s;
    visibility: visible;
  }
`;

const minTransitionHeight = css`
  height: auto;
  max-height: 300px;
  transition: ${maxHeight};
`;

const maxTransitionHeight = css`
  max-height: 600px;
  transition: ${maxHeight};
`

const adjustHeight = css`
   .minHeight { ${minTransitionHeight}}
   .maxHeight { ${maxTransitionHeight} }
`;

const collapse = css`
  max-height: 0;
  opacity: 0;
  visibility: collapse;
  transition: ${maxHeight}, ${opacity}, ${marginBottom};
`;
const expand = css`
  max-height: 600px;
  opacity: 1;
  visibility: visible;
  transition: ${maxHeight}, ${opacity}, ${marginBottom};
`;

const expandCollapse = css`
  .expand { ${expand} }
  .collapse { ${collapse} }
`;

const hover = css`
  background-color: rgba(2, 108, 223, 0.1);
  -webkit-transition: background-color 100ms linear;
  -ms-transition: background-color 100ms linear;
  transition: background-color 100ms linear;
`;

export {
  adjustHeight,
  accordionSectionText,
  borderRadius,
  boxShadow,
  collapse,
  expand,
  expandCollapse,
  hover,
  marginBottom,
  maxHeight,
  opacity
};
