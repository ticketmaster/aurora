import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import SearchWithDeviceSize, { SearchInputFeature } from "../SearchFeature";

describe("WithDeviceSize", () => {
  it("should match snapshot", () => {
    const tree = renderer
      .create(
        <SearchWithDeviceSize
          placeholder="Search Demo"
          value=""
          onChange={() => {}}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe("SearchInputFeature", () => {
  it("searchClick stop propagation, prevent default, change state and call inputFocus, when isSmall true", () => {
    const instance = renderer
      .create(
        <SearchInputFeature
          placeholder="Search Demo"
          value=""
          onChange={() => {}}
          deviceSize={{ isSmall: true }}
        />
      )
      .getInstance();

    const spyState = jest
      .spyOn(instance, "setState")
      .mockImplementation(() => {});
    const event = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn()
    };

    instance.searchClick(event);

    expect(event.preventDefault).toHaveBeenCalledTimes(1);
    expect(event.stopPropagation).toHaveBeenCalledTimes(1);
    expect(spyState).toHaveBeenCalledTimes(1);

    spyState.mockRestore();
  });

  it("searchClick do nothing, when not small and xsmall screen", () => {
    const instance = renderer
      .create(
        <SearchInputFeature
          placeholder="Search Demo"
          value=""
          onChange={() => {}}
          deviceSize={{ xLarge: true }}
        />
      )
      .getInstance();

    const spyState = jest.spyOn(instance, "setState");
    const event = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn()
    };
    const focusMock = jest.fn();

    instance.mobileRef.current = {
      focusInput: focusMock
    };

    instance.searchClick(event);

    expect(event.preventDefault).toHaveBeenCalledTimes(0);
    expect(event.stopPropagation).toHaveBeenCalledTimes(0);
    expect(focusMock).toHaveBeenCalledTimes(0);
    expect(spyState).toHaveBeenCalledTimes(0);

    spyState.mockRestore();
  });

  it("cancelClick should set isMobileVisible to false and call cancelCallback", () => {
    const cancelMock = jest.fn();
    const instance = renderer
      .create(
        <SearchInputFeature
          placeholder="Search Demo"
          value=""
          onChange={() => {}}
          deviceSize={{ isSmall: true }}
          cancelCallback={cancelMock}
        />
      )
      .getInstance();

    const spyState = jest.spyOn(instance, "setState");

    instance.cancelClick();

    expect(cancelMock).toHaveBeenCalledTimes(1);
    expect(spyState).toHaveBeenCalledTimes(1);
    expect(spyState).toHaveBeenCalledWith({
      isMobileVisible: false
    });

    spyState.mockRestore();
  });
});
