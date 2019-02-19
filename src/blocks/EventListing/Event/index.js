import styled from "styled-components";

import Label from "./Label";
import Link from "./Link";
import Text from "./Text";
import Title from "./Title";

import RevealAnimation from "../RevealAnimation";

const Event = styled(RevealAnimation)`
  background: #fff;
`;

Event.Label = Label;
Event.Link = Link;
Event.Text = Text;
Event.Title = Title;

export default Event;
