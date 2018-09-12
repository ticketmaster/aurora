import {
  updateOpenIndexSingle,
  updateOpenIndexMultiple,
  updateOpenIndex,
  determineIfOpen
} from "../helper";

describe("updateOpenIndexSingle", () => {
  it("should return -1 if openIndex equals dataIndex", () => {
    expect(updateOpenIndexSingle(1, 1)).toEqual(-1);
  });

  it("should return dataIndex by default", () => {
    expect(updateOpenIndexSingle(-1, 1)).toEqual(1);
  });
});

describe("updateOpenIndexMultiple", () => {
  it("should concatenate dataIndex with an openIndex that is converted to an array when opening a new listing", () => {
    expect(updateOpenIndexMultiple(-1, 1)).toEqual([1]);
  });

  it("should concatenate dataIndex with openIndex when opening a new listing", () => {
    expect(updateOpenIndexMultiple([2, 3], 1)).toEqual([2, 3, 1]);
  });

  it("should remove a listing index at index 0 from openIndex", () => {
    expect(updateOpenIndexMultiple([1], 1)).toEqual([]);
  });

  it("should remove a listing index at the last index from openIndex", () => {
    expect(updateOpenIndexMultiple([3, 2, 1], 1)).toEqual([3, 2]);
  });

  it("should remove a listing index in the middle of openIndex", () => {
    expect(updateOpenIndexMultiple([1, 3, 5, 2, 0], 5)).toEqual([1, 3, 2, 0]);
  });
});

describe("updateOpenIndex", () => {
  it("should return -1 if openIndex equals dataIndex and expandMultiple equals false", () => {
    expect(updateOpenIndex(false, 1, 1)).toEqual(-1);
  });

  it("should return dataIndex by default and expandMultiple equals false", () => {
    expect(updateOpenIndex(false, -1, 1)).toEqual(1);
  });

  it("should concatenate dataIndex with an openIndex that is converted to an array when opening a new listing  and expandMultiple equals true", () => {
    expect(updateOpenIndex(true, -1, 1)).toEqual([1]);
  });

  it("should concatenate dataIndex with openIndex when opening a new listing  and expandMultiple equals true", () => {
    expect(updateOpenIndex(true, [2, 3], 1)).toEqual([2, 3, 1]);
  });

  it("should remove a listing index at index 0 from openIndex  and expandMultiple equals true", () => {
    expect(updateOpenIndex(true, [1], 1)).toEqual([]);
  });

  it("should remove a listing index at the last index from openIndex  and expandMultiple equals true", () => {
    expect(updateOpenIndex(true, [3, 2, 1], 1)).toEqual([3, 2]);
  });

  it("should remove a listing index in the middle of openIndex  and expandMultiple equals true", () => {
    expect(updateOpenIndex(true, [1, 3, 5, 2, 0], 5)).toEqual([1, 3, 2, 0]);
  });
});

describe("determineIfOpen", () => {
  it("should return true if openIndex equals index and expandMultiple equals false", () => {
    expect(determineIfOpen(false, 1, 1)).toEqual(true);
  });

  it("should return false if openIndex does not equal index and expandMultiple equals false", () => {
    expect(determineIfOpen(false, 0, 1)).toEqual(false);
  });

  it("should return true if openIndex includes index and expandMultiple equals true", () => {
    expect(determineIfOpen(true, [1], 1)).toEqual(true);
  });

  it("should return false if openIndex does not include index and expandMultiple equals true", () => {
    expect(determineIfOpen(true, [0], 1)).toEqual(false);
  });
});
