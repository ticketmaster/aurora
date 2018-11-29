const createParams = obj =>
  Object.keys(obj).reduce((qs, key) => {
    if (typeof obj[key] !== "undefined") {
      const sep = qs.length ? "&" : "?";
      qs += `${sep}${key}=${encodeURIComponent(obj[key])}`; // eslint-disable-line
    }
    return qs;
  }, "");

export default createParams;
