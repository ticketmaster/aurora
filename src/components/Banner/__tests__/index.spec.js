import React from "react";
import { render } from "react-testing-library";
import renderer from "react-test-renderer";

import { ClearIcon } from "../../Icons";
import Banner from "..";

describe("<Banner />", () => {
  it("renders correctly when closed", () => {
    const { container } = render(renderBanner());

    expect(container).toMatchSnapshot();
  });

  it("renders correctly when open", () => {
    const { container } = render(renderBanner({ isOpen: true }));

    expect(container).toMatchSnapshot();
  });

  it("renders correctly with content", () => {
    const { container } = render(
      renderBanner({
        isOpen: true,
        content: "test content"
      })
    );

    expect(container).toMatchSnapshot();
  });

  it("renders correctly with custom icon", () => {
    const { container } = render(
      renderBanner({
        isOpen: true,
        content: "test content",
        icon: <ClearIcon size="large" />
      })
    );

    expect(container).toMatchSnapshot();
  });

  it("renders correctly when variant is set", () => {
    const { container } = render(
      renderBanner({
        isOpen: true,
        content: "test content",
        variant: "alert"
      })
    );

    expect(container).toMatchSnapshot();
  });

  it("renders correctly with close button", () => {
    const { container } = render(
      renderBanner({
        isOpen: true,
        content: "test content",
        variant: "alert",
        onRequestClose: () => {}
      })
    );

    expect(container).toMatchSnapshot();
  });

  it("renders correctly with link", () => {
    const { container } = render(
      renderBanner({
        isOpen: true,
        variant: "alert",
        onRequestClose: () => {},
        href: "ticketmaster.com",
        linkText: "test link text"
      })
    );

    expect(container).toMatchSnapshot();
  });

  it("renders correctly with custom title for the close button", () => {
    const { container } = render(
      renderBanner({
        isOpen: true,
        variant: "alert",
        onRequestClose: () => {},
        href: "ticketmaster.com",
        linkText: "test link text",
        closeButtonTitleText: "test close banner text"
      })
    );

    expect(container).toMatchSnapshot();
  });

  it("renders correctly with expand/collapse button", () => {
    const { container } = render(
      renderBanner({
        isOpen: true,
        content: "test content",
        variant: "alert",
        onRequestClose: () => {},
        expandedText: "expandedText",
        collapsedText: "collapsedText",
        onButtonClick: () => {}
      })
    );

    expect(container).toMatchSnapshot();
  });

  it("toggleContent toggles state on click and calls onButtonClick prop", () => {
    const inst = createBannerInstance({});

    inst.toggleContent();
    expect(inst.state).toEqual({ isExpanded: true });
  });

  it("toggleContent calls onButtonClick prop when it is passed", () => {
    const mockOnButtonClick = jest.fn();
    const inst = createBannerInstance({
      onButtonClick: mockOnButtonClick
    });

    inst.toggleContent();
    expect(mockOnButtonClick.mock.calls.length).toBe(1);
  });
});

function renderBanner(props = {}) {
  return (
    <Banner
      heading="This is your primary message text."
      isOpen={false}
      {...props}
    />
  );
}

function createBannerInstance(props = {}) {
  return renderer.create(
    <Banner
      heading="This is your primary message text."
      content="test content"
      variant="alert"
      onRequestClose={() => {}}
      expandedText="expandedText"
      collapsedText="collapsedText"
      isOpen
      {...props}
    />
  ).root.instance;
}
