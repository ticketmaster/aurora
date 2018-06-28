const composeHandler = (...args) => e => {
  args.forEach(fn => fn && fn(e));
};

export default composeHandler;
