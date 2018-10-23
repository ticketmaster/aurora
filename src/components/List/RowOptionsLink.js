import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import classnames from "classnames";

import { Column, Row } from "../Grid";
import { LinkDeprecated } from "../Text";
import { mediumAndUp } from "../../theme/mediaQueries";
import constants from "../../theme/constants";
import spacing from "../../theme/spacing";

import {
  CHEVRON_ICON_PADDING,
  CHEVRON_ICON_SIZE,
  ROW_DATE_MEDIUM_WIDTH,
  ROW_DATE_SMALL_WIDTH
} from "./constants";

const Content = styled(Row)`
  width: 100%;
  padding-left: ${ROW_DATE_SMALL_WIDTH};
  padding-bottom: ${spacing.cozy};
  ${mediumAndUp`
    padding-left: calc(${CHEVRON_ICON_SIZE}px + ${CHEVRON_ICON_PADDING} + ${CHEVRON_ICON_PADDING} + ${ROW_DATE_MEDIUM_WIDTH});
  `};
`;

const MobileLink = styled(LinkDeprecated)`
  display: inline-block;
  ${mediumAndUp`
    display: none;
  `};
`;

const DesktopLink = styled(LinkDeprecated)`
  display: none;
  ${mediumAndUp`
    display: inline-block;
    opacity 1;
    line-height: 1.5;
    transition: opacity 0.3s ${constants.easing.easeInOutQuad} 0.2s;
    &.link--hidden {
      opacity 0;
      transition: opacity 0.1s ${constants.easing.easeInQuad};
    }
  `};
`;

const RowOptionsLink = ({ variant, isOpen, url, index, onClick, children }) =>
  variant === "withLink" && (
    <Content>
      <Column>
        <MobileLink
          linkUrl={url}
          data-index={index}
          onClick={onClick}
          className="link--row-options"
        >
          {children}
        </MobileLink>
        <DesktopLink
          href={url}
          data-index={index}
          className={classnames({
            "link--row-options": !url.length,
            "link--hidden": isOpen
          })}
        >
          {children}
        </DesktopLink>
      </Column>
    </Content>
  );

RowOptionsLink.defaultProps = {
  index: 0,
  isOpen: false,
  variant: "",
  url: "",
  onClick: () => {},
  children: null
};

RowOptionsLink.propTypes = {
  index: PropTypes.number,
  isOpen: PropTypes.bool,
  variant: PropTypes.string,
  url: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node
};

export default RowOptionsLink;
