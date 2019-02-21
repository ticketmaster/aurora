import { css } from "styled-components";
import CONSTANTS from "./constants";

const { easing: EASING } = CONSTANTS;

const boxShadow = css`box-shadow 0.3s ${EASING.easeInOutQuad} 0s`;
const marginBottom = css`margin-bottom 0.3s ${EASING.easeInOutQuad} 0s`;
const maxHeight = css`max-height 0.3s ${EASING.easeInOutQuad} 0s`;
const opacity = css`opacity 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.2s`;

const accordionSectionText = css`
  .collapse {
    transition: opacity 0.1s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s;
    opacity: 0;
    visibility: hidden;
  }
  .expand {
    transition: opacity 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0.2s;
    opacity: 1;
    visibility: visible;
  }
`;

const collapse = css`
  opacity: 0;
    max-height: 0;
  visibility: collapse;
  transition: ${maxHeight}, ${opacity}, ${marginBottom};
  /* max-height 0.3s ${EASING.easeInQuad}, */
  /* opacity 0.1s ${EASING.easeInQuad};   */
`;
const expand = css`
  max-height: 600px;
    opacity: 1;
    visibility: visible;
  transition: ${maxHeight}, ${opacity}, ${marginBottom};
  /* max-height 0.3s ${EASING.easeInOutQuad} 0s,
    opacity 0.3s ${EASING.easeInOutQuad} 0.2s; */
`;

const expandCollapse = css`
  .expand {
    ${expand} max-height: 600px;
    opacity: 1;
    visibility: visible;
  }

  .collapse {
    ${collapse} opacity: 0;
    height: 0;
    visibility: collapse;
  }
`;

const hover = css`
  background-color: rgba(2, 108, 223, 0.1);
  -webkit-transition: background-color 100ms linear;
  -ms-transition: background-color 100ms linear;
  transition: background-color 100ms linear;
`;

export {
  collapse,
  expand,
  accordionSectionText,
  expandCollapse,
  hover,
  boxShadow,
  marginBottom,
  maxHeight,
  opacity
};
