import styled, { css } from "styled-components";
import { Button as AuroraButton } from "../../components/Button";
import { Row as AuroraRow } from "../../components/Grid";
import { Text } from "../../components/Text";
import colors from "../../theme/colors";

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
  color: ${colors.azure.hoverLight};
  display: block;
  flex-direction: column;
  margin-right: 8px;

  && p:first-child {
    color: #904eba;
  }
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
  EventTextWrapper,
  Month
};
