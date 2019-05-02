import { responsiveLinearGradient } from "../";

describe("responsiveLinearGradient", () => {
  it("should return a background-image style rule when deg and stops args are passed", () => {
    expect(
      responsiveLinearGradient({
        deg: { small: "256deg" },
        stops: ["rgb(0, 45, 161)", "rgb(2, 108, 223) 55%", "rgb(0, 45, 161)"]
      })
    ).toMatchSnapshot();
  });

  it("should return a background-image style rule when deg and stops args are passed", () => {
    expect(
      responsiveLinearGradient({
        deg: { small: "256deg" },
        stops: ["rgb(0, 45, 161)", "rgb(2, 108, 223) 55%", "rgb(0, 45, 161)"]
      })
    ).toMatchSnapshot();
  });

  it("should return a background-image style rule for multiple device sizes when deg and stops args are passed", () => {
    expect(
      responsiveLinearGradient({
        deg: { small: "256deg", medium: "240deg", large: "220deg" },
        stops: ["rgb(0, 45, 161)", "rgb(2, 108, 223) 55%", "rgb(0, 45, 161)"]
      })
    ).toMatchSnapshot();
  });

  it("should return no rule when only a deg arg is passed", () => {
    expect(
      responsiveLinearGradient({
        deg: { small: "256deg" }
      })
    ).toMatchSnapshot();
  });

  it("should return no rule when only a stops arg is passed", () => {
    expect(
      responsiveLinearGradient({
        stops: ["rgb(0, 45, 161)", "rgb(2, 108, 223) 55%", "rgb(0, 45, 161)"]
      })
    ).toMatchSnapshot();
  });
});
