import renderer from "react-test-renderer";

import {
  renderProviderComponentWithImg,
  renderProviderComponentWithImgAndDiv,
  createImgWithSrcset,
  createImgWithSrc,
  createElemByType,
  PROPS as providerProps
} from "../__mocks__/utils.mocks";

describe("LazyLoaderProvider", () => {
  it("should load a low res, blurred version of the image passed prior to loading", () => {
    const component = renderProviderComponentWithImg({}, renderer.create, {
      createNodeMock: createImgWithSrc
    });

    expect(component).toMatchSnapshot();
  });

  it("should load a high res version of the image passed when the imageRef supports srcset", () => {
    const component = renderProviderComponentWithImg({}, renderer.create, {
      createNodeMock: createImgWithSrcset
    });

    const instance = component.getInstance();
    instance.load(true);

    expect(instance.state.imageRef).toMatchSnapshot();
  });

  it("should load a high res version of the image passed when the imageRef supports src", () => {
    const component = renderProviderComponentWithImg({}, renderer.create, {
      createNodeMock: createImgWithSrc
    });

    const instance = component.getInstance();
    instance.load(true);

    expect(instance.state.imageRef).toMatchSnapshot();
  });

  it("should low res, blurred version of the image passed prior to loading when the tag equals div, imageRef supports src or srcset, and backgroundRef supports a backgroundImage style", () => {
    const component = renderProviderComponentWithImgAndDiv(
      { tag: "div" },
      renderer.create,
      {
        createNodeMock: createElemByType
      }
    );

    expect(component).toMatchSnapshot();
  });

  it("should load a high res version of the image passed when the tag equals div, imageRef supports src or srcset, and backgroundRef supports a backgroundImage style", () => {
    const component = renderProviderComponentWithImgAndDiv(
      { tag: "div" },
      renderer.create,
      {
        createNodeMock: createElemByType
      }
    );

    const instance = component.getInstance();
    const onLoadSpy = jest.spyOn(instance, "onLoad");
    const onLoadBgSpy = jest.spyOn(instance, "onLoadBg");

    instance.load(true);
    instance.onLoadBoth("https://placekitten.com/g/400/400")();

    expect(onLoadSpy).toHaveBeenCalled();
    expect(onLoadBgSpy).toHaveBeenCalled();

    expect({
      imageRef: instance.state.imageRef,
      backgroundRef: instance.state.backgroundRef
    }).toMatchSnapshot();
  });

  it("should not load a high res version of the image passed when the load function is invoked with a value of false", () => {
    const component = renderProviderComponentWithImg({}, renderer.create, {
      createNodeMock: createImgWithSrcset
    });

    const instance = component.getInstance();
    const onLoadSpy = jest.spyOn(instance, "onLoad");
    instance.load(false);

    expect(onLoadSpy).not.toHaveBeenCalled();
    expect(component).toMatchSnapshot();
  });

  it("should not error when calling the onLoad method if no ref is available", () => {
    const component = renderProviderComponentWithImg({}, renderer.create);

    const instance = component.getInstance();
    expect(() => instance.onLoad()).not.toThrow();
  });

  it("should invoke componentDidUpdate and not setState when src equals prevSrc", () => {
    const component = renderProviderComponentWithImg({}, renderer.create, {
      createNodeMock: createImgWithSrcset
    });

    const instance = component.getInstance();
    const setStateSpy = jest.spyOn(instance, "setState");
    instance.componentDidUpdate(providerProps);

    expect(setStateSpy).not.toHaveBeenCalled();
    expect(instance.state).toMatchSnapshot();
  });

  it("should invoke componentDidUpdate and set state to a low res, blurred version of the image when the src changes", () => {
    const component = renderProviderComponentWithImg({}, renderer.create, {
      createNodeMock: createImgWithSrcset
    });

    const instance = component.getInstance();
    const setStateSpy = jest.spyOn(instance, "setState");
    instance.load(true);

    component.update(
      renderProviderComponentWithImg(
        { src: "https://placepuppy.com/g/" },
        x => x,
        {
          createNodeMock: createImgWithSrcset
        }
      )
    );

    expect(setStateSpy).toHaveBeenCalled();
    expect(component.toJSON()).toMatchSnapshot();
  });
});
