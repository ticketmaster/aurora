import React from "react";
import { render, renderIntoDocument, fireEvent } from "react-testing-library";

import { ESCAPE } from "../../../utils/keyCharCodes";

import Backdrop from "../index";

let win;

describe("<Backdrop />", () => {
  const childRef = {
    current: {
      contains: () => false
    }
  };

  beforeEach(() => {
    if (!win) win = global.window;
    global.window = null;
  });

  afterEach(() => {
    global.window = win;
  });

  it("renders correctly with an overlay", () => {
    const { container } = render(
      <Backdrop childRef={childRef}>
        <div>Component under test</div>
      </Backdrop>
    );

    expect(container).toMatchSnapshot();
  });

  it("renders correctly without an overlay", () => {
    const { container } = render(
      <Backdrop childRef={childRef} overlay={false}>
        <div>Component under test</div>
      </Backdrop>
    );

    expect(container).toMatchSnapshot();
  });

  it("calls the onRequestClose callback on pressing the ESC key", () => {
    const closeSpy = jest.fn();

    render(
      <Backdrop childRef={childRef} onRequestClose={closeSpy}>
        <div>Component under test</div>
      </Backdrop>
    );

    fireEvent.keyDown(global.document, {
      keyCode: ESCAPE
    });

    expect(closeSpy).toHaveBeenCalled();
  });

  it("calls the onRequestClose function on clicking overlay", () => {
    const closeSpy = jest.fn();

    const { getByTestId } = renderIntoDocument(
      <Backdrop
        childRef={childRef}
        overlayProps={{ "data-testid": "overlay" }}
        onRequestClose={closeSpy}
      >
        <div>Component under test</div>
      </Backdrop>
    );

    fireEvent.click(getByTestId("overlay"));

    expect(closeSpy).toHaveBeenCalled();
  });

  describe("component lifecycle", () => {
    const rel = document.removeEventListener;

    beforeAll(() => {
      document.removeEventListener = jest.fn();
    });

    beforeEach(() => {
      rel.mockClear();
    });

    afterAll(() => {
      document.removeEventListener = rel;
    });
  });

  it("cleans up events on unmount", () => {
    document.removeEventListener = jest.fn();

    const { unmount } = render(
      <Backdrop childRef={childRef}>
        <div>Component under test</div>
      </Backdrop>
    );

    unmount();

    expect(document.removeEventListener).toHaveBeenCalledTimes(2);
  });
});
