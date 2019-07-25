/* eslint-disable no-param-reassign */
export default fn => (...input) => {
  const args = Array.prototype.slice.call(input);

  fn.cache = fn.cache || {};

  const result = fn.cache[args]
    ? fn.cache[args]
    : (fn.cache[args] = fn.apply(this, args));

  return result;
};
