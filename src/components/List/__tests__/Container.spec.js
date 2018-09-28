import React from "react";
import { render, Simulate, renderIntoDocument } from "react-testing-library";
import { listItems, sections } from "../../../../catalog/pages/list_row/mock";
import { ListContainer, ListRow, Section, SectionItem } from "../";
import { Consumer } from "../../DeviceSize/Context";

import ListRowOverflow from "../../List/Overflow";

jest.mock("../../DeviceSize/Context", () => ({
  Consumer: jest.fn()
}));

beforeEach(() => {
  Consumer.mockImplementation(({ children }) => children({ isSmall: true }));
});

afterEach(() => {
  Consumer.mockReset();
});

describe("<ListContainer />", () => {
  beforeEach(() => {
    const modalRoot = global.document.createElement("div");
    modalRoot.setAttribute("id", "modal-root");
    modalRoot.setAttribute("data-testid", "modal-root");
    const body = global.document.querySelector("body");
    body.appendChild(modalRoot);
  });

  afterEach(() => {
    const body = global.document.querySelector("body");
    const modalRoot = global.document.getElementById("modal-root");
    body.removeChild(modalRoot);
  });

  it("renders ListContainer correctly without any expanded sections", () => {
    const { container } = render(
      <ListContainer>
        {listItems.map((item, index) => (
          <ListRow
            key={item.rowId}
            rowItem={item}
            index={index}
            onOverflowClick={() => {}}
          />
        ))}
      </ListContainer>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("collapses the listRow when clicked on collapse button", () => {
    const { container } = render(
      <ListContainer>
        {listItems.map((item, index) => (
          <ListRow
            key={item.rowId}
            rowItem={item}
            index={index}
            onOverflowClick={() => {}}
          >
            {sections.map(section => (
              <Section
                title={section.title}
                large={4}
                key={section.title}
                id={section.id}
              >
                {section.items
                  .slice(0, 4)
                  .map(sectionItem => (
                    <SectionItem item={sectionItem} key={sectionItem.title} />
                  ))}
              </Section>
            ))}
          </ListRow>
        ))}
      </ListContainer>
    );
    Simulate.click(container.querySelector(".button--expand-or-collapse"));
    Simulate.click(container.querySelector(".button--expand-or-collapse"));
    expect(container.firstChild).toMatchSnapshot();
  });

  it("expands the listRow when clicked on expand button", () => {
    const { container } = render(
      <ListContainer>
        {listItems.map((item, index) => (
          <ListRow
            key={item.rowId}
            rowItem={item}
            index={index}
            onOverflowClick={() => {}}
          >
            {sections.map(section => (
              <Section
                title={section.title}
                key={section.title}
                id={section.id}
                large={4}
              >
                {section.items
                  .slice(0, 4)
                  .map(sectionItem => (
                    <SectionItem item={sectionItem} key={sectionItem.title} />
                  ))}
              </Section>
            ))}
          </ListRow>
        ))}
      </ListContainer>
    );
    Simulate.click(container.querySelector(".button--expand-or-collapse"));
    expect(container.firstChild).toMatchSnapshot();
  });

  it("opens the bottomSheet for the row when clicked on overflow button", () => {
    const { container } = renderIntoDocument(
      <ListContainer onRowCollapse={() => {}} onModalClose={() => {}}>
        {listItems.map((item, index) => (
          <ListRow
            key={item.rowId}
            rowItem={item}
            index={index}
            onOverflowClick={() => {}}
          >
            {sections.map(section => (
              <Section
                title={section.title}
                large={4}
                key={section.title}
                id={section.id}
              >
                {section.items
                  .slice(0, 4)
                  .map(sectionItem => (
                    <SectionItem item={sectionItem} key={sectionItem.title} />
                  ))}
              </Section>
            ))}
          </ListRow>
        ))}
      </ListContainer>
    );
    Simulate.click(container.querySelector(".button--more-info"));
    expect(container).toMatchSnapshot();
  });

  it("closes the bottomSheet for the row when clicked on cross icon on mobile", () => {
    const { container, queryByTestId } = renderIntoDocument(
      <ListContainer onRowCollapse={() => {}}>
        {listItems.map((item, index) => (
          <ListRow
            key={item.rowId}
            rowItem={item}
            index={index}
            onOverflowClick={() => {}}
          >
            {sections.map(section => (
              <Section
                title={section.title}
                large={4}
                key={section.title}
                id={section.id}
              >
                {section.items
                  .slice(0, 4)
                  .map(sectionItem => (
                    <SectionItem item={sectionItem} key={sectionItem.title} />
                  ))}
              </Section>
            ))}
          </ListRow>
        ))}
      </ListContainer>
    );
    Simulate.click(container.querySelector(".button--more-info"));
    expect(container.firstChild).toMatchSnapshot();
    const portal = queryByTestId("modal-root");
    Simulate.click(portal.querySelector(".button--cancel"));
    expect(container).toMatchSnapshot();
  });

  it("closes the bottomSheet for the row when clicked on cross icon on mobile", () => {
    const { container, queryByTestId } = renderIntoDocument(
      <ListContainer onRowCollapse={() => {}} resizeCallBack={() => {}}>
        {listItems.map((item, index) => (
          <ListRow
            key={item.rowId}
            rowItem={item}
            index={index}
            onOverflowClick={() => {}}
          >
            {sections.map(section => (
              <Section
                title={section.title}
                large={4}
                key={section.title}
                id={section.id}
              >
                {section.items
                  .slice(0, 4)
                  .map(sectionItem => (
                    <SectionItem item={sectionItem} key={sectionItem.title} />
                  ))}
              </Section>
            ))}
          </ListRow>
        ))}
      </ListContainer>
    );
    Simulate.click(container.querySelector(".button--more-info"));
    expect(container.firstChild).toMatchSnapshot();
    const portal = queryByTestId("modal-root");
    Simulate.click(portal.querySelector(".button--cancel"));
    expect(container).toMatchSnapshot();
  });

  it("closes the modal when clicked on an expanded item on Desktop and clicked on cross icon", () => {
    Consumer.mockImplementation(({ children }) =>
      children({
        isMedium: true,
        isLarge: true,
        isXLarge: true
      })
    );

    const { container, queryByTestId } = renderIntoDocument(
      <ListContainer>
        <ListRow
          key={listItems[0].rowId}
          rowItem={listItems[0]}
          index={0}
          onOverflowClick={() => {}}
        >
          <ListRowOverflow>
            <Section
              title={sections[0].title}
              large={1}
              key={sections[0].id}
              id={sections[0].id}
            >
              {sections[0].items.map(sectionItem => (
                <SectionItem item={sectionItem} key={sectionItem.title} />
              ))}

              <SectionItem
                className="clickable--section-item"
                item={{
                  title: "+12 more",
                  onItemClick: () => {}
                }}
                key="1234"
              >
                <div>Asia</div>
                <div>Africa</div>
                <div>North America</div>
              </SectionItem>
            </Section>
          </ListRowOverflow>
        </ListRow>
      </ListContainer>
    );

    Simulate.click(container.querySelector(".clickable--section-item"));
    const portal = queryByTestId("modal-root");
    Simulate.click(portal.querySelector(".button--close"));
    expect(container).toMatchSnapshot();
  });

  /* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
  it("should allow default events", () => {
    const clickSpy = jest.fn();

    const { container } = renderIntoDocument(
      <div onClick={clickSpy}>
        <ListContainer>
          <a href="/external">External URL</a>
        </ListContainer>
      </div>
    );

    Simulate.click(container.querySelector("a"));
    const event = clickSpy.mock.calls[0][0];

    expect(clickSpy).toHaveBeenCalled();
    expect(event.defaultPrevented).toBeFalsy();
  });
});
