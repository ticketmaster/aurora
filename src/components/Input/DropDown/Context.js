import React from "react";

export const { Provider, Consumer } = React.createContext({
  isOpen: null,
  onClose: null
});
