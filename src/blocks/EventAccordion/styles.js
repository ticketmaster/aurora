import styled, { css } from "styled-components";
import { Button as AuroraButton } from "../../components/Button";

const Col = styled.div`
  max-width: none;
  flex: 0;
`;

const Button = styled(AuroraButton)`
  display: column;
  width: 102px;
`;

const BadgeWrapper = styled.span`
  display: flex;
  height: 20px;
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
  DesktopBadge,
  EventCTAWrapper
};
