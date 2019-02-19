const shouldAnimate = (isOpen, className) =>
  isOpen ? `${className} expand` : `${className} collapse`;

export default shouldAnimate;
