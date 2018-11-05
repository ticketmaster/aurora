import renderer from "react-test-renderer";

import {
  renderProviderComponent,
  createImgWithSrcset,
  createImgWithSrc,
  createDiv,
  PROPS as providerProps
} from "../__mocks__/utils.mocks";

describe("LazyLoaderProvider", () => {
  it("should load a low res, blurred version of the image passed prior to loading", () => {
    const component = renderProviderComponent({}, renderer.create, {
      createNodeMock: createImgWithSrc
    });

    expect(component).toMatchSnapshot();
  });

  it("should load a high res version of the image passed when the imageRef supports srcset", () => {
    const component = renderProviderComponent({}, renderer.create, {
      createNodeMock: createImgWithSrcset
    });

    const instance = component.getInstance();
    instance.load(true);

    expect(instance.state.imageRef).toMatchSnapshot();
  });

  it("should load a high res version of the image passed when the imageRef supports src", () => {
    const component = renderProviderComponent({}, renderer.create, {
      createNodeMock: createImgWithSrc
    });

    const instance = component.getInstance();
    instance.load(true);

    expect(instance.state.imageRef).toMatchSnapshot();
  });

  it("should load a high res version of the image passed when the imageRef supports a backgroundImage style", () => {
    const component = renderProviderComponent({}, renderer.create, {
      createNodeMock: createDiv
    });

    const instance = component.getInstance();
    instance.load(true);

    expect(instance.state.imageRef).toMatchSnapshot();
  });

  it("should not load a high res version of the image passed when the load function is invoked with a value of false", () => {
    const component = renderProviderComponent({}, renderer.create, {
      createNodeMock: createImgWithSrcset
    });

    const instance = component.getInstance();
    instance.load(false);

    expect(component).toMatchSnapshot();
  });

  it("should not error when calling the onload method if no ref is available", () => {
    const component = renderProviderComponent({}, renderer.create);

    const instance = component.getInstance();
    expect(() => instance.onload()).not.toThrow();
  });

  it("should invoke componentDidUpdate and not setState when src equals prevSrc", () => {
    const component = renderProviderComponent({}, renderer.create, {
      createNodeMock: createImgWithSrcset
    });

    const instance = component.getInstance();
    instance.componentDidUpdate(providerProps);

    expect(instance.state).toMatchSnapshot();
  });

  it("should invoke componentDidUpdate and set state to a low res, blurred version of the image when the src changes", () => {
    const component = renderProviderComponent({}, renderer.create, {
      createNodeMock: createImgWithSrcset
    });

    const instance = component.getInstance();
    instance.load(true);

    component.update(
      renderProviderComponent({ src: "http://placepuppy.com/g/" }, x => x, {
        createNodeMock: createImgWithSrcset
      })
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
