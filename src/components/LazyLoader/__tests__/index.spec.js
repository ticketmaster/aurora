import renderer from "react-test-renderer";

import {
  renderComponent,
  createImgWithSrcset,
  createImgWithSrc,
  createDiv
} from "../__mocks__/utils.mocks";

describe("LazyLoader", () => {
  it("should load a low res, blurred version of the image passed prior to loading", () => {
    const component = renderComponent({}, renderer.create, {
      createNodeMock: createImgWithSrc
    });

    expect(component).toMatchSnapshot();
  });

  it.skip("should load a high res version of the image passed when the imageRef supports srcset", () => {
    const component = renderComponent({}, renderer.create, {
      createNodeMock: createImgWithSrcset
    });

    const instance = component.getInstance();
    instance.load(true);

    expect(instance.state.imageRef).toMatchSnapshot();
  });

  it.skip("should load a high res version of the image passed when the imageRef supports src", () => {
    const component = renderComponent({}, renderer.create, {
      createNodeMock: createImgWithSrc
    });

    const instance = component.getInstance();
    instance.load(true);

    expect(instance.state.imageRef).toMatchSnapshot();
  });

  it.skip("should load a high res version of the image passed when the imageRef supports a backgroundImage style", () => {
    const component = renderComponent({}, renderer.create, {
      createNodeMock: createDiv
    });

    const instance = component.getInstance();
    instance.load(true);

    expect(instance.state.imageRef).toMatchSnapshot();
  });

  it.skip("should invoke componentDidUpdate and set state to a low res, blurred version of the image when the src changes", () => {
    const component = renderComponent({}, renderer.create, {
      createNodeMock: createImgWithSrcset
    });

    const instance = component.getInstance();
    instance.load(true);

    component.update(
      renderComponent({ src: "http://placepuppy.com/g/" }, x => x, {
        createNodeMock: createImgWithSrcset
      })
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
