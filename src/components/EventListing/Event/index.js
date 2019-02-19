import styled, {css} from "styled-components";
import RevealAnimation from "../RevealAnimation";

import Actions from "./Actions";
import Body from "./Body";
import Header from "./Header";
import Date from "./Date";
import Label from "./Label";
import Link from "./Link";
import Text from "./Text";
import Title from "./Title";


const Event = styled(RevealAnimation)`
  background: #fff;
  display: flex;
  flex-direction: column;

   .innerWrapper {
     display: flex;
     padding: 4px 0;
     /* flex-direction: column; */
     width: 100%;
   }
  .main {
    display: flex;
    padding: 12px 0;
    width: 100%;
    flex: 1 1;
    border: none;
    background: white;
  }

  .main:hover {
    background-color: rgba(2, 108, 223, 0.1);
    -webkit-transition: background-color 100ms linear;
    -ms-transition: background-color 100ms linear;
    transition: background-color 100ms linear;
  }

  .badge{
    text-align: right;
    span {
      display: block
    }
  }

  .section {
    /* grid-area: section;
    text-align: left; */
  }
  .cta {
    /* grid-area: cta; */
    padding: 13px 16px;
    text-align:right;
    p {
      margin-top: 4px;
    }
  }
  .chevron {
    width: 46px;
    /* grid-area: chevron; */
  }
  
  .extra {
    p {
      color: #026cdf
    }
  }

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
Event.Header = Header;
Event.Label = Label;
Event.Link = Link;
Event.Text = Text;
Event.Title = Title;

export default Event;
