import React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";

import BaseText from "../Base";

describe("BaseText", () => {
  describe("with traditional color palette", () => {
    it("should render primary text with a div tag in the dark variant by default", () => {
      const component = renderer.create(<BaseText>Text</BaseText>);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render secondary text with a div tag in the dark variant when the secondary prop equals true", () => {
      const component = renderer.create(<BaseText secondary>Text</BaseText>);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render disabled text with a div tag in the dark variant when the disabled prop equals true", () => {
      const component = renderer.create(<BaseText disabled>Text</BaseText>);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render primary text with a div tag in the light variant when the variant prop equals light", () => {
      const component = renderer.create(
        <BaseText variant="light">Text</BaseText>
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render secondary text with a div tag in the light variant when the variant prop equals light and the secondary prop equals true", () => {
      const component = renderer.create(
        <BaseText variant="light" secondary>
          Text
        </BaseText>
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render disabled text with a div tag in the light variant when the variant prop equals light and the disabled prop equals true", () => {
      const component = renderer.create(
        <BaseText variant="light" disabled>
          Text
        </BaseText>
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render primary text with a div tag in an accent variant when the variant prop equals accent and a valid accent prop is passed", () => {
      const component = renderer.create(
        <BaseText variant="accent" accent="azure">
          Text
        </BaseText>
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render secondary text with a div tag in an accent variant when the variant prop equals accent, a valid accent prop is passed, and the secondary prop equals true", () => {
      const component = renderer.create(
        <BaseText variant="accent" accent="azure" secondary>
          Text
        </BaseText>
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render disabled text with a div tag in an accent variant when the variant prop equals accent, a valid accent prop is passed, and the disabled prop equals true", () => {
      const component = renderer.create(
        <BaseText variant="accent" accent="azure" disabled>
          Text
        </BaseText>
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render primary text with a div tag in an accent variant that has only one shade when the variant prop equals accent and a valid accent prop is passed", () => {
      const component = renderer.create(
        <BaseText variant="accent" accent="aquamarine">
          Text
        </BaseText>
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render primary text with a tag prop in the dark variant by default", () => {
      const component = renderer.create(<BaseText tag="span">Text</BaseText>);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render primary text with a div tag of the size prop passed in the dark variant by default", () => {
      const component = renderer.create(<BaseText size="giga">Text</BaseText>);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render primary text with a div tag of the weight prop passed in the dark variant by default", () => {
      const component = renderer.create(
        <BaseText weight="semiBold">Text</BaseText>
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render primary text with a div tag in the dark variant with a className prop when passed by default", () => {
      const component = renderer.create(
        <BaseText className="text--custom">Text</BaseText>
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("with themed color palette", () => {
    it("should render primary text with a div tag in the dark variant by default", () => {
      const component = renderer.create(
        <ThemeProvider theme={{ themeName: "tm" }}>
          <BaseText themed>Text</BaseText>
        </ThemeProvider>
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render secondary text with a div tag in the dark variant when the secondary prop equals true", () => {
      const component = renderer.create(
        <ThemeProvider theme={{ themeName: "tm" }}>
          <BaseText themed secondary>
            Text
          </BaseText>
        </ThemeProvider>
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render disabled text with a div tag in the dark variant when the disabled prop equals true", () => {
      const component = renderer.create(
        <ThemeProvider theme={{ themeName: "tm" }}>
          <BaseText themed disabled>
            Text
          </BaseText>
        </ThemeProvider>
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render primary text with a div tag in the light variant when the variant prop equals light", () => {
      const component = renderer.create(
        <ThemeProvider theme={{ themeName: "tm" }}>
          <BaseText themed variant="light">
            Text
          </BaseText>
        </ThemeProvider>
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render secondary text with a div tag in the light variant when the variant prop equals light and the secondary prop equals true", () => {
      const component = renderer.create(
        <ThemeProvider theme={{ themeName: "tm" }}>
          <BaseText themed variant="light" secondary>
            Text
          </BaseText>
        </ThemeProvider>
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render disabled text with a div tag in the light variant when the variant prop equals light and the disabled prop equals true", () => {
      const component = renderer.create(
        <ThemeProvider theme={{ themeName: "tm" }}>
          <BaseText themed variant="light" disabled>
            Text
          </BaseText>
        </ThemeProvider>
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render primary text with a div tag in an accent variant when the variant prop equals accent and a valid accent prop is passed", () => {
      const component = renderer.create(
        <ThemeProvider theme={{ themeName: "tm" }}>
          <BaseText themed variant="accent" accent="primary">
            Text
          </BaseText>
        </ThemeProvider>
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render secondary text with a div tag in an accent variant when the variant prop equals accent, a valid accent prop is passed, and the secondary prop equals true", () => {
      const component = renderer.create(
        <ThemeProvider theme={{ themeName: "tm" }}>
          <BaseText themed variant="accent" accent="primary" secondary>
            Text
          </BaseText>
        </ThemeProvider>
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render disabled text with a div tag in an accent variant when the variant prop equals accent, a valid accent prop is passed, and the disabled prop equals true", () => {
      const component = renderer.create(
        <ThemeProvider theme={{ themeName: "tm" }}>
          <BaseText themed variant="accent" accent="primary" disabled>
            Text
          </BaseText>
        </ThemeProvider>
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render primary text with a div tag in an accent variant that has only one shade when the variant prop equals accent and a valid accent prop is passed", () => {
      const component = renderer.create(
        <ThemeProvider theme={{ themeName: "tm" }}>
          <BaseText themed variant="accent" accent="gray04">
            Text
          </BaseText>
        </ThemeProvider>
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render primary text with a tag prop in the dark variant by default", () => {
      const component = renderer.create(
        <ThemeProvider theme={{ themeName: "tm" }}>
          <BaseText themed tag="span">
            Text
          </BaseText>
        </ThemeProvider>
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render primary text with a div tag of the size prop passed in the dark variant by default", () => {
      const component = renderer.create(
        <ThemeProvider theme={{ themeName: "tm" }}>
          <BaseText themed size="giga">
            Text
          </BaseText>
        </ThemeProvider>
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render primary text with a div tag of the weight prop passed in the dark variant by default", () => {
      const component = renderer.create(
        <ThemeProvider theme={{ themeName: "tm" }}>
          <BaseText themed weight="semiBold">
            Text
          </BaseText>
        </ThemeProvider>
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render primary text with a div tag in the dark variant with a className prop when passed by default", () => {
      const component = renderer.create(
        <ThemeProvider theme={{ themeName: "tm" }}>
          <BaseText themed className="text--custom">
            Text
          </BaseText>
        </ThemeProvider>
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("with responsiveSize", () => {
    const table = [
      {
        size: "hecto",
        children: "Text"
      },
      {
        size: "hecto",
        responsiveSize: {
          xSmall: "uno",
          small: "hecto",
          medium: "kilo",
          large: "giga",
          xLarge: "tera"
        },
        children: "Text"
      },
      {
        responsiveSize: {
          small: "hecto",
          medium: "kilo",
          large: "giga",
          xLarge: "tera"
        },
        children: "Text"
      },
      {
        responsiveSize: {
          small: "hecto",
          medium: "kilo",
          large: "giga"
        },
        children: "Text"
      },
      {
        responsiveSize: {
          xSmall: "hecto"
        },
        children: "Text"
      }
    ];

    table.forEach(({ children, ...props }) => {
      it(`should render correctly with ${JSON.stringify(props)}`, () => {
        const component = renderer.create(
          <BaseText {...props}>{children}</BaseText>
        );
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
  });
});
