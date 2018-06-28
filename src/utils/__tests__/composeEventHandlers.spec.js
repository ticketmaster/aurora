import composeEventHandlers from "../composeEventHandlers";

describe("composeEventHandlers", () => {
  const mockEvent = { target: "element" };

  it("calls single event handler", () => {
    const mock = jest.fn();
    const handler = composeEventHandlers(mock);

    handler(mockEvent);

    expect(mock).toHaveBeenCalledWith(mockEvent);
  });

  it("calls multiple event handlers", () => {
    const mock1 = jest.fn();
    const mock2 = jest.fn();
    const mock3 = jest.fn();
    const handler = composeEventHandlers(mock1, mock2, mock3);

    handler(mockEvent);

    expect(mock1).toHaveBeenCalledWith(mockEvent);
    expect(mock2).toHaveBeenCalledWith(mockEvent);
    expect(mock3).toHaveBeenCalledWith(mockEvent);
  });
});
