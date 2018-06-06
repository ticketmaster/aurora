import React from "react";
import { render, Simulate } from "react-testing-library";

import {
  listItems,
  sections,
  events
} from "../../../../catalog/pages/list_row/mock";
import { ListContainer, ListRow, Section, SectionItem } from "../";

const onOverflowButtonClick = ({ scope, index }) => ({ event }) => ev => {}; // eslint-disable-line

describe("<ListContainer />", () => {
  const modalRoot = global.document.createElement("div");
  modalRoot.setAttribute("id", "modal-root");
  const body = global.document.querySelector("body");
  body.appendChild(modalRoot);

  it("renders ListContainer correctly without any expanded sections", () => {
    const { container } = render(
      <ListContainer
        rowItems={events}
        overflowButtonText="See Tickets"
        onOverflowButtonClick={onOverflowButtonClick}
      >
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
                totalSections={4}
                key={section.title}
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
                totalSections={4}
                key={section.title}
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

  it("opens the bottomSheet for the row when clicked on overflow button", () => {
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
                totalSections={4}
                key={section.title}
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
  });

  it("closes the bottomSheet for the row when clicked on overlay", () => {
    const { container } = render(
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
                totalSections={4}
                key={section.title}
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
    // Simulate.click(container.querySelector(".container--overlay"));
    expect(container.firstChild).toMatchSnapshot();
  });

  it("closes the bottomSheet for the row when clicked on cross icon", () => {
    const { container } = render(
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
                totalSections={4}
                key={section.title}
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
    // Simulate.click(container.querySelector(".button--cancel"));
    expect(container.firstChild).toMatchSnapshot();
  });
});
