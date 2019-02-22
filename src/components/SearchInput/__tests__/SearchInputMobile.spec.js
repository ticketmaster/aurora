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

  it("openSearch change state and call inputFocus and onFocus prop", () => {
    const onFocusMock = jest.fn();
    const instance = renderer
      .create(
        <SearchInputMobile
          placeholder="Search Demo"
          value=""
          onChange={() => {}}
          onFocus={onFocusMock}
        />
      )
      .getInstance();

    const spyState = jest
      .spyOn(instance, "setState")
      .mockImplementation(() => {});

    instance.openSearch();

    expect(spyState).toHaveBeenCalledTimes(1);
    expect(onFocusMock).toHaveBeenCalledTimes(1);

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
