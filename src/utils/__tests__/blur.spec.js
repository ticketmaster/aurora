import { blur } from "..";

describe("blur", () => {
  it("calls blur method on event target", () => {
    const mock = jest.fn();
    const mockEvent = { target: { blur: mock } };

    blur(mockEvent);

    expect(mock).toHaveBeenCalled();
  });
});
