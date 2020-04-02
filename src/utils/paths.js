export const pathOr = (defaultValue, path = [], data) => {
  if (!path || path.length === 0 || !data) return defaultValue;

  const paths = path.length;
  let i = 0;
  let result = data;
  while (i < paths) {
    result = result[path[i]];
    // eslint-disable-next-line no-plusplus
    i++;
    if (!result) return defaultValue;
  }

  return result;
};

export const path = (_path, data) => pathOr(undefined, _path, data);
