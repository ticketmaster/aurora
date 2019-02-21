import styled, {css} from "styled-components";

import Actions from "./Actions";
import Body from "./Body";
import Date from "./Date";
import Extras from "./Extras";
import Flex from "../../Flex";
import Header from "./Header";
import Label from "./Label";
import Link from "./Link";
import Text from "./Text";
import Title from "./Title";

const Event = styled(Flex)`
    background: #fff;

   .innerWrapper {
     display: flex;
     padding: 4px 0;
     width: 100%;
   }

  .main {
    display: flex;
    padding: 10px 0 10px;
    width: 100%;
    flex: 1 1;
    border: none;
    margin: 0 16px 0 0;
  }

  .main:hover {
    
  }

  .badge{
    text-align: right;
    span {
      display: block
    }
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
Event.Extras = Extras;
Event.Header = Header;
Event.Label = Label;
Event.Link = Link;
Event.Text = Text;
Event.Title = Title;

export default Event;
