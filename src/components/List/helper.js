export const updateOpenIndexSingle = (openIndex, dataIndex) => {
  if (openIndex === dataIndex) return -1;
  return dataIndex;
};

export const updateOpenIndexMultiple = (openIndex, dataIndex) => {
  const openIndexArr = Array.isArray(openIndex) ? openIndex : [];
  const currentOpenDataIndex = openIndexArr.indexOf(dataIndex);

  if (currentOpenDataIndex === -1) return openIndexArr.concat([dataIndex]);
  if (currentOpenDataIndex === 0) return openIndexArr.slice(1);

  const openIndexArrLen = openIndexArr.length;
  if (currentOpenDataIndex === openIndexArrLen - 1)
    return openIndexArr.slice(0, openIndexArrLen - 1);

  return openIndexArr
    .slice(0, currentOpenDataIndex)
    .concat(openIndexArr.slice(currentOpenDataIndex + 1));
};

export const updateOpenIndex = (expandMultiple, openIndex, dataIndex) =>
  expandMultiple
    ? updateOpenIndexMultiple(openIndex, dataIndex)
    : updateOpenIndexSingle(openIndex, dataIndex);

export const determineIfOpen = (expandMultiple, openIndex, index) =>
  expandMultiple
    ? Array.isArray(openIndex) && openIndex.includes(index)
    : openIndex === index;
