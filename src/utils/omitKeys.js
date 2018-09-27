const omitKeys = (keys = [], obj = {}) =>
  Object.keys(obj).reduce((acc, key) => {
    if (keys.includes(key)) return acc;
    acc[key] = obj[key];
    return acc;
  }, {});

export default omitKeys;
