import renderer from "react-test-renderer";

import {
  renderComponent,
  createImgWithSrcset,
  createImgWithSrc,
  createDiv,
  PROPS
} from "../__mocks__/utils.mocks";

describe("LazyLoader", () => {
  it("should load a placeholder image passed prior to loading", () => {
    const component = renderComponent({}, renderer.create, {
      createNodeMock: createImgWithSrc
    });

    expect(component).toMatchSnapshot();
  });

  it("should load a high res version of the image passed when the imageRef supports srcset", () => {
    const component = renderComponent({}, renderer.create, {
      createNodeMock: createImgWithSrcset
    });

    const instance = component.getInstance();
    instance.load(true);

    expect(instance.state.imageRef).toMatchSnapshot();
  });

  it("should load a high res version of the image passed when the imageRef supports src", () => {
    const component = renderComponent({}, renderer.create, {
      createNodeMock: createImgWithSrc
    });

    const instance = component.getInstance();
    instance.load(true);

    expect(instance.state.imageRef).toMatchSnapshot();
  });

  it("should load a high res version of the image passed when the imageRef supports a backgroundImage style", () => {
    const component = renderComponent({}, renderer.create, {
      createNodeMock: createDiv
    });

    const instance = component.getInstance();
    instance.load(true);

    expect(instance.state.imageRef).toMatchSnapshot();
  });

  it("should invoke componentDidUpdate and set state to a placeholder image when the src changes", () => {
    const component = renderComponent({}, renderer.create, {
      createNodeMock: createImgWithSrcset
    });

    const instance = component.getInstance();
    instance.load(true);

    component.update(
      renderComponent({ src: "https://placepuppy.com/g/" }, x => x, {
        createNodeMock: createImgWithSrcset
      })
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it("should not load a high res version of the image passed when the load function is invoked with a value of false", () => {
    const component = renderComponent({}, renderer.create, {
      createNodeMock: createImgWithSrcset
    });

    const instance = component.getInstance();
    const onLoadSpy = jest.spyOn(instance, "onLoad");
    instance.load(false);

    expect(onLoadSpy).not.toHaveBeenCalled();
    expect(component).toMatchSnapshot();
  });

  it("should not error when calling the onLoad method if no ref is available", () => {
    const component = renderComponent({}, renderer.create);

    const instance = component.getInstance();
    expect(() => instance.onLoad()).not.toThrow();
  });

  it("should invoke componentDidUpdate and not setState when src equals prevSrc", () => {
    const component = renderComponent({}, renderer.create, {
      createNodeMock: createImgWithSrcset
    });

    const instance = component.getInstance();
    const setStateSpy = jest.spyOn(instance, "setState");
    instance.componentDidUpdate(PROPS);

    expect(setStateSpy).not.toHaveBeenCalled();
    expect(instance.state).toMatchSnapshot();
  });
});
