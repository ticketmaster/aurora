import React from "react";
import Title from "./Title";
import List from "./index";

function Content(props) {
  return (
    <List.Consumer>{({ type }) => <Title>List Content</Title>}</List.Consumer>
  );
}

export default Content;
