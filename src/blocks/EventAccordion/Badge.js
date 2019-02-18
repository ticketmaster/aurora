import React from "react";
import styled from "styled-components";

import { StatusBadge as AuroraBadge } from "../../components/StatusBadge";
import { typography, themes } from "../../theme";
import {Text as AuroraText} from "../../components/Text"

import {mediumAndUp} from "../../theme/mediaQueries"

const Wrapper = styled.div` display: inline;`;

const Text = styled(AuroraText)`
  color: ${themes.global.error.base};
  font-size: ${typography.size.uno};
  font-weight: ${typography.weight.semiBold};
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
`;

const Badge = ({label}) => {
  switch (label) {
    case "error":
      return (
        <Wrapper className="badge">
          <AuroraBadge
            color={themes.global.error.base}
            label={label}
            size="uno"
          />
        </Wrapper>
      );
    default:
      return (
        <Wrapper className="badge">
          <Text primary size="uno">
              ON SALE:
              <span>{label}</span>
          </Text>
        </Wrapper>
      );
  }
};

export default Badge;
