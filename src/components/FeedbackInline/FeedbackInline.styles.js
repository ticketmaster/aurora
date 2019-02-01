import styled from "styled-components";
import { spacing, constants, typography } from "../../theme";
import getThemeValue from "../../utils/getThemeValue";
import { LinkCta, Text } from "../Text";

export const MAX_FEEDBACK_HEIGHT = 1000;
export const BASE_FEEDBACK_HEIGHT = 21;

export const Link = styled(LinkCta)`
  padding-left: ${spacing.slim};
  color: ${getThemeValue("primary", "base")};
`;

export const Container = styled.div`
  position: relative;
  display: inline-flex;
  overflow: hidden;
  transition: max-height 0.3s ${constants.easing.easeInOutQuad};
  box-sizing: border-box;
`;

export const ContentSection = styled.div`
  font-family: Averta, Courier, monospace;
`;

export const Content = styled(Text)`
  padding-top: ${spacing.cozy};
  opacity: 1;
  transition: opacity 0.3s ${constants.easing.easeInOutQuad} 0.1s;
  line-height: ${typography.lineHeight.header};

  .collapsed & {
    transition: opacity 0.1s ${constants.easing.easeInOutQuad};
    opacity: 0;
  }
`;

export const IconSection = styled.div`
  padding-right: ${spacing.cozy};
`;

export const Heading = styled(Text)`
  line-height: ${typography.lineHeight.header};
`;
