import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import classnames from "classnames";

import { Column } from "../Grid";
import { Link } from "../Text";
import { mediumAndUp } from "../../theme/mediaQueries";
import constants from "../../theme/constants";

const OptionsContent = styled(Column)`
  width: 100%;
  position: absolute;
  left: 0;
  top: 100%;
`;

const MobileLink = styled(Link)`
  display: inline-block;
  ${mediumAndUp`
    display: none;
  `};
`;

const DesktopLink = styled(Link)`
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
    <OptionsContent>
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
    </OptionsContent>
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
