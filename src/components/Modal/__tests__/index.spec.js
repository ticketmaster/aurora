/* global window: true */
import React from "react";
import {
  render,
  renderIntoDocument,
  Simulate,
  wait
} from "react-testing-library";
import renderer from "react-test-renderer";

import {
  getActionBarShadow,
  getContentHeight,
  getBottomActionBarShadow,
  isRequestCloseApproved
} from "../helper";

import ModalWithDeviceSize, { Modal as ModalComponent } from "../index";
import { withModal } from "../context";

jest.mock("../helper");

beforeAll(() => {
  getActionBarShadow.mockReturnValue(true);
  getBottomActionBarShadow.mockReturnValue(true);
  isRequestCloseApproved.mockReturnValue(Promise.resolve(true));
});

describe("<Modal />", () => {
  describe("render", () => {
    it("should render without errors and pass extra props", () => {
      const { container } = render(
        <ModalWithDeviceSize
          containerProps={{ style: { width: "210px" } }}
          actionBarProps={{ backgroundColor: "white" }}
          contentProps={{ onClick: () => {} }}
          bottomActionBarProps={{ backgroundColor: "black" }}
        >
          <div>Modal contents</div>
        </ModalWithDeviceSize>
      );

      expect(container).toMatchSnapshot();
    });

    it("should render with actionBar and bottomActionBar", () => {
      const { container } = render(
        <ModalWithDeviceSize
          actionBar={<div>Action bar controls</div>}
          bottomActionBar={<div>Place your controls here</div>}
        >
          <div>Modal contents</div>
        </ModalWithDeviceSize>
      );

      expect(container).toMatchSnapshot();
    });

    it("should render fullscreen modal with action bars", () => {
      const { container } = render(
        <ModalWithDeviceSize
          fullscreen
          actionBar={<div>Action bar controls</div>}
          bottomActionBar={<div>Place your controls here</div>}
        >
          <div>Modal contents</div>
        </ModalWithDeviceSize>
      );

      expect(container).toMatchSnapshot();
    });

    it("should not render the modal if it is closed", () => {
      const { container } = render(
        <ModalWithDeviceSize isOpened={false}>
          <div>Modal contents</div>
        </ModalWithDeviceSize>
      );

      expect(container).toMatchSnapshot();
    });
  });

  it("it should set the content `maxHeight` based on action bars heights for larger screens", () => {
    const CONTENT_HEIGHT = "100px";
    getContentHeight.mockReturnValue(CONTENT_HEIGHT);

    const { getByTestId } = renderIntoDocument(
      <ModalWithDeviceSize
        contentProps={{ "data-testid": "modal-content" }}
        deviceSize={{ isSmall: false, isMedium: true }}
      >
        <div>Modal contents</div>
      </ModalWithDeviceSize>
    );

    expect(getByTestId("modal-content").style.maxHeight).toBe(CONTENT_HEIGHT);
  });

  it("should recalculate shadows and content height on props change", () => {
    const { container, rerender } = render(
      <ModalWithDeviceSize isOpened={false}>
        <div>Modal contents</div>
      </ModalWithDeviceSize>
    );

    rerender(
      <ModalWithDeviceSize isOpened>
        <div>Modal contents</div>
      </ModalWithDeviceSize>
    );

    expect(container).toMatchSnapshot();
  });

  it("should set bottom action bar shadow when the content was scrolled", () => {
    getBottomActionBarShadow
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(true);

    const { container, getByTestId } = render(
      <ModalWithDeviceSize bottomActionBar={<div />}>
        <div data-testid="content">Modal contents</div>
      </ModalWithDeviceSize>
    );

    Simulate.scroll(getByTestId("content"));

    expect(container).toMatchSnapshot();
  });

  it("should not fail on scroll when there is no scroll callback", () => {
    const { getByTestId } = render(
      <ModalWithDeviceSize contentProps={{ "data-testid": "modal-content" }}>
        <div>Modal contents</div>
      </ModalWithDeviceSize>
    );

    Simulate.scroll(getByTestId("modal-content"));
  });

  it("should call onScroll on content scroll", () => {
    const scrollSpy = jest.fn();

    const { getByTestId } = render(
      <ModalWithDeviceSize
        contentProps={{ "data-testid": "modal-content" }}
        onScroll={scrollSpy}
      >
        <div>Modal contents</div>
      </ModalWithDeviceSize>
    );

    Simulate.scroll(getByTestId("modal-content"));

    expect(scrollSpy).toHaveBeenCalled();
  });

  it("should remove event listener on componentDidMount", () => {
    const spy = jest.spyOn(window, "removeEventListener");

    const instance = renderer
      .create(
        <ModalComponent deviceSize={{}}>
          <div>Modal contents</div>
        </ModalComponent>,
        {
          createNodeMock: () => ({
            style: {
              maxHeight: "300px"
            }
          })
        }
      )
      .getInstance();
    instance.componentWillUnmount();

    expect(spy).toHaveBeenCalled();

    spy.mockRestore();
  });

  describe("closeModal", () => {
    it("should close the modal when there is no onRequestClose callback", async () => {
      /* eslint-disable-next-line react/prop-types */
      const MyComponent = ({ modal: { closeModal } }) => (
        <button data-testid="close-modal" onClick={closeModal} />
      );

      const Component = withModal(MyComponent);

      const { container, getByTestId } = render(
        <ModalWithDeviceSize>
          <Component />
        </ModalWithDeviceSize>
      );

      Simulate.click(getByTestId("close-modal"));

      await wait(() => !container, { timeout: 50 });

      expect(container).toMatchSnapshot();
    });

    it("should close the modal when the request was approved", async () => {
      /* eslint-disable-next-line react/prop-types */
      const MyComponent = ({ modal: { closeModal } }) => (
        <button data-testid="close-modal" onClick={closeModal} />
      );

      const Component = withModal(MyComponent);

      const { container, getByTestId } = render(
        <ModalWithDeviceSize onRequestClose={() => true}>
          <Component />
        </ModalWithDeviceSize>
      );

      Simulate.click(getByTestId("close-modal"));

      await wait(() => !container, { timeout: 50 });

      expect(container).toMatchSnapshot();
    });
  });
});
