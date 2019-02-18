import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";
import SearchInput from "../index";
import { Cancel, SearchSuggest } from "../Search.styles";
import { getSearchHeight } from "../constants";

describe("SearchSuggest", () => {
  it("should match snapshot", () => {
    const tree = renderer
      .create(
        <SearchSuggest placeholder="Search Demo" value="" onChange={() => {}} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe("SearchInput", () => {
  it("small should match snapshot", () => {
    const onChange = () => {};
    const onFocus = () => {};
    const onBlur = () => {};
    const searchIconSelect = () => {};
    const clearText = () => {};
    const cancelCallback = () => {};
    const tree = renderer
      .create(
        <SearchInput
          variant="small"
          placeholder="Search Demo"
          value="test"
          hasBackground
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          searchIconSelect={searchIconSelect}
          clearText={clearText}
          cancelCallback={cancelCallback}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("large should match snapshot", () => {
    const onChange = () => {};
    const tree = renderer
      .create(
        <SearchInput
          variant="large"
          placeholder="Search Demo"
          value=""
          hasBackground
          onChange={onChange}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("icon only should match snapshot", () => {
    const onChange = () => {};
    const tree = renderer
      .create(
        <SearchInput
          variant="large"
          placeholder="Search Demo"
          value=""
          iconOnly
          onChange={onChange}
          hasBackground
          isSuggestOpened
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("mobile and focused should match snapshot", () => {
    const onChange = () => {};
    const component = renderer.create(
      <SearchInput
        variant="large"
        placeholder="Search Demo"
        value=""
        iconOnly
        onChange={onChange}
        hasBackground
        isSuggestOpened
        isMobile
      />
    );

    component.getInstance().setState({
      isFocused: true
    });

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("cancelClick should remove focus and call cancelCallback", () => {
    const cancelMock = jest.fn();

    const instance = renderer
      .create(
        <SearchInput
          placeholder="Search Demo"
          value=""
          onChange={() => {}}
          cancelCallback={cancelMock}
        />
      )
      .getInstance();

    instance.cancelClick();

    expect(cancelMock).toHaveBeenCalledTimes(1);
    expect(instance.state.isFocused).toBeFalsy();
  });

  it("clearTextClick should call focusInput and clearText", () => {
    const clearMock = jest.fn();

    const instance = renderer
      .create(
        <SearchInput
          placeholder="Search Demo"
          value=""
          onChange={() => {}}
          clearText={clearMock}
        />
      )
      .getInstance();

    const focusSpy = jest
      .spyOn(instance, "focusInput")
      .mockImplementation(() => {});

    instance.clearTextClick();

    expect(clearMock).toHaveBeenCalledTimes(1);
    expect(focusSpy).toHaveBeenCalledTimes(1);

    focusSpy.mockRestore();
  });

  it("clearTextClick should not call focusInput and should call clearText", () => {
    const clearMock = jest.fn();

    const instance = renderer
      .create(
        <SearchInput
          placeholder="Search Demo"
          value=""
          onChange={() => {}}
          clearText={clearMock}
          isMobile
        />
      )
      .getInstance();

    const focusSpy = jest
      .spyOn(instance, "focusInput")
      .mockImplementation(() => {});

    instance.clearTextClick();

    expect(clearMock).toHaveBeenCalledTimes(1);
    expect(focusSpy).toHaveBeenCalledTimes(0);

    focusSpy.mockRestore();
  });

  it("searchIconClick should call focusInput and clearText", () => {
    const searchMock = jest.fn();

    const instance = renderer
      .create(
        <SearchInput
          placeholder="Search Demo"
          value=""
          onChange={() => {}}
          searchIconSelect={searchMock}
        />
      )
      .getInstance();
    const focusSpy = jest
      .spyOn(instance, "focusInput")
      .mockImplementation(() => {});

    instance.searchIconClick();

    expect(searchMock).toHaveBeenCalledTimes(1);
    expect(focusSpy).toHaveBeenCalledTimes(1);

    focusSpy.mockRestore();
  });

  it("containerClick should set inputClicked to true", () => {
    const instance = renderer
      .create(
        <SearchInput placeholder="Search Demo" value="" onChange={() => {}} />
      )
      .getInstance();

    const spyAdd = jest.spyOn(global.window, "addEventListener");
    const spyRemove = jest.spyOn(global.window, "removeEventListener");

    expect(instance.inputClicked).toBeFalsy();

    instance.containerClick();

    expect(instance.inputClicked).toBeTruthy();
    expect(spyAdd).toHaveBeenCalledTimes(1);
    expect(spyAdd).toHaveBeenCalledWith("click", instance.windowClick);
    expect(spyRemove).toHaveBeenCalledTimes(1);
    expect(spyRemove).toHaveBeenCalledWith("click", instance.windowClick);

    spyAdd.mockRestore();
    spyRemove.mockRestore();
  });

  it("windowClick should call blurInput and set inputCicked to false", () => {
    const instance = renderer
      .create(
        <SearchInput placeholder="Search Demo" value="" onChange={() => {}} />
      )
      .getInstance();
    const spy = jest.spyOn(instance, "blurInput").mockImplementation(() => {});

    instance.windowClick();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(instance.inputClicked).toBeFalsy();

    spy.mockRestore();
  });

  it("windowClick should not call blurInput and should set inputCicked to false when inputClicked is true", () => {
    const instance = renderer
      .create(
        <SearchInput placeholder="Search Demo" value="" onChange={() => {}} />
      )
      .getInstance();
    const spy = jest.spyOn(instance, "blurInput").mockImplementation(() => {});

    instance.inputClicked = true;
    instance.windowClick();

    expect(spy).toHaveBeenCalledTimes(0);
    expect(instance.inputClicked).toBeFalsy();

    spy.mockRestore();
  });

  it("blurInput should change focused to false and call onBlur", () => {
    const blurMock = jest.fn();
    const instance = renderer
      .create(
        <SearchInput
          placeholder="Search Demo"
          value=""
          onChange={() => {}}
          onBlur={blurMock}
        />
      )
      .getInstance();

    instance.setState({
      isFocused: true
    });
    const spy = jest.spyOn(instance, "setState");
    const spyRemove = jest.spyOn(global.window, "removeEventListener");
    instance.blurInput();

    expect(blurMock).toHaveBeenCalledTimes(1);
    expect(spyRemove).toHaveBeenCalled();
    expect(spyRemove).toHaveBeenCalledWith("click", instance.windowClick);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith({
      isFocused: false
    });

    spyRemove.mockRestore();
    spy.mockRestore();
  });

  it("blurInput should not call setState and onBlur when isFocused is false", () => {
    const blurMock = jest.fn();
    const instance = renderer
      .create(
        <SearchInput
          placeholder="Search Demo"
          value=""
          onChange={() => {}}
          onBlur={blurMock}
        />
      )
      .getInstance();

    const spy = jest.spyOn(instance, "setState");
    instance.blurInput();

    expect(blurMock).toHaveBeenCalledTimes(0);
    expect(spy).toHaveBeenCalledTimes(0);

    spy.mockRestore();
  });

  it("focusInput set state to isFocused true, call input focus method and call onFocus", () => {
    const focushMock = jest.fn();
    const inputFocusMock = jest.fn();

    const instance = renderer
      .create(
        <SearchInput
          placeholder="Search Demo"
          value=""
          onChange={() => {}}
          onFocus={focushMock}
        />
      )
      .getInstance();

    instance.inputRef.current = {
      focus: inputFocusMock
    };

    instance.focusInput();

    expect(focushMock).toHaveBeenCalledTimes(1);
    expect(inputFocusMock).toHaveBeenCalledTimes(2);
    expect(instance.state.isFocused).toBeTruthy();
  });

  it("focusInput should not call onFocus and should call focus only once when isFocused is true", () => {
    const focushMock = jest.fn();
    const inputFocusMock = jest.fn();

    const instance = renderer
      .create(
        <SearchInput
          placeholder="Search Demo"
          value=""
          onChange={() => {}}
          onFocus={focushMock}
        />
      )
      .getInstance();

    instance.setState({
      isFocused: true
    });

    instance.inputRef.current = {
      focus: inputFocusMock
    };

    instance.focusInput();

    expect(focushMock).toHaveBeenCalledTimes(0);
    expect(inputFocusMock).toHaveBeenCalledTimes(1);
  });

  it("call cancelCallback when Cancel button selected", () => {
    const cancelCallback = jest.fn();
    const element = renderer.create(
      <SearchInput
        variant="large"
        placeholder="Search Demo"
        value=""
        isInputVisible={false}
        onChange={() => {}}
        cancelCallback={cancelCallback}
      />
    );

    const el = element.root.findByType(Cancel);
    el.props.onClick();

    expect(cancelCallback).toHaveBeenCalledTimes(1);
  });
});

describe("getSearchHeight", () => {
  it("should return 36px", () => {
    expect(getSearchHeight("small")).toBe("36px");
  });
  it("should return 44px when no args", () => {
    expect(getSearchHeight()).toBe("44px");
  });
});
