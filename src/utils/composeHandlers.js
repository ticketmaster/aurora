const composeHandlers = (...fns) => (...args) => {
  fns.forEach(fn => fn && fn(...args));
};

export default composeHandlers;
