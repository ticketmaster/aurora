import LABEL_CAPS_01 from "../labelCaps01";

describe("LABEL_CAPS_01", () => {
  it("should return the correct values", () => {
    expect(LABEL_CAPS_01).toMatchSnapshot();
  });
});
