import React from "react";
import {
  render,
  renderIntoDocument,
  Simulate,
  wait
} from "react-testing-library";

import { getContentHeight, getBottomActionBarShadow } from "../helper";

import Modal from "../index";
import { withModal } from "../context";

jest.mock("../helper");

describe("<Modal />", () => {
  describe("render", () => {
    it("should render without errors with default actionBar and pass extra props", () => {
      const { container } = render(
        <Modal modalContentProps={{ onClick: () => {} }}>
          <div>Modal contents</div>
        </Modal>
      );

      expect(container).toMatchSnapshot();
    });

    it("should render modal without actionBar", () => {
      const { container } = render(
        <Modal actionBar={null}>
          <div>Modal contents</div>
        </Modal>
      );

      expect(container).toMatchSnapshot();
    });

    it("should render with bottomActionBar", () => {
      const { container } = render(
        <Modal
          actionBar={null}
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

  it("it should set the content height based on action bars heights", () => {
    getContentHeight.mockReturnValue(100);

    const { getByTestId } = renderIntoDocument(
      <Modal modalContentProps={{ "data-testid": "modal-content" }}>
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
      <Modal modalContentProps={{ "data-testid": "modal-content" }}>
        <div>Modal contents</div>
      </Modal>
    );

    Simulate.scroll(getByTestId("modal-content"));
  });

  it("should call onScroll on content scroll", () => {
    const scrollSpy = jest.fn();

    const { getByTestId } = render(
      <Modal
        modalContentProps={{ "data-testid": "modal-content" }}
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
