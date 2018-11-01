import renderer from "react-test-renderer";

import {
  renderProviderComponent,
  createImgWithSrcset,
  createImgWithSrc,
  createDiv
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

  it.skip("should invoke componentDidUpdate and set state to a low res, blurred version of the image when the src changes", () => {
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
