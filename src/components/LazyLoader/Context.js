import { createContext } from "react";

import { PLACEHOLDER_IMAGE } from "./constants";

const { Provider, Consumer } = createContext({
  src: PLACEHOLDER_IMAGE,
  style: null,
  imageRef: null,
  load: () => {}
});

export { Provider, Consumer as LazyLoaderConsumer };
