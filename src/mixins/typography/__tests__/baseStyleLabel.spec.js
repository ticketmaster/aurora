import BASE_STYLE_LABEL from "../baseStyleLabel";

describe("BASE_STYLE_LABEL", () => {
  it("should return the correct values", () => {
    expect(BASE_STYLE_LABEL).toMatchSnapshot();
  });
});
