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

describe("KeyBoardProvider", () => {
  afterEach(cleanup);

  it("Up outside range of number of Children ", () => {
    const { getByTestId, container } = renderIntoDocument(
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

    fireEvent.keyDown(getByTestId("button0"), { keyCode: 38 });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("Up within range of number of Children", () => {
    const { getByTestId, container } = renderIntoDocument(
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

    fireEvent.keyDown(getByTestId("button0"), { keyCode: 38 });
    fireEvent.keyDown(getByTestId("button0"), { keyCode: 38 });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("Down within range of number of Children", () => {
    const { getByTestId, container } = renderIntoDocument(
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

    fireEvent.keyDown(getByTestId("button0"), { keyCode: 40 });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("Down outside range of number of Children ", () => {
    const { getByTestId, container } = renderIntoDocument(
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

    fireEvent.keyDown(getByTestId("button0"), { keyCode: 40 });
    fireEvent.keyDown(getByTestId("button0"), { keyCode: 40 });
    fireEvent.keyDown(getByTestId("button0"), { keyCode: 40 });
    fireEvent.keyDown(getByTestId("button0"), { keyCode: 40 });
    fireEvent.keyDown(getByTestId("button0"), { keyCode: 40 });

    expect(container.firstChild).toMatchSnapshot();
  });
  it("Down outside range of number of Children ", () => {
    const { getByTestId, container } = renderIntoDocument(
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

    fireEvent.keyDown(getByTestId("button0"), { keyCode: 3 });

    expect(container.firstChild).toMatchSnapshot();
  });
});
