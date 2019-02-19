import React from 'react';
import styled from "styled-components";

import ActionArea from "./ActionArea";
import Badge from "./Badge"
import BottomSheet from "./BottomSheet";
import Date from "./Date"
import Ellipsis from "./Ellipsis";
import Layout from "./Layout";
import Tile from "../Tile";

const Wrapper = styled.div`
  > div:nth-child(n + 1)::after {
    background: #ebebeb;
    content: " ";
    display: flex;
    height: 1px;
    margin-left: 0px;
    margin-right: 0px;
  }
  > div:nth-last-child(1)::after {
    background: none;
    content: " ";
    display: flex;
    height: 1px;
    margin-left: 16px;
    margin-right: 16px;
  }
`;

const EventItem = styled(Tile)`
  display: flex;
  flex-direction: row;
  padding: 4px 0px;

  .chevron { display: none}
  .active-event-text { display: none;}

  &&::after {
    height: 1px;
  }

`;

const EventList = ({items}) => (
    <Wrapper>
      {
        items.map(({
          id,
          name,
        products,
        eventUrlLink: venueUrl,
        datesFormatted: { dateSubTitle, dateTitle },
        venues: [venue],
        attractions,
        ...rest
        }) => (
        <EventItem key={id}>
           <Date>
            <Tile.Title>{dateTitle}</Tile.Title>
            <Tile.Text>{dateSubTitle}</Tile.Text>
          </Date>
          <Layout>
            <Layout.Collapsed>
              <Tile.Title className="title" id={`${id}-event`} >{name}</Tile.Title>
              <Tile.Text className="subTitle">{venue.name}</Tile.Text> 

              {products &&
                <Tile.Link className="extras">Extras Available</Tile.Link>
              }
                <div className="badge">
                  <Badge label="Mon • Jan 1 • 10 AM"/>
                </div>

              { products && 
                <Tile.Link
                  className="extras"
                  href="#"
                  id={id}
                  onClick={() => console.log("click")}
                >
                  Extras Available
                </Tile.Link>
              } 
            </Layout.Collapsed>
          </Layout>

          <ActionArea>
            <Ellipsis className="cta-ellipsis" id={id} onClick={() => console.log("click")} />
          </ActionArea>
        </EventItem>
        ))  
      }
    </Wrapper>
)

export default EventList;