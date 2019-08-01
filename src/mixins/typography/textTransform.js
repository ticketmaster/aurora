import { css } from "styled-components";

const textTransform = tT =>
  tT &&
  css`
    text-transform: ${tT};
  `;

export default textTransform;
