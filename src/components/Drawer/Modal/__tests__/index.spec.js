import React from "react";
import {
  render,
  renderIntoDocument,
  Simulate,
  wait
} from "react-testing-library";

import {
  getActionBarShadow,
  getContentHeight,
  getBottomActionBarShadow,
  isRequestCloseApproved
} from "../helper";

import Modal from "../index";
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
        <Modal
          containerProps={{ style: { width: "210px" } }}
          actionBarProps={{ backgroundColor: "white" }}
          contentProps={{ onClick: () => {} }}
          bottomActionBarProps={{ backgroundColor: "black" }}
        >
          <div>Modal contents</div>
        </Modal>
      );

      expect(container).toMatchSnapshot();
    });

    it("should render with actionBar and bottomActionBar", () => {
      const { container } = render(
        <Modal
          actionBar={<div>Action bar controls</div>}
          bottomActionBar={<div>Place your controls here</div>}
        >
          <div>Modal contents</div>
        </Modal>
      );

      expect(container).toMatchSnapshot();
    });

    it("should not render the modal if it is closed", () => {
      const { container } = render(
        <Modal isOpened={false}>
          <div>Modal contents</div>
        </Modal>
      );

      expect(container).toMatchSnapshot();
    });
  });

  it("it should set the content `height` based on action bars heights for smaller screens", () => {
    getContentHeight.mockReturnValue(100);

    const { getByTestId } = renderIntoDocument(
      <Modal
        contentProps={{ "data-testid": "modal-content" }}
        deviceSize={{ isSmall: true }}
      >
        <div>Modal contents</div>
      </Modal>
    );

    expect(getByTestId("modal-content").style.minHeight).toBe("100");
    expect(getByTestId("modal-content").style.maxHeight).toBe("100");
  });

  it("it should set the content `maxHeight` based on action bars heights for larger screens", () => {
    getContentHeight.mockReturnValue(100);

    const { getByTestId } = renderIntoDocument(
      <Modal
        contentProps={{ "data-testid": "modal-content" }}
        deviceSize={{ isSmall: false, isMedium: true }}
      >
        <div>Modal contents</div>
      </Modal>
    );

    expect(getByTestId("modal-content").style.maxHeight).toBe("100");
  });

  it("should recalculate shadows and content height on props change", () => {
    const { container, rerender } = render(
      <Modal isOpened={false}>
        <div>Modal contents</div>
      </Modal>
    );

    rerender(
      <Modal isOpened>
        <div>Modal contents</div>
      </Modal>
    );

    expect(container).toMatchSnapshot();
  });

  it("should set bottom action bar shadow when the content was scrolled", () => {
    getBottomActionBarShadow
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(true);

    const { container, getByTestId } = render(
      <Modal bottomActionBar={<div />}>
        <div data-testid="content">Modal contents</div>
      </Modal>
    );

    Simulate.scroll(getByTestId("content"));

    expect(container).toMatchSnapshot();
  });

  it("should not fail on scroll when there is no scroll callback", () => {
    const { getByTestId } = render(
      <Modal contentProps={{ "data-testid": "modal-content" }}>
        <div>Modal contents</div>
      </Modal>
    );

    Simulate.scroll(getByTestId("modal-content"));
  });

  it("should call onScroll on content scroll", () => {
    const scrollSpy = jest.fn();

    const { getByTestId } = render(
      <Modal
        contentProps={{ "data-testid": "modal-content" }}
        onScroll={scrollSpy}
      >
        <div>Modal contents</div>
      </Modal>
    );

    Simulate.scroll(getByTestId("modal-content"));

    expect(scrollSpy).toHaveBeenCalled();
  });

  describe("closeModal", () => {
    it("should close the modal when there is no onRequestClose callback", async () => {
      /* eslint-disable-next-line react/prop-types */
      const MyComponent = ({ modal: { closeModal } }) => (
        <button data-testid="close-modal" onClick={closeModal} />
      );

      const Component = withModal(MyComponent);

      const { container, getByTestId } = render(
        <Modal>
          <Component />
        </Modal>
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
        <Modal onRequestClose={() => true}>
          <Component />
        </Modal>
      );

      Simulate.click(getByTestId("close-modal"));

      await wait(() => !container, { timeout: 50 });

      expect(container).toMatchSnapshot();
    });
  });
});
