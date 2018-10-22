import React from "react";
import { renderIntoDocument, cleanup, fireEvent } from "react-testing-library";

import Provider from "../Provider";
import { Consumer } from "../Context";

const TesingConsumers = (
  { children, index, datatestid } // eslint-disable-line
) => (
  <Consumer>
    {({ focused }) => (
      <div data-isfocues={focused === index} data-testid={datatestid}>
        {children}
      </div>
    )}
  </Consumer>
);

const createTestElement = () => (
  <Provider role="option">
    <TesingConsumers datatestid="button0" index={0}>
      Testing1
    </TesingConsumers>
    <TesingConsumers datatestid="button1" index={1}>
      Testing2
    </TesingConsumers>
    <TesingConsumers datatestid="button2" index={2}>
      Testing3
    </TesingConsumers>
    <TesingConsumers datatestid="button3" index={3}>
      Testing4
    </TesingConsumers>
  </Provider>
);

const createTestElementSelected = (selected = []) => (
  <Provider selected={selected} role="option">
    <TesingConsumers value="button0" datatestid="button0" index={0}>
      Testing1
    </TesingConsumers>
    <TesingConsumers value="button1" datatestid="button1" index={1}>
      Testing2
    </TesingConsumers>
    <TesingConsumers value="button2" datatestid="button2" index={2}>
      Testing3
    </TesingConsumers>
    <TesingConsumers value="button3" datatestid="button3" index={3}>
      Testing4
    </TesingConsumers>
  </Provider>
);

describe("KeyBoardProvider", () => {
  afterEach(cleanup);

  it("Up outside range of number of Children ", () => {
    const { getByTestId, container } = renderIntoDocument(createTestElement());

    fireEvent.keyDown(getByTestId("button0"), { keyCode: 38 });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("Up within range of number of Children", () => {
    const { getByTestId, container } = renderIntoDocument(createTestElement());

    fireEvent.keyDown(getByTestId("button0"), { keyCode: 38 });
    fireEvent.keyDown(getByTestId("button0"), { keyCode: 38 });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("Down within range of number of Children", () => {
    const { getByTestId, container } = renderIntoDocument(createTestElement());

    fireEvent.keyDown(getByTestId("button0"), { keyCode: 40 });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("Down outside range of number of Children ", () => {
    const { getByTestId, container } = renderIntoDocument(createTestElement());

    fireEvent.keyDown(getByTestId("button0"), { keyCode: 40 });
    fireEvent.keyDown(getByTestId("button0"), { keyCode: 40 });
    fireEvent.keyDown(getByTestId("button0"), { keyCode: 40 });
    fireEvent.keyDown(getByTestId("button0"), { keyCode: 40 });
    fireEvent.keyDown(getByTestId("button0"), { keyCode: 40 });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("Down outside range of number of Children ", () => {
    const { getByTestId, container } = renderIntoDocument(createTestElement());

    fireEvent.keyDown(getByTestId("button0"), { keyCode: 3 });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("Change focus position when 'selected' prop was changed from outside ", () => {
    const { getByTestId, container, rerender } = renderIntoDocument(
      createTestElementSelected(["button0"])
    );

    fireEvent.keyDown(getByTestId("button0"), { keyCode: 40 });

    rerender(createTestElementSelected(["button3"]));

    expect(container.firstChild).toMatchSnapshot();
  });

  it("Set default focus position when 'selected' prop is invalid on the first update ", () => {
    const { container } = renderIntoDocument(
      createTestElementSelected(["nonexistent-value"])
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it("Reset focus position when 'selected' prop was changed from outside ", () => {
    const { getByTestId, container, rerender } = renderIntoDocument(
      createTestElementSelected(["button0"])
    );

    fireEvent.keyDown(getByTestId("button0"), { keyCode: 40 });

    rerender(createTestElementSelected(["nonexistent-value"]));

    expect(container.firstChild).toMatchSnapshot();
  });
});
