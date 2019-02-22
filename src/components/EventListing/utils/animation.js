const shouldAnimate = (isOpen, className) =>
  isOpen ? `${className} expand` : `${className} collapse`;

const shouldChangeHeight = (isOpen, className) => 
  isOpen ? `${className} maxHeight` : `${className} minHeight`;

export {shouldAnimate, shouldChangeHeight};
