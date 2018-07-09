import { pageLoader } from "catalog";

import {
  Search,
  RadioButton,
  CheckBoxButton,
  RadioGroup,
  CheckBoxGroup,
  Input
} from "../../../src/components/Input";
import Header from "../../../src/components/Header";
import Column from "../../../src/components/Grid/Column";
import Container from "../../../src/components/Grid/Container";
import Row from "../../../src/components/Grid/Row";
import Spacing from "../../../src/components/Spacing";

export default {
  path: "/inputs",
  title: "Inputs",
  imports: {
    Search,
    Header,
    Column,
    Container,
    Row,
    RadioButton,
    CheckBoxButton,
    RadioGroup,
    CheckBoxGroup,
    Input,
    Spacing
  },
  content: pageLoader(() => import("./index.md"))
};
