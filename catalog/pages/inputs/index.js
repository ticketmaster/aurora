import { pageLoader } from "catalog";
import { ThemeProvider } from "styled-components";

import {
  Search,
  RadioButton,
  CheckBoxButton,
  RadioGroup,
  CheckBoxGroup,
  Input,
  DropDownGroup,
  DropDownOption,
  DropDownLabel,
  Select,
  HybridSelect,
  HybridOption,
  Toggle,
  ButtonGroup,
  QtySelector
} from "../../../src/components/Input";
import SearchInput from "../../../src/components/SearchInput";
import SearchInputMobile from "../../../src/components/SearchInput/SearchInputMobile";
import CheckboxWrapperExample from "./CheckBoxExample";
import HybridSelectExample from "./HybridSelectExample";
import ToggleWrapperExample from "./ToggleWrapperExample";
import Header from "../../../src/components/Header";
import Column from "../../../src/components/Grid/Column";
import Container from "../../../src/components/Grid/Container";
import Row from "../../../src/components/Grid/Row";
import Spacing from "../../../src/components/Spacing";
import { CalendarIcon } from "../../../src/components/Icons";

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
    Spacing,
    DropDownGroup,
    DropDownOption,
    DropDownLabel,
    Select,
    HybridSelect,
    HybridOption,
    HybridSelectExample,
    Toggle,
    ToggleWrapperExample,
    ThemeProvider,
    CheckboxWrapperExample,
    ButtonGroup,
    QtySelector,
    SearchInput,
    SearchInputMobile,
    CalendarIcon
  },
  content: pageLoader(() => import("./index.md"))
};
