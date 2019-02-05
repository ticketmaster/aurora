import React from "react";
import Toggleable from "./Toggleable";

const ToggleItem = props => (
  <Toggleable>
    {(show, onClick) => (
      <React.Fragment>
        <div onClick={onClick}>
          <h4>{props.title}</h4>
        </div>
        {show && props.children}
      </React.Fragment>
    )}
  </Toggleable>
);

export default ToggleItem;
