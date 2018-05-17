import { pageLoader } from "catalog";

import { colors, typography } from "../../../src/theme";
import { Container, Row, Column } from "../../../src/components/Grid";

const textStyle = {
  backgroundColor: colors.white.base,
  padding: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: typography.size.bronto
};

const fontWeightLabelStyle = {
  padding: "10px",
  textAlign: "center"
};

const fontSizeRowStyle = {
  padding: "20px",
  display: "flex",
  alignItems: "center"
};

const getFontWeightTextStyle = props => ({
  ...textStyle,
  ...props
});

export default {
  path: "/typography",
  title: "Typography",
  imports: {
    colors,
    typography,
    Container,
    Row,
    Column,
    getFontWeightTextStyle,
    fontWeightLabelStyle,
    fontSizeRowStyle
  },
  content: pageLoader(() => import("./index.md"))
};
