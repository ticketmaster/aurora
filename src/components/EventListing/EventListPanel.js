import React from "react";
import styled, { css } from "styled-components";
import { mergeAll, reduce, keys } from "ramda";
import { shouldChangeHeight } from "./utils/animation";
import { mediumAndUp } from "../../theme/mediaQueries";
import Modal from "./Modal";
import ModalWithPanelInfo from "./ModalWithPanelInfo";

// import { shape } from "prop-types";
// import {
//   AttractionsType,
//   ProductsType,
//   VenueType
// } from "../../components/types";
// import { expandCollapse, expand, collapse } from "../../theme/animations";

import CategoryItem from "./CategoryItem";
import Flex from "../../components/Flex";
import Tile from "../../components/Tile";
import COLORS from "../../theme/colors";

const EventListPanel = ({ isOpen, items }) => (
  <Wrapper
    className={shouldChangeHeight(isOpen, "eventList_panel")}
    isOpen={isOpen}
  >
      {items.map(panelItem => (
        <Flex column grow={1} shrink={1}>
            <Tile.Label key={panelItem.title} className="label">
              {panelItem.title}
            </Tile.Label>

            {panelItem.items.map(item => (
              <CategoryItem
                key={item.id}
                icon={{
                  type: item.id || "venuenfo",
                  ...item.icon
                }}
                link={{href: item.url, text: item.title}}
                title={item.title}
                subTitle={item.subTitle}
              />
            ))}
        </Flex>
      ))}
     
  </Wrapper>
);

// EventInfo.propTypes = {
//   items: ;

export default EventListPanel;

const Wrapper = styled(Flex)`
  background: white;

  ${mediumAndUp`
    border-top: 1px solid ${COLORS.diatomite};
    margin: 0 16px;
    padding: 16px 27px;
  
  `}

  height: 0;

  && > div:nth-child(n + 2) {
    margin-left: 16px;
  }

  .label {
    margin-bottom: 16px;
  }
`;
