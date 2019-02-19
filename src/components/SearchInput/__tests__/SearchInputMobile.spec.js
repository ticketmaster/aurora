import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import SearchInputMobile from "../SearchInputMobile";

describe("SearchInputMobile", () => {
  it("should match snapshot", () => {
    const tree = renderer
      .create(
        <SearchInputMobile
          placeholder="Search Demo"
          value=""
          onChange={() => {}}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
  it("should match snapshot when mobile opened", () => {
    const component = renderer.create(
      <SearchInputMobile
        placeholder="Search Demo"
        value=""
        onChange={() => {}}
      />
    );

    component.getInstance().setState({
      isMobileVisible: true
    });

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("searchClick stop propagation, prevent default, change state and call inputFocus", () => {
    const instance = renderer
      .create(
        <SearchInputMobile
          placeholder="Search Demo"
          value=""
          onChange={() => {}}
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

  it("cancelClick should set isMobileVisible to false and call cancelCallback", () => {
    const cancelMock = jest.fn();
    const instance = renderer
      .create(
        <SearchInputMobile
          placeholder="Search Demo"
          value=""
          onChange={() => {}}
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
