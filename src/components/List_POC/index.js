import React, { createContext } from "react";
import styled from "styled-components";

import Accordion from "./Accordion";
import Content from "./Content";
import Title from "./Title";
import Toggleable from "./Toggleable";
import ToggleItem from "./ToggleItem";

const { Consumer, Provider } = createContext();

const StyledList = styled.div`
  * {
    border: 1px dashed grey;
    display: flex;
  }
`;

function List({ children, type, ...rest }) {
  console.log(type);
  return (
    <Provider value={{ type }}>
      <StyledList>{children}</StyledList>
    </Provider>
  );
}

List.Consumer = Consumer;
List.Content = Content;
List.Title = Title;
List.Toggleable = Toggleable;
List.AccordionItem = ToggleItem;
List.Accordion = Accordion;

export default List;
