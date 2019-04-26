import { getBackgroundImage } from "../";

describe("getBackgroundImage", () => {
  it("should return a background-image style rule value when a backgroundImage arg is passed", () => {
    expect(
      getBackgroundImage({
        backgroundImage: "https://placekitten.com/g/826/465"
      })
    ).toMatchSnapshot();
  });

  it("should return a background-image style rule value when deg and stops args are passed", () => {
    expect(
      getBackgroundImage({
        deg: "256deg",
        stops: ["rgb(0, 45, 161)", "rgb(2, 108, 223) 55%", "rgb(0, 45, 161)"]
      })
    ).toMatchSnapshot();
  });

  it("should return a background-image style rule value when backgroundImage, deg, and stops args are passed", () => {
    expect(
      getBackgroundImage({
        backgroundImage: "https://placekitten.com/g/826/465",
        deg: "256deg",
        stops: ["rgb(0, 45, 161)", "rgb(2, 108, 223) 55%", "rgb(0, 45, 161)"]
      })
    ).toMatchSnapshot();
  });

  it("should return no rule value when only a deg arg is passed", () => {
    expect(
      getBackgroundImage({
        deg: "256deg"
      })
    ).toMatchSnapshot();
  });

  it("should return no rule value when only a stops arg is passed", () => {
    expect(
      getBackgroundImage({
        stops: ["rgb(0, 45, 161)", "rgb(2, 108, 223) 55%", "rgb(0, 45, 161)"]
      })
    ).toMatchSnapshot();
  });
});
