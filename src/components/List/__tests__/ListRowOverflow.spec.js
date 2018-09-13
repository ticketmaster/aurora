import React from "react";
import renderer from "react-test-renderer";

import { sections } from "../../../../catalog/pages/list_row/mock";
import ListRowOverflow from "../Overflow";
import Section from "../Section";
import SectionItem from "../SectionItem";
import { constants } from "../../../theme";

const { MAX_COLUMNS } = constants;

describe("<ListRowOverflow />", () => {
  it("renders ListRowOverflow correctly", () => {
    const component = renderer.create(
      <ListRowOverflow>
        {sections.map(section => (
          <Section
            title={section.title}
            totalSections={MAX_COLUMNS / sections.length}
            key={section.id}
            id={section.id}
          >
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
