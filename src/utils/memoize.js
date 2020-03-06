/* eslint-disable no-param-reassign */
export default fn => (...input) => {
  const args = Array.prototype.slice.call(input);
  const argsToMemo = JSON.stringify(args);

  fn.cache = fn.cache || {};

  const result = fn.cache[argsToMemo]
    ? fn.cache[argsToMemo]
    : (fn.cache[argsToMemo] = fn.apply(this, args));

  return result;
};
