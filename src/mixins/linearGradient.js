import { css } from "styled-components";

const linearGradient = ({ deg, stops }) =>
  deg &&
  stops &&
  css`
    background-image: linear-gradient(${deg}, ${stops.join(", ")});
  `;

export default linearGradient;
