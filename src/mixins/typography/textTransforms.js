import { css } from "styled-components";

const textTransforms = css`
  ${({ textTransform: tT }) => tT && `text-transform: ${tT};`};
`;

export default textTransforms;
