const shouldAnimate = (isOpen) => {
  console.log('shouldAnimate: ', isOpen);
  return isOpen ? "expand open" : "collapse open"
};

export default shouldAnimate;