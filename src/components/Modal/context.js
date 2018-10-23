import React from "react";

const { Provider, Consumer } = React.createContext();

export { Provider as ModalProvider };
export { Consumer as ModalConsumer };

export const withModal = Component => props => (
  <Consumer>{value => <Component modal={value} {...props} />}</Consumer>
);
