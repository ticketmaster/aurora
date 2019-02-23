import styled, {css} from "styled-components";

import Actions from "./Actions";
import Body from "./Body";
import Date from "./Date";
import Extras from "./Extras";
import Flex from "../../Flex";
import Header from "./Header";
import Label from "./Label";
import Link from "./Link";
import SubTitle from "./SubTitle";
import Text from "./Text";
import Title from "./Title";

const Event = styled(Flex)`
    background: #fff;

  .hover--area {
    padding: 10px 0 10px;
    margin: 0 16px 0 0;
  }

  .badge{
    text-align: right;
    span {
      display: block
    }
  }

  .addon { color: #026cdf }

  ${({hasImage}) =>
    hasImage
    ?
      css`
        .date {
          margin: 0px 8px 0 16px;
        }      
      `
    :
      css`
        .date {
          margin: 0px 8px 0px 0px;
        }      
      `
  }
`;

Event.Actions = Actions;
Event.Body = Body;
Event.Date = Date;
Event.Extras = Extras;
Event.Header = Header;
Event.Label = Label;
Event.Link = Link;
Event.SubTitle = SubTitle;
Event.Text = Text;
Event.Title = Title;

export default Event;
