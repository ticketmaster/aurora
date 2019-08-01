import BASE_STYLE_DISPLAY from "../baseStyleDisplay";

describe("BASE_STYLE_DISPLAY", () => {
  it("should return the correct values", () => {
    expect(BASE_STYLE_DISPLAY).toMatchSnapshot();
  });
});
