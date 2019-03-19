import React from "react";
import renderer from "react-test-renderer";

import LinkCta from "../LinkCta";

describe("LinkCta", () => {
  it("renders a default LinkCta", () => {
    expect(
      renderer
        .create(<LinkCta href="http://localhost/">I am a link</LinkCta>)
        .toJSON()
    ).toMatchSnapshot();
  });

  it("renders a button when only onclick is provided", () => {
    expect(
      renderer
        .create(<LinkCta onClick={() => {}}>I am a link</LinkCta>)
        .toJSON() // eslint-disable-line
    ).toMatchSnapshot();
  });

  it("renders a span when no href or onClick provided", () => {
    expect(
      renderer.create(<LinkCta>I am a link</LinkCta>).toJSON() // eslint-disable-line
    ).toMatchSnapshot();
  });

  it("activateFocusStyles should remove noFocus class from link", () => {
    const instance = renderer
      .create(<LinkCta>I am a link</LinkCta>)
      .getInstance();
    const mock = jest.fn();

    instance.link.current = {
      classList: {
        remove: mock
      }
    };
    instance.activateFocusStyles();

    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith("noFocus");
  });

  it("focusHandler should add keyup listener", () => {
    const instance = renderer
      .create(<LinkCta>I am a link</LinkCta>)
      .getInstance();
    const mock = jest.fn();
    global.window.addEventListener = mock;

    instance.focusHandler();

    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith("keyup", instance.activateFocusStyles);
  });

  it("componentWillUnmount should remove keyup listener", () => {
    const instance = renderer
      .create(<LinkCta>I am a link</LinkCta>)
      .getInstance();
    const mock = jest.fn();
    global.window.removeEventListener = mock;

    instance.componentWillUnmount();

    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith("keyup", instance.activateFocusStyles);
  });

  it("componentDidMount should add focus and blur listeners to link", () => {
    const instance = renderer
      .create(<LinkCta>I am a link</LinkCta>)
      .getInstance();
    const mock = jest.fn();

    instance.link.current = {
      addEventListener: mock
    };
    instance.componentDidMount();

    expect(mock).toHaveBeenCalledTimes(2);
    expect(mock).toHaveBeenCalledWith("focus", instance.focusHandler);
    expect(mock).toHaveBeenCalledWith("blur", instance.blurHandler);
  });

  it("blurHandler should add noFocus class to link and remove keyup listener", () => {
    const instance = renderer
      .create(<LinkCta>I am a link</LinkCta>)
      .getInstance();
    const mock = jest.fn();
    const mockKeyUp = jest.fn();

    instance.link.current = {
      classList: {
        add: mock
      }
    };
    global.window.removeEventListener = mockKeyUp;
    instance.blurHandler();

    expect(mockKeyUp).toHaveBeenCalledTimes(1);
    expect(mockKeyUp).toHaveBeenCalledWith(
      "keyup",
      instance.activateFocusStyles
    );
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith("noFocus");
  });

  it("static size from typography", () => {
    expect(
      renderer.create(<LinkCta size="normal">I am a link</LinkCta>).toJSON() // eslint-disable-line
    ).toMatchSnapshot();
  });

  it("static size as pixels", () => {
    expect(
      renderer.create(<LinkCta size="20px">I am a link</LinkCta>).toJSON() // eslint-disable-line
    ).toMatchSnapshot();
  });

  it("renders correctly with reverse colors", () => {
    expect(
      renderer
        .create(
          <LinkCta href="#" reverseColors>
            I am a link
          </LinkCta>
        )
        .toJSON() // eslint-disable-line
    ).toMatchSnapshot();
  });
});
