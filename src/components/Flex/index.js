import styled from "styled-components";

import {
  AlignContent,
  AlignItems,
  AlignSelf,
  Display,
  FlexDirection,
  FlexWrap,
  Grow,
  JustifyContent,
  Shrink
} from "./utils"

const Flex = styled.div`
  align-items: ${AlignItems};
  align-content: ${AlignContent};
  align-self: ${AlignSelf};
  display: ${Display};
  flex: ${Grow} ${Shrink} ${({basis}) => basis || null};
  flex-flow: ${FlexDirection} ${FlexWrap};
  justify-content: ${JustifyContent};
`;

export default Flex;