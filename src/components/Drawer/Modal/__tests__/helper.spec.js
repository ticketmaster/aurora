import {
  getContentHeight,
  getBottomActionBarShadow,
  getActionBarShadow,
  isRequestCloseApproved
} from "../helper";

const TEST_1 = [
  {
    actionBar: {
      clientHeight: 20
    },
    bottomActionBar: {
      clientHeight: 40
    },
    container: {
      clientHeight: 200
    }
  },
  "140px"
];

const TEST_2 = [
  {
    actionBar: {
      clientHeight: 20
    },
    container: {
      clientHeight: 200
    }
  },
  "180px"
];

const TEST_3 = [
  {
    bottomActionBar: {
      clientHeight: 40
    },
    container: {
      clientHeight: 200
    }
  },
  "160px"
];

const TEST_4 = [
  {
    container: {
      clientHeight: 200
    }
  },
  "200px"
];

describe("getContentHeight", () => {
  [TEST_1, TEST_2, TEST_3, TEST_4].forEach(([input, expected]) => {
    it("should calculate content height correctly", () => {
      const contentHeight = getContentHeight(input);

      expect(contentHeight).toBe(expected);
    });
  });
});

describe("getActionBarShadow", () => {
  it("should be true when the content is scrolled", () => {
    const shadow = getActionBarShadow({
      content: {
        scrollTop: 1
      }
    });

    expect(shadow).toBe(true);
  });

  it("should be false when the content is not scrolled", () => {
    const shadow = getActionBarShadow({
      content: {
        scrollTop: 0
      }
    });

    expect(shadow).toBe(false);
  });
});

describe("getBottomActionBarShadow", () => {
  it("should be true when content has an oveflow", () => {
    const shadow = getBottomActionBarShadow({
      content: {
        scrollHeight: 100,
        scrollTop: 20,
        clientHeight: 50
      }
    });

    expect(shadow).toBe(true);
  });

  it("should be false when content fits the window", () => {
    const shadow = getBottomActionBarShadow({
      content: {
        scrollHeight: 100,
        scrollTop: 0,
        clientHeight: 100
      }
    });

    expect(shadow).toBe(false);
  });
});

describe("isRequestCloseApproved", () => {
  it("should be true when the callback was not passed", async () => {
    const decision = await isRequestCloseApproved({ onRequestClose: null });

    expect(decision).toBe(true);
  });

  it("should be true when the callback returns fullfilled promise", async () => {
    const decision = await isRequestCloseApproved({
      onRequestClose: () => Promise.resolve(true)
    });

    expect(decision).toBe(true);
  });

  it("should be true when the callback returns undefined (nothing)", async () => {
    const decision = await isRequestCloseApproved({
      onRequestClose: () => undefined
    });

    expect(decision).toBe(true);
  });

  it("should be true when the callback returns fullfilled promise of undefined", async () => {
    const decision = await isRequestCloseApproved({
      onRequestClose: () => Promise.resolve(undefined)
    });

    expect(decision).toBe(true);
  });

  it("should be true when the callback returns fullfilled promise of truthly value", async () => {
    const decision = await isRequestCloseApproved({
      onRequestClose: () => Promise.resolve({})
    });

    expect(decision).toBe(true);
  });

  it("should be false when the callback returns false", async () => {
    const decision = await isRequestCloseApproved({
      onRequestClose: () => false
    });

    expect(decision).toBe(false);
  });

  it("should be false when the callback returns rejected promise", async () => {
    const decision = await isRequestCloseApproved({
      onRequestClose: () => Promise.reject(Error("For some reason"))
    });

    expect(decision).toBe(false);
  });

  it("should be false when the callback returns fullfilled promise of false", async () => {
    const decision = await isRequestCloseApproved({
      onRequestClose: () => Promise.resolve(false)
    });

    expect(decision).toBe(false);
  });
});
