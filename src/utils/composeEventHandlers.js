const composeHandler = (...fns) => (...args) => {
  fns.forEach(fn => fn && fn(...args));
};

export default composeHandler;
