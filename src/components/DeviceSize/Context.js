import React from "react";

export const { Provider, Consumer } = React.createContext({ isSmall: true });

export const withDeviceSize = Component => props => (
  <Consumer>{value => <Component deviceSize={value} {...props} />}</Consumer>
);
