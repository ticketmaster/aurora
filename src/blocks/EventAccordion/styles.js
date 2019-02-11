import styled, { css } from "styled-components";
import { Button as AuroraButton } from "../../components/Button";
import { mediumAndUp } from "../../theme/mediaQueries";
import { Row as AuroraRow } from "../../components/Grid";
import { Text } from "../../components/Text";

import colors from "../../theme/colors";
import constants from "../../theme/constants";

const Col = styled.div`
  max-width: none;
  flex: 0;
`;

const Row = styled(AuroraRow)`
  flex: 1 1;
  margin: 0 !important;
`;

const Button = styled(AuroraButton)`
  display: column;
  width: 102px;
`;

const ChevronWrapper = styled.button`
  background: none;
  border: none;
  display: flex;
  flex: 0;
  padding-left: 16px;
  padding-right: 16px;
  min-width: 48px;
  position: relative;

  && :focus {
    outline: none;
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      .chevron {
        transform: rotate(-180deg);
      }
    `};
`;

const EventDate = styled.div`
  display: block;
  flex-direction: column;
  color: ${colors.azure.hoverLight};
`;

const DayAndTime = styled(Text)`
  line-height: 16px;
  margin: 0 !important;
  display: block;
  padding-left: 4px;
  padding-right: 16px;
  color: rgba(38, 38, 38, 0.6);
`;

const Month = styled(DayAndTime)`
  line-height: 20px;
  text-transform: uppercase;
  color: #904eba;
`;

const EventWrapper = styled(Row)`
  margin: 4px;
  padding: 4px 0px 4px 0px;

  .ctaButton {
    display: none;
  }

  .chevronWrapper {
    display: none;
  }

  .ctaEllipsis {
    display: inline;
  }

  ${mediumAndUp`
    padding: 4px 16px 4px 0px;

    .ctaButton {
      display: inline;
    }

    .chevronWrapper {
      display: inline;
    }

    .ellipsis {
      display: none;
    }
  `};
`;

const BadgeWrapper = styled.span`
  display: flex;
  height: 20px;
`;

const EventInfoWrapper = styled(Row)`
  flex: 1 1;
  margin: 0 !important;
  padding-bottom: 14px;
  padding-top: 14px;

  &&:hover {
    background: lavender;
  }
`;

const NameAndTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${isOpen =>
    isOpen &&
    css`
      .eventTitle {
        display: hidden;
      }
    `};
`;

const EventTextWrapper = styled(Col)`
  flex: 1 1;
  * {
    margin: 0;
  }

  && *:nth-child(3) {
    margin-top: 4px;
  }
`;

const EventCTAWrapper = styled(Col)`
  padding-left: 16px;
  padding-top: 14px;

  p {
    text-align: right;
    margin-top: 4px;
  }
`;

const DesktopBadge = styled(EventCTAWrapper)`
  display: flex;
  flex: 1 1;
  max-width: 100px;
  max-height: 51px;

  p {
    margin: 0;
  }
`;

const EventTitle = styled(Text)`
  overflow: hidden;
  position: relative;
  line-height: 20px;
  max-height: 20px;
  text-align: justify;
  /* margin-right: -1em;
  padding-right: 1em; */

  /* &&:before {
    content: "...";
    position: absolute;
    right: 0;
    bottom: 0;
  }
  &&:after {
    content: "";
    position: absolute;
    right: 0;
    width: 1em;
    height: 1em;
    margin-top: 0.2em;
    background: white;
  } */
`;

const EventName = styled(Text)`
  color: rgba(38, 38, 38, 0.6);
  line-height: 16px;
  /* margin-right: -1em; */
  max-height: 36px;
  overflow: hidden;
  /* padding-right: 1em; */
  position: relative;
  text-align: justify;

  /* &&:before {
    bottom: 0;
    content: "...";
    position: absolute;
    right: 0;
  }
  &&:after {
    background: white;
    content: "";
    height: 1em;
    margin-top: 0.2em;
    position: absolute;
    right: 0;
    width: 1em;
  } */
`;

export {
  BadgeWrapper,
  Button,
  NameAndTitleWrapper,
  ChevronWrapper,
  DayAndTime,
  DesktopBadge,
  EventCTAWrapper,
  EventDate,
  EventInfoWrapper,
  EventName,
  EventTextWrapper,
  EventTitle,
  EventWrapper,
  Month
};
