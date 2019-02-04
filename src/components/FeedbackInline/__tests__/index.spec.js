import React from "react";
import { render } from "react-testing-library";
import renderer from "react-test-renderer";

import { ClearIcon } from "../../Icons";
import FeedbackInline, { contentValidator } from "..";
import { BASE_FEEDBACK_HEIGHT } from "../FeedbackInline.styles";

describe("<FeedbackInline />", () => {
  it("renders correctly", () => {
    const { container } = render(renderInlineFeedback());

    expect(container).toMatchSnapshot();
  });

  it("renders correctly with content", () => {
    const { container } = render(
      renderInlineFeedback({
        content: "test content",
        expandedText: "expanded",
        collapsedText: "collapsed",
        variant: "alert",
        onButtonClick: () => {}
      })
    );

    expect(container).toMatchSnapshot();
  });

  it("renders correctly with link", () => {
    const { container } = render(
      renderInlineFeedback({
        linkText: "Link",
        href: "https://www.ticketmaster.com/",
        linkProps: { target: "_blank" },
        content: "test content",
        variant: "alert",
        onButtonClick: () => {}
      })
    );

    expect(container).toMatchSnapshot();
  });

  it("renders correctly with custom icon", () => {
    const { container } = render(
      renderInlineFeedback({
        content: "test content",
        expandedText: "expanded",
        collapsedText: "collapsed",
        icon: <ClearIcon size="large" />
      })
    );

    expect(container).toMatchSnapshot();
  });

  it("renders correctly when variant is set", () => {
    const { container } = render(
      renderInlineFeedback({
        content: "test content",
        expandedText: "expanded",
        collapsedText: "collapsed",
        variant: "alert"
      })
    );

    expect(container).toMatchSnapshot();
  });

  it("toggleContent toggles state on click", () => {
    const inst = createInlineFeedbackInstance(
      {},
      {
        createNodeMock: () => ({
          offsetHeight: 300
        })
      }
    );

    inst.toggleContent();
    expect(inst.state).toEqual({
      isExpanded: true,
      maxHeight: `${600 + BASE_FEEDBACK_HEIGHT}px`
    });
    inst.toggleContent();
    expect(inst.state).toEqual({
      isExpanded: false,
      maxHeight: `${300 + BASE_FEEDBACK_HEIGHT}px`
    });
  });

  it("toggleContent calls onButtonClick prop when it is passed", () => {
    const mockOnButtonClick = jest.fn();
    const inst = createInlineFeedbackInstance(
      {
        onButtonClick: mockOnButtonClick
      },
      {
        createNodeMock: () => ({
          offsetHeight: 300
        })
      }
    );

    inst.toggleContent();
    expect(mockOnButtonClick.mock.calls.length).toBe(1);
  });

  it("should set correct state when rendered expanded", () => {
    const inst = createInlineFeedbackInstance(
      { isExpanded: true },
      {
        createNodeMock: () => ({
          offsetHeight: 300
        })
      }
    );

    expect(inst.state.maxHeight).toEqual(`${600 + BASE_FEEDBACK_HEIGHT}px`);
  });
});

describe("contentValidator", () => {
  it("should return an error when content passed and collapsedText is NOT passed", () => {
    const mockProps = {
      content: "test content",
      expandedText: "test expanded"
    };

    expect(
      contentValidator(mockProps, "content", "test component")
    ).toBeInstanceOf(Error);
  });

  it("should return an error when content passed and expandedText is NOT passed", () => {
    const mockProps = {
      content: "test content",
      collapsedText: "test collapsed"
    };

    expect(
      contentValidator(mockProps, "content", "test component")
    ).toBeInstanceOf(Error);
  });

  it("should return an error when content type is NOT `string` or `undefined`", () => {
    const mockProps = {
      content: 42,
      collapsedText: "test collapsed",
      expandedText: "test expanded"
    };

    expect(
      contentValidator(mockProps, "content", "test component")
    ).toBeInstanceOf(Error);
  });

  it("should return `null` when content type is `string` or `undefined`", () => {
    const mockProps = {
      content: "test content",
      collapsedText: "test collapsed",
      expandedText: "test expanded"
    };

    expect(contentValidator(mockProps, "content", "test component")).toBeNull();
    expect(
      contentValidator(
        { ...mockProps, content: undefined },
        "content",
        "test component"
      )
    ).toBeNull();
  });
});

function renderInlineFeedback(props = {}) {
  return (
    <FeedbackInline heading="This is your primary message text." {...props} />
  );
}

function createInlineFeedbackInstance(props = {}, options = {}) {
  return renderer.create(
    <FeedbackInline
      heading="This is your primary message text."
      content="test content"
      variant="alert"
      expandedText="expandedText"
      collapsedText="collapsedText"
      {...props}
    />,
    options
  ).root.instance;
}
