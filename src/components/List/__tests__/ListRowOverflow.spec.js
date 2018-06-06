import React from "react";
import renderer from "react-test-renderer";

import { sections } from "../../../../catalog/pages/list_row/mock";
import ListRowOverflow from "../Overflow";
import Section from "../Section";
import SectionItem from "../SectionItem";

describe("<ListRowOverflow />", () => {
  it("renders ListRowOverflow correctly", () => {
    const component = renderer.create(
      <ListRowOverflow>
        {sections.map(section => (
          <Section title={section.title} totalSections={4} key={section.title}>
            {section.items
              .slice(0, 4)
              .map(sectionItem => (
                <SectionItem item={sectionItem} key={sectionItem.title} />
              ))}
          </Section>
        ))}
      </ListRowOverflow>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
