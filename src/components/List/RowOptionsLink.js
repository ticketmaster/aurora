import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import classnames from "classnames";

import { Column, Row } from "../Grid";
import { Link } from "../Text";
import { mediumAndUp, largeAndUp } from "../../theme/mediaQueries";
import constants from "../../theme/constants";
import spacing from "../../theme/spacing";

import {
  ROW_CONTAINER_VERTICAL_PADDING,
  ROW_LABEL_AND_LINK_PADDING_LEFT
} from "./constants";

const Content = styled(Row)`
  width: 100%;
  padding-left: ${ROW_LABEL_AND_LINK_PADDING_LEFT.xSmall};
  padding-bottom: ${spacing.cozy};

  ${mediumAndUp`
    padding-bottom: ${ROW_CONTAINER_VERTICAL_PADDING};
    padding-left: ${ROW_LABEL_AND_LINK_PADDING_LEFT.medium};
  `};
  ${largeAndUp`
  padding-left: ${ROW_LABEL_AND_LINK_PADDING_LEFT.large}`};
`;

const MobileLink = styled(Link)`
  display: inline-block;
  line-height: 1.1;

  ${mediumAndUp`
    display: none;
  `};
`;

const DesktopLink = styled(Link)`
  display: none;
  line-height: 1.1;
  opacity: 1;
  transition: opacity 0.3s ${constants.easing.easeInOutQuad} 0.2s;

  ${mediumAndUp`
    display: inline-block;
    
    &.link--hidden {
      opacity 0;
      transition: opacity 0.1s ${constants.easing.easeInQuad};
    }
  `};
`;

const RowOptionsLink = ({ variant, isOpen, url, index, onClick, children }) =>
  variant === "withLink" && (
    <Content className="row__content--bottom">
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
