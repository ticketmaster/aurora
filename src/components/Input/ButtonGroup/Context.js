import React from "react";

export const { Provider, Consumer } = React.createContext({
  selected: null,
  onChange: null
});

export const withButtonGroupConsumer = Component => props => (
  <Consumer>
    {({ onChange: onGroupChange, value: groupValue = {} }) => (
      <Component
        onGroupChange={onGroupChange}
        groupValue={groupValue}
        {...props}
      />
    )}
  </Consumer>
);
