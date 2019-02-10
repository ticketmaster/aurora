import React from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";

import { Text } from "../../components/Text";
import { Row as AuroraRow, Column } from "../../components/Grid";
import COLORS from "../../theme/colors";
import AuroraIcon from "./Icon";

// import spacing from "../../theme/spacing";

const ExtrasWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px 16px 16px 47px;
`;

const Row = styled(AuroraRow)`
  margin: 0 !important;
  flex: 1 1;
`;

const ExtraTitle = styled(Text)`
  margin: 0;
`;

const Extra = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1;
`;

const ExtraItem = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: [col] 50px [col] auto;
  grid-template-rows: [row] auto [row] auto;
  background-color: #2196f3;
  padding: 10px;
`;

const Icon = styled(AuroraIcon)`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  grid-column: col 1;
  grid-row: row 1 / span 2;
`;

const ExtraOption = styled.div`
  display: grid;
`;

const Extras = ({ data }) => (
  <ExtrasWrapper>
    {data.map(({ title, id, items }) => (
      <Extra key={id}>
        <ExtraTitle primary size="kilo" weight="semiBold" tag="p">
          {title}
        </ExtraTitle>
        {items.map(extra => (
          <ExtraItem key={extra.title + id}>
            <Icon
              key={extra.title}
              name={extra.title}
              size={26}
              color={COLORS.blackPearl}
            />

            <Text
              primary
              className="text"
              size="uno"
              tag="p"
              href={extra.href}
              onClick={extra.onClick}
            >
              {extra.title}
            </Text>
          </ExtraItem>
        ))}
      </Extra>
    ))}
  </ExtrasWrapper>
);

export default Extras;
