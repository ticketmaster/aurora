import { pageLoader } from "catalog";
import { ThemeProvider } from "styled-components";

import {
  Search,
  RadioButton,
  RadioGroup,
  CheckBoxGroup,
  Input,
  DropDownGroup,
  DropDownOption,
  DropDownLabel,
  Toggle,
  ButtonGroup,
  QtySelector
} from "../../../src/components/Input";
import { CheckBox } from "../../../src";
import SearchInput from "../../../src/components/SearchInput";
import SearchInputMobile from "../../../src/components/SearchInput/SearchInputMobile";
import CheckboxWrapperExample from "./CheckBoxExample";
import ToggleWrapperExample from "./ToggleWrapperExample";
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
    CheckBox,
    RadioGroup,
    CheckBoxGroup,
    Input,
    Spacing,
    DropDownGroup,
    DropDownOption,
    DropDownLabel,
    Toggle,
    ToggleWrapperExample,
    ThemeProvider,
    CheckboxWrapperExample,
    ButtonGroup,
    QtySelector,
    SearchInput,
    SearchInputMobile
  },
  content: pageLoader(() => import("./index.md"))
};
